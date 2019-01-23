import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Map from '../components/SimpleMap'
import './index.css'

class IndexPage extends React.PureComponent {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      </Layout>
    )
  }
}

export default IndexPage
