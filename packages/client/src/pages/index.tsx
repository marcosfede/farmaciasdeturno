import React, { Suspense } from 'react'

import { Link } from 'gatsby'
import { Button } from 'antd-mobile'

import Layout from '../components/Layout'
import Image from '../components/Image'
import SEO from '../components/Seo'
import Map from '../components/Map'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Button type="primary">Primary</Button>
    {typeof window !== 'undefined' && Map && <Map />}
  </Layout>
)

export default IndexPage
