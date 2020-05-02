import React, { useState, useContext } from 'react'
import ReactMapGL, { InteractiveMapProps, BaseControl, BaseControlProps, Layer, Source } from 'react-map-gl'
import { LocationContext } from '../../context/location'
import { CustomMarker } from '../Marker'

const r_earth = 6371000
const pi = 3.14159

const createGeoJSONCircle = function (center: [number, number], radiusInKm: number, points = 64) {
  const coords = {
    latitude: center[1],
    longitude: center[0],
  }

  const km = radiusInKm

  const ret = []
  const distanceX = km / (111.32 * Math.cos((coords.latitude * Math.PI) / 180))
  const distanceY = km / 110.574

  let theta, x, y
  for (let i = 0; i < points; i++) {
    theta = (i / points) * (2 * Math.PI)
    x = distanceX * Math.cos(theta)
    y = distanceY * Math.sin(theta)

    ret.push([coords.longitude + x, coords.latitude + y])
  }
  ret.push(ret[0])

  return {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [ret],
          },
        },
      ],
    },
  }
}

interface CircleOverlayProps extends BaseControlProps {
  latitude: number
  longitude: number
  radius: number
}
class CircleOverlay extends BaseControl<CircleOverlayProps, any> {
  _render() {
    const { latitude, longitude, radius } = this.props
    const viewport = this._context.viewport!
    const [center_px_x, center_px_y] = viewport.project([longitude, latitude])
    const new_latitude = latitude + (radius / r_earth) * (180 / pi)
    const new_longitude = longitude + ((radius / r_earth) * (180 / pi)) / Math.cos((latitude * pi) / 180)

    const height = viewport.project([new_latitude, longitude])[0] - center_px_y
    const width = viewport.project([latitude, new_longitude])[1] - center_px_x

    return (
      <div
        ref={this._containerRef}
        style={{
          position: 'absolute',
          left: center_px_x - Math.round(100 / 2),
          top: center_px_y - Math.round(100 / 2),
        }}
      >
        <div
          className="location-marker-error"
          style={{
            height: 100,
            width: 100,
          }}
        ></div>
      </div>
    )
  }
}

const CircleOverlayGJSON: React.FC<CircleOverlayProps> = (props) => {
  const data = createGeoJSONCircle([props.longitude, props.latitude], props.radius / 1000)
  return (
    <Source type="geojson" data={data as any} id="circlegeojson">
      <Layer id="asd" type="fill" source="circlegeojson" paint={{ 'fill-color': 'blue', 'fill-opacity': 0.3 }} />
    </Source>
  )
}

const Map = () => {
  const { position } = useContext(LocationContext)

  const [viewport, setViewport] = useState<InteractiveMapProps>({
    width: '100vw',
    height: '100vh',
    latitude: position?.coords.latitude,
    longitude: position?.coords.longitude,
    zoom: 13,
  })
  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      attributionControl={false}
      onViewportChange={setViewport}
    >
      {position && (
        <React.Fragment>
          <CustomMarker latitude={position.coords.latitude} longitude={position.coords.longitude}>
            <div className="location-marker" />
          </CustomMarker>
          <CircleOverlay radius={500} latitude={position.coords.latitude} longitude={position.coords.longitude} />
          {/* <CircleOverlayGJSON radius={500} latitude={position.coords.latitude} longitude={position.coords.longitude} /> */}
        </React.Fragment>
      )}
    </ReactMapGL>
  )
}

export default Map
