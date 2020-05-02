import { AppProps } from 'next/app'
import { LocationContextProvider } from '../context/location'

import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocationContextProvider>
      <Component {...pageProps} />
    </LocationContextProvider>
  )
}

export default MyApp
