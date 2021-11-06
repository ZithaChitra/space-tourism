import '../styles/style.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

import { Fragment } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp

// names={['Moon', 'Mars', 'Europa', 'Titan']}