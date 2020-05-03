import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Map from '../components/Map'
import { GetServerSideProps } from 'next'
import { ShiftsResponse } from '../interfaces'

const IndexPage: React.FC<{ data: ShiftsResponse | null }> = ({ data }) => (
  <Layout title="Farmacias de Turno">
    <Map pharmacies={data?.pharmacies ?? []}></Map>
  </Layout>
)

export default IndexPage

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.BACKEND_URL_SSR}/onduty`)
  const data = res.ok ? await res.json() : null

  return {
    props: { data }, // will be passed to the page component as props
  }
}
