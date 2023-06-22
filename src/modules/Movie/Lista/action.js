/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react"
import { Box, Image, Heading, SimpleGrid, Flex } from "@chakra-ui/react";
import { apiBase, apiKey } from "@/lib/tmdb";
import MyCard from "../../../components/Movies/MovieCard"
import HeaderL from "../../../components/Layout/HeaderL"

export default function Page() {

    const [loading, setLoading] = useState(false)
    const [state, setState] = useState();


    const fetchAllData = async () => {
        try {
            setLoading(true);

            const response = await fetch(
                `${apiBase}/discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=28`);
            const data = await response.json();
            setState(data.results);
           
            if (!state) throw 'porblema na requisicao'
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchAllData()
    }, []);

    return (
        <Box>
               <HeaderL/>
            {loading && !state && <><Heading color="white">carregando..</Heading></>}


            <Flex justifyContent={"center"}>
                <Box w={"85%"} mt="200px">
                    <SimpleGrid columns={6} spacing={10}>
                        {state?.map((item) => (
                           <MyCard it={item} img={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`} key={item.title}/>
                        ))}
                    </SimpleGrid>
                </Box>
            </Flex>

        </Box>
    )
}

