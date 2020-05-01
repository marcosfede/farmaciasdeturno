import React, { useState } from 'react'
import ReactMapGL, { InteractiveMapProps } from 'react-map-gl'

const Map = () => {
  const [viewport, setViewport] = useState<InteractiveMapProps>({
    width: '100vw',
    height: '100vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  })
  return <ReactMapGL {...viewport} attributionControl={false} onViewportChange={setViewport} />
}

export default Map
