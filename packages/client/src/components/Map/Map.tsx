import React from 'react'
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet'
import { markerIcon } from './icons'
import NoSSR from '~/utils/noSSR'
import 'leaflet_css'

import './Map.css'

interface IProps {
  className: string
}

interface IState {
  lat: number
  lng: number
  zoom: number
}

class Map extends React.PureComponent<IProps, IState> {
  static defaultProps = {
    className: '',
  }

  state = {
    lat: -34.9416844,
    lng: -57.969669,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <NoSSR>
        <div className={this.props.className}>
          <LeafletMap center={position} zoom={this.state.zoom} style={{ height: '100%' }} zoomControl={false}>
            <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
            <Marker position={position} icon={markerIcon} />
          </LeafletMap>
        </div>
      </NoSSR>
    )
  }
}

export default Map
