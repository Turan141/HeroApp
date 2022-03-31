import { HeaderNav } from '../components/header-navigation'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeaderNav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
