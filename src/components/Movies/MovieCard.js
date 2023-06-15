/* eslint-disable jsx-a11y/alt-text */
import react from "react";
import { Image, Box, Flex } from "@chakra-ui/react";

const MovieCard = ({ img }) => {
    return (
        <Flex justify={"center"} >
            <Image
               
                 h={{xl:"300px", lg:"280px",md:"260px",sm:"220px",base:"200px",}}
                src={img}
                objectFit={"cover"} 
                alt="capa" />
        </Flex>
    )
}
export default MovieCard