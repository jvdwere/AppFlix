/* eslint-disable jsx-a11y/alt-text */
import react from "react";
import { Img, Box, Flex, Heading, Text } from "@chakra-ui/react";

const MovieBanner = ({ image, name, sinopse, date }) => {

    return (


        <Flex justifyContent={"center"} >
            <Box>
                <Img
                    h={{ xl: "750px", lg: "500px", md: "300px", sm: "200px", base: "200px" }}
                    src={image}
                    alt="capa"
                    objectFit={"cover"}
                />
                <Flex mt={"-300px"} color={"white"} h={"290px"}>
                    <Flex
                        backdropFilter="auto"
                        backdropBrightness='50%'
                        backdropBlur={"5px"}
                        w={"1145px"}
                    >
                        <Box
                            ml={'20px'}
                            mt={'10px'}>
                            <Heading>{name}</Heading>
                            <Text
                                mt={'20px'}
                                
                            >{sinopse}</Text>
                            <Text >Lançamento: {date}</Text>

                        </Box>
                    </Flex>
                </Flex>
            </Box>

        </Flex>

    )
}
export default MovieBanner