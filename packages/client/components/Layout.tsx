import * as React from 'react'
import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: React.FC<Props> = ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.6.0/leaflet.css" />
    </Head>
    {children}
  </div>
)

export default Layout
