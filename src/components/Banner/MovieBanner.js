/* eslint-disable jsx-a11y/alt-text */
import react from "react";
import { Img, Box, Flex, Heading, Text } from "@chakra-ui/react";

const MovieBanner = ({ image, name, sinopse, date }) => {
    return (
        <Box >
            <Img
                h="700px"
                src={image}
                alt="capa" />

            <Flex>
                <Flex className="name-info"
                    backdropFilter="auto"
                    backdropBrightness='50%'
                    backdropBlur={"5px"}
                    color={'white'}
                    mt={"-200px"}
                    w={"1245px"}
                    h={"200px"}>
                    <Box ml={'20px'} mt={'10px'}>
                        <Heading >{name}</Heading>
                        <Text mt={'20px'} w={"1145px"}>{sinopse}</Text>
                        <Text w={"1145px"}>Lançamento: {date}</Text>
                       
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}
export default MovieBanner