import axios from 'axios'
import * as cheerio from 'cheerio'
import admin, { ServiceAccount } from 'firebase-admin'
import serviceAccount from './serviceAccountKey.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
  databaseURL: 'https://farmaciasdeturno.firebaseio.com',
})
const db = admin.firestore()
db.settings({ timestampsInSnapshots: true })
const deturnoRef = db.collection('deturno')

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

async function saveToDB(farmacias: Farmacia[]) {
  return deturnoRef.add({ timestamp: new Date(), payload: farmacias })
}

export async function run() {
  const farmacias = await scrap()
  if (farmacias) {
    await saveToDB(farmacias)
  } else {
    // retry in 1 min
    setTimeout(run, 1000 * 60 * 1)
  }
}
