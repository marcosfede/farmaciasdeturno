import axios from 'axios'
import * as cheerio from 'cheerio'
import { Pharmacy, Shift, Region } from './pharmacies.entity'
import { createConnection, getManager } from 'typeorm'
import { startOfToday, addHours, addMinutes, isPast, addDays, subDays } from 'date-fns'

function trim(s) {
  return (s || '').replace(/^\s+|\s+$/g, '')
}

interface Farmacia {
  name: string
  address: string
  zone: string
  phone: string
  latlng: string
}

async function scrap() {
  let response
  try {
    response = await axios.get('http://www.colfarmalp.org.ar/turnos-la-plata/')
  } catch (e) {
    console.error('There was an error with the request')
    console.error(e)
    return
  }
  const $ = cheerio.load(response.data)
  const table = $('.turnos')
  const farmacias: Farmacia[] = []
  table.find('>.tr').each((i, v) => {
    const children = $(v).children()
    const name = trim($(children[1]).text()).replace('Farmacia ', '')
    const address = trim($(children[2]).text()).replace('Dirección ', '')
    const zone = trim($(children[3]).text()).replace('Zona ', '')
    const phone = trim($(children[4]).text()).replace('Teléfono ', '')
    const latlng = $(children[5])
      .find('a')
      .attr('href')
      .replace('https://www.google.com/maps/dir/?api=1&destination=', '')
    farmacias.push({
      name,
      address,
      zone,
      phone,
      latlng,
    })
  })
  return farmacias
}

async function getOrCreateRegion(zone: string): Promise<Region> {
  const entityManager = getManager()
  let region = await entityManager.findOne(Region, { name: zone })
  if (!region) {
    console.log('region did not exist: ', zone, ' creating...')
    region = new Region()
    region.name = zone
    await entityManager.save(region)
  }
  return region
}

async function getOrCreatePharmacy(farmacia: Farmacia): Promise<Pharmacy> {
  const entityManager = getManager()
  let pharmacy = await entityManager.findOne(Pharmacy, {
    name: farmacia.name,
  })
  if (!pharmacy) {
    console.log('pharmacy ', farmacia, 'did not exist, creating...')
    pharmacy = new Pharmacy()
    pharmacy.name = farmacia.name
    pharmacy.address = farmacia.address
    pharmacy.phone = farmacia.phone
    const coords = farmacia.latlng.split(',').map((c) => parseFloat(c))
    pharmacy.latlng = { type: 'Point', coordinates: coords }
    pharmacy.region = await getOrCreateRegion(farmacia.zone)
    await entityManager.save(pharmacy)
  }
  return pharmacy
}

async function saveShift(dbPharmacies: Pharmacy[]) {
  const entityManager = getManager()
  const sh = new Shift()
  sh.pharmacies = dbPharmacies
  // shifts start and end at 8:30 AM
  // check if "today" at 8:30 AM is in the past or future
  const sot = startOfToday()
  const sot8 = addHours(sot, 8)
  const sot830 = addMinutes(sot8, 30)
  const startsAt = isPast(sot830) ? sot830 : subDays(sot830, 1)
  const endsAt = addDays(startsAt, 1)
  sh.startsAt = startsAt
  sh.endsAt = endsAt
  console.log('created a new shift: ', sh)
  await entityManager.save(sh)
}

async function shiftChanged(farmacias: Farmacia[]): Promise<boolean> {
  const entityManager = getManager()
  const lastShift = await entityManager.findOne(Shift, {
    order: { endsAt: 'DESC' },
  })
  if (!lastShift) return true
  const lastShiftPharmacyNames = new Set(lastShift.pharmacies.map((p) => p.name))
  const areDifferent = farmacias.some((f) => !lastShiftPharmacyNames.has(f.name))
  return areDifferent
}

async function saveToPostgres(farmacias: Farmacia[]) {
  try {
    // save to db if not already there
    // const dbPharmacies = await Promise.all(farmacias.map((farmacia) => getOrCreatePharmacy(farmacia)))
    const dbPharmacies: Pharmacy[] = []
    for (const farmacia of farmacias) {
      const ph = await getOrCreatePharmacy(farmacia)
      dbPharmacies.push(ph)
    }

    await saveShift(dbPharmacies)
  } catch (e) {
    console.error(e)
  }
}

export async function scrapAndSave() {
  const farmacias = await scrap()
  console.log('scrapped farmacias: ', farmacias)
  if (!farmacias) {
    console.log('Could not scrap, sleeping 1 minute...')
    setTimeout(scrapAndSave, 1000 * 60 * 1)
    return
  }
  if (!(await shiftChanged(farmacias))) {
    console.log('Shift has not changed yet, sleeping 1 minute...')
    setTimeout(scrapAndSave, 1000 * 60 * 1)
    return
  }
  await saveToPostgres(farmacias)
}

export async function run() {
  await createConnection()
  await scrapAndSave()
}
