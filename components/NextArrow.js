import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import React from 'react'
import { Box, IconButton } from '@chakra-ui/react'

const NextArrow = ({ onClick }) => {

    return (
        
        <IconButton w='80px' h='80px'  color='blak' onClick={onClick} icon={<ArrowRightIcon />} cursor={'pointer'}  />


    )
}

export default NextArrow