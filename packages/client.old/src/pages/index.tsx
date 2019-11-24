import React from 'react'
import { IonPage, IonContent } from '@ionic/react'
import { Layout, SEO, Map, Header, GeolocateButton, PharmacyList } from '~/components'
import mock from '~/mock'
import './index.css'

// const geolocate() {
//   geolocationObservable
//     .takeFirst()
//     .catch((e) => {
//       console.log('No se pudo acceder a la geolocalizacion')
//       return Promise.reject(e)
//     })
//     .then((geolocation) => console.log(geolocation))
// }

const IndexPage = () => {
  return (
    <Layout>
      <IonPage id="main">
        <SEO title="Home" keywords={[`pharmacies`, `application`, `react`]} />
        <Header />
        <IonContent>
          <Map className="map" />
          <GeolocateButton />
          <PharmacyList className="pharmacy-list" pharmacies={mock.pharmacies} />
        </IonContent>
      </IonPage>
    </Layout>
  )
}

export default IndexPage
