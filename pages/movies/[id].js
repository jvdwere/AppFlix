/* eslint-disable react/jsx-key */
import { Flex, Text, Image, Box, Heading } from "@chakra-ui/react"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { apiBase, apiKey } from "@/lib/tmdb";


export default function Movie() {
    const router = useRouter()
    const { id } = router.query

    const [loading, setLoading] = useState(false)
    const [state, setState] = useState();


    const fetchAllData = async () => {
        try {
            setLoading(true);

            const response = await fetch(
                `${apiBase}/movie/${id}?api_key=${apiKey}&language=pt-BR`);
            const data = await response.json();
            setState(data);
            // console.log(data);
            //console.log(state);
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
        <>
            <Flex w={"100%"} justify={"center"}>
                {loading && !state && <><Heading color="white">carregando..</Heading></>}

                <Flex mt={"50px"}>
                    <Flex
                        h={"250px"}
                        w={"1422px"}
                        mr={"-1422px"}
                        mt={"550px"}
                        backgroundImage={"linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9906337535014006) 56%, rgba(0,0,0,0.9037990196078431) 80%, rgba(0,0,0,0.6432948179271709) 92%, rgba(0,0,0,0) 100%)"}
                        alignItems={"center"}
                        p={6}
                        zIndex={"99"}>
                        <Box>
                            <Heading color={"white"} textAlign={"center"}>{state?.title}</Heading>
                            <Text mt="30px" color={"white"}>{state?.overview}</Text>
                        </Box>
                    </Flex>
                    <Image h="800px" w={"1422px"} src={`https://www.themoviedb.org/t/p/original/${state?.backdrop_path}`} alt="Backdrop" />
                </Flex>
            </Flex>
            <Box mt="100px" ml="200px">
                <Flex>
                    <Image h="400px" src={`https://www.themoviedb.org/t/p/original/${state?.poster_path}`} alt="poster" />
                    <Box p={6}>
                        <Text color="white">Data de lançamento: {state?.release_date}</Text>
                        <ul>
                            {state?.genres.map((item) => (
                                <li><Text color={'white'}>{item.name}</Text></li>
                            ))}
                        </ul>
                    </Box>
                    <Text>{ }</Text>

                </Flex>
            </Box>

        </>
    )
}
