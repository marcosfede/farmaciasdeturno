interface Pharmacy {
  id: number
  name: string
  phone: string | null
  address: string
  latlng: {
    type: 'Point'
    coordinates: [number, number]
  }
  region: {
    id: number
    name: string
  }
}
