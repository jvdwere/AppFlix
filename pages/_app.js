import * as React from 'react'
import '../styles/globals.css'
import { ChakraProvider, Box } from '@chakra-ui/react'
import Layout from '@/src/components/Layout/Layout'
import HeaderL from '@/src/components/Layout/HeaderL'


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <HeaderL/>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>)
}
