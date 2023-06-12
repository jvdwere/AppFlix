import * as React from 'react'
import '../styles/globals.css'
import { ChakraProvider, Box } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return ( <ChakraProvider> <Box className='all'><Component {...pageProps} /></Box></ChakraProvider>)
}
