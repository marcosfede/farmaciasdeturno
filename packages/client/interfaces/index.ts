export interface Pharmacy {
  id: number
  name: string
  phone: string
  address: string
  latlng: {
    type: 'Point'
    crs: {
      type: 'name'
      properties: {
        name: string
      }
    }
    coordinates: [number, number]
  }
  region: {
    id: number
    name: string
  }
}
export interface ShiftsResponse {
  id: number
  startsAt: string
  endsAt: string
  pharmacies: Pharmacy[]
}
