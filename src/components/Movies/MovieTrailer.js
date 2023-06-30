import React from "react";
import { useDisclosure } from '@chakra-ui/react'
import {
    Flex, Image, Box, Heading, Button, ButtonGroup, SimpleGrid, Spinner,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    Lorem,
    ModalFooter,
    Text,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import ReactPlayer from 'react-player/youtube';

export const MovieTrailer = () => {


    return (
        <>
            <ReactPlayer controls={true} playing={true} url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' />
        </>
    )


}

