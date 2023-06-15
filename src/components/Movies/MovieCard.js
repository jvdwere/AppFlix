/* eslint-disable jsx-a11y/alt-text */
import react from "react";
import { Image, Box } from "@chakra-ui/react";

const MovieCard = ({ img }) => {
    return (
        <Box >
            <Image
                h="300"
                src={img}
                alt="capa" />
        </Box>
    )
}
export default MovieCard