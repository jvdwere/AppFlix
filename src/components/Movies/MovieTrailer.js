/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import {
    Flex, Image, Box, Heading, Button, ButtonGroup, SimpleGrid, Spinner, Text

} from "@chakra-ui/react";
import ReactPlayer from 'react-player/youtube';
import { apiBase, apiKey } from "@/lib/tmdb";



export const MovieTrailer = () => {

    const router = useRouter()
    const { id } = router.query


    const [state, setState] = useState();


    const [loading, setLoading] = useState(false)

    const notFaundMenssage = "Trailer Nao encontrado"
    const fetchAllData = async () => {
        try {
            if (state?.results.key === undefined) {
                return notFaundMenssage
            }
            if (id) {
                setLoading(true);
                const response = await fetch(
                    `${apiBase}/movie/${id}/videos?api_key=${apiKey}&language=pt-BR`);
                const data = await response.json();
                setState(data);
            }

        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        fetchAllData()
    }, [id]);
    if (state?.results === 0) {
        return <Text>Treiler Nao  encontrado</Text>
    }




    return (
        <Flex justifyContent={"center"} alignItems={"center"}>
            <Box  >
                {loading && !state &&
                    <Spinner
                        thickness='8px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />}
                <Text>{notFaundMenssage}</Text>
                <ReactPlayer width={"900px"} height={'500px'} controls={true} playing={true} url={`https://www.youtube.com/watch?v=${state?.results[0].key}`} />
            </Box>
        </Flex>
    )


}

