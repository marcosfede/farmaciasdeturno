import React from 'react'

import { Layout, SEO, Map, Header, MapListToggler, GeolocateButton, PharmacyList } from '../components'
import { geolocationObservable } from '../utils/geolocationObservable'
import dynamicClassName from '../utils/dynamicClassName'
import mock from '../mock'

import './index.css'

interface IState {
  showMap: boolean
}

class IndexPage extends React.PureComponent<{}, IState> {
  state = {
    showMap: true,
  }

  toggleMap = () => {
    this.setState((state) => ({ showMap: !state.showMap }))
  }

  geolocate() {
    geolocationObservable
      .takeFirst()
      .catch((e) => {
        console.log('No se pudo acceder a la geolocalizacion')
        return Promise.reject(e)
      })
      .then((geolocation) => console.log(geolocation))
  }
  render() {
    return (
      <Layout>
        <div className="main">
          <SEO title="Home" keywords={[`pharmacies`, `application`, `react`]} />
          <Header />
          <Map className={dynamicClassName({ hidden: !this.state.showMap })} />
          <PharmacyList
            className={dynamicClassName({ hidden: this.state.showMap, 'pharmacy-list': true })}
            pharmacies={mock.pharmacies as Pharmacy[]}
          />
          <GeolocateButton onClick={this.geolocate} />
          <MapListToggler onClick={this.toggleMap} />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
