import React from 'react'
import { IonPage, IonList, IonItem, IonLabel, IonContent } from '@ionic/react'
import { Layout, SEO, Map, Header, GeolocateButton, PharmacyList } from '../components'

import './index.css'
import PharmacyItem from '../components/PharmacyItem/PharmacyItem'
import styled from 'styled-components'

interface IState {
  showMap: boolean
}
// const geolocate() {
//   geolocationObservable
//     .takeFirst()
//     .catch((e) => {
//       console.log('No se pudo acceder a la geolocalizacion')
//       return Promise.reject(e)
//     })
//     .then((geolocation) => console.log(geolocation))
// }

const List = styled.div`
  margin-top: 50vh;
  display: block;
  width: 100vw;
  position: relative;
  background: #f5f5f5;
`

const IndexPage = () => {
  return (
    <Layout>
      <IonPage id="main">
        <SEO title="Home" keywords={[`pharmacies`, `application`, `react`]} />
        <Header />
        <IonContent>
          <Map className="map" />
          {/* <PharmacyList
          className={dynamicClassName({ 'pharmacy-list': true })}
          pharmacies={mock.pharmacies as Pharmacy[]}
        /> */}
          <GeolocateButton />
          <List>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <PharmacyItem />
            ))}
          </List>
        </IonContent>
      </IonPage>
    </Layout>
  )
}

export default IndexPage
