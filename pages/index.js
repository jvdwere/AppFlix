import { Inter } from 'next/font/google'
import Head from 'next/head'
import MySlider from '@/components/MySlider';
import { Box, Text, Flex,  Heading } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <><Head>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
      <Box className='box-index' >
          <Heading className='title' textAlign="center" fontStyle='bold' fontSize={'32px'} mt="50px" md="50px">
            Hello world!
          </Heading>
            <MySlider />
   
        
      </Box></>
  )
}
