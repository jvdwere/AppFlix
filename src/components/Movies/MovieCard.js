
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Image, Box, Flex } from "@chakra-ui/react";
import Link from "next/link";




const MovieCard = ({ img, it }) => {

    return (
        <Flex justify={"center"} >
            <Link href={`/movies/${it.id}`}>
                <Image
                    h={{ xl: "300px", lg: "280px", md: "260px", sm: "220px", base: "200px", }}
                    src={img}
                    objectFit={"cover"}
                    alt="capa" /></Link>
        </Flex>
    )
}
export default MovieCard