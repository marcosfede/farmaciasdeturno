import React from "react"
import Layout from "~/components/Layout/Layout"
import SEO from "~/components/SEO/SEO"
import Toolbar from "~/components/Toolbar/Toolbar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Toolbar title="Farmacias de Turno"></Toolbar>
  </Layout>
)

export default IndexPage
