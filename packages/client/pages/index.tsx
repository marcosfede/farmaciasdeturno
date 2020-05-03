import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Map from '../components/Map'
import { GetServerSideProps } from 'next'
import { ShiftsResponse } from '../interfaces'

const IndexPage: React.FC<{ data: ShiftsResponse }> = ({ data }) => (
  <Layout title="Farmacias de Turno">
    <Map pharmacies={data.pharmacies}></Map>
  </Layout>
)

export default IndexPage

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:4000/onduty`)
  const data = await res.json()

  return {
    props: { data }, // will be passed to the page component as props
  }
}
