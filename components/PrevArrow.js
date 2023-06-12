import { ArrowLeftIcon} from '@chakra-ui/icons'
import React from 'react'
import { Box, IconButton } from '@chakra-ui/react'

const PrevArrow = ({ onClick }) => {
    return (
        <IconButton w='80px' h='80px' color='blak' onClick={onClick} icon={<ArrowLeftIcon />} cursor={'pointer'} />


    )
}

export default PrevArrow