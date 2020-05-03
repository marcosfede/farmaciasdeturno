import React, { useContext } from 'react'
import { LocationContext } from '../../context/location'
import { Map as LeafletMap, Marker, TileLayer, Circle } from 'react-leaflet'
import { LatLngTuple, divIcon } from 'leaflet'
import { Pharmacy } from '../../interfaces'

const locationIcon = divIcon({ className: 'location-marker' })

interface MapProps {
  pharmacies: Pharmacy[]
}
const Map: React.FC<MapProps> = ({ children, pharmacies }) => {
  const { position } = useContext(LocationContext)

  const positionTuple: LatLngTuple | undefined = position
    ? [position.coords.latitude, position.coords.longitude]
    : undefined

  return (
    <LeafletMap center={positionTuple} zoom={13} zoomControl={false} attributionControl={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {positionTuple && <Marker position={positionTuple} icon={locationIcon}></Marker>}
      {positionTuple && <Circle weight={0} center={positionTuple} radius={position!.coords.accuracy} />}
      <React.Fragment>
        {pharmacies.map((p) => (
          <Marker key={p.id} position={p.latlng.coordinates}></Marker>
        ))}
      </React.Fragment>
      {children}
    </LeafletMap>
  )
}

export default Map
