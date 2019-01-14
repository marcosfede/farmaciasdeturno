import 'reflect-metadata'
import { createConnection, getRepository } from 'typeorm'
import { Pharmacy } from '../src/entities/pharmacies/pharmacies.entity'

createConnection()
  .then(async (connection) => {
    const pr = getRepository(Pharmacy)
    const pharmacies = await pr.find()
    console.log('pharmacies: ', pharmacies)
  })
  .catch(console.error)
