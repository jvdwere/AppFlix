import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Box, Flex } from '@chakra-ui/react';


const MyCard = ({ img }) => {

    return (

        <Flex alignItems={'center'} justifyContent={'center'} w='400px' >
            <Box >
                <Image
                    h={'200px'}
                    w={'250px'}
                    src={img}
                    alt='Green double couch with wooden legs'
                    borderRadius='5px'
                />


            </Box>
        </Flex>


    )
}

export default MyCard;