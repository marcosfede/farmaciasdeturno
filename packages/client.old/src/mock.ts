interface Response {
  id: number
  startsAt: string
  endsAt: string
  pharmacies: Pharmacy[]
}

const mockData: Response = {
  id: 1,
  startsAt: '2019-01-15T08:30:00.000Z',
  endsAt: '2019-01-16T08:30:00.000Z',
  pharmacies: [
    {
      id: 1,
      name: 'AMERICANA',
      phone: null,
      address: 'Diag 74 nro 718 esq 2',
      latlng: { type: 'Point', coordinates: [-34.9134282, -57.9548717] },
      region: { id: 1, name: 'La Plata' },
    },
    {
      id: 2,
      name: 'BRUNETTI',
      phone: null,
      address: '50 esq 31 nro 1811 1/2',
      latlng: { type: 'Point', coordinates: [-34.9251352, -57.9609881] },
      region: { id: 1, name: 'La Plata' },
    },
    {
      id: 3,
      name: 'CORIA',
      phone: null,
      address: '120 nro 2181 e/ 76 y 77',
      latlng: { type: 'Point', coordinates: [-34.9232876, -57.911136] },
      region: { id: 1, name: 'La Plata' },
    },
    {
      id: 4,
      name: 'MEGAPHARMA S.C.S.',
      phone: null,
      address: '21 E/ 64 y 65',
      latlng: { type: 'Point', coordinates: [-34.8893866, -57.958833] },
      region: { id: 1, name: 'La Plata' },
    },
    {
      id: 5,
      name: 'GLOWKO',
      phone: null,
      address: '58 nro 1765 e/ 30 y 31',
      latlng: { type: 'Point', coordinates: [-34.941125, -57.967956] },
      region: { id: 1, name: 'La Plata' },
    },
    {
      id: 6,
      name: 'KATSUMI UEMA',
      phone: null,
      address: '64 e/ 12  y 13 nro 865',
      latlng: { type: 'Point', coordinates: [-34.92913, -57.942567] },
      region: { id: 1, name: 'La Plata' },
    },
    {
      id: 7,
      name: 'LUDUEÑA',
      phone: null,
      address: '520 esq. 151 bis',
      latlng: { type: 'Point', coordinates: [-34.9325187, -58.028676] },
      region: { id: 1, name: 'La Plata' },
    },
    {
      id: 8,
      name: 'MANCUSO',
      phone: null,
      address: '26 nro 2105 esq 75',
      latlng: { type: 'Point', coordinates: [-34.9513488, -57.9443209] },
      region: { id: 1, name: 'La Plata' },
    },
    {
      id: 9,
      name: 'MORALES',
      phone: null,
      address: 'DIAG. 73 ESQ. 27 NRO 3194',
      latlng: { type: 'Point', coordinates: [-34.9206172, -57.9339369] },
      region: { id: 1, name: 'La Plata' },
    },
    {
      id: 10,
      name: 'VARAS',
      phone: null,
      address: '13 E/ 528 Y 529 NRO 333',
      latlng: { type: 'Point', coordinates: [-34.890061, -57.963251] },
      region: { id: 1, name: 'La Plata' },
    },
    {
      id: 11,
      name: 'RONCAROLO',
      phone: null,
      address: '44 E/ 196 Y 197 NRO 5073',
      latlng: { type: 'Point', coordinates: [-34.9247867, -57.9706302] },
      region: { id: 1, name: 'La Plata' },
    },
    {
      id: 12,
      name: 'SCASSO',
      phone: null,
      address: '3 E/ 62 Y 63 NRO 1477',
      latlng: { type: 'Point', coordinates: [-34.918873, -57.9351945] },
      region: { id: 1, name: 'La Plata' },
    },
    {
      id: 13,
      name: 'MEYER S.C.S.',
      phone: null,
      address: 'Cno Gral Belgrano nÂº 635 e/ 466 y 467 City Bell',
      latlng: { type: 'Point', coordinates: [-34.8975357, -57.9924908] },
      region: { id: 2, name: 'Norte' },
    },
    {
      id: 14,
      name: 'MOUZO',
      phone: null,
      address: '14 ESQ. 502',
      latlng: { type: 'Point', coordinates: [-34.9228288, -57.9562555] },
      region: { id: 2, name: 'Norte' },
    },
    {
      id: 15,
      name: 'TROIANI',
      phone: null,
      address: 'Calle 450 Nº 1691 (esq Cno. Gral. Belgrano)',
      latlng: { type: 'Point', coordinates: [-34.8749247, -58.0774371] },
      region: { id: 2, name: 'Norte' },
    },
    {
      id: 16,
      name: 'MARTINEZ',
      phone: null,
      address: '66 NRO 2527 E/ 145 Y 146',
      latlng: { type: 'Point', coordinates: [-34.9623504, -57.974899] },
      region: { id: 3, name: 'Los Hornos' },
    },
  ],
}

export default mockData