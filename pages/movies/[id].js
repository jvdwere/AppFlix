/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { Flex, Text, Image, Box, Heading, Button, ButtonGroup, SimpleGrid, Spinner } from "@chakra-ui/react"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { apiBase, apiKey } from "@/lib/tmdb";
import { addHours, parseISO, isAfter } from 'date-fns';
import { format } from 'date-fns-tz';


export default function Movie() {

    const router = useRouter()
    const { id } = router.query

    const [loading, setLoading] = useState(false)
    const [state, setState] = useState();

    const fetchAllData = async () => {
        try {
            setLoading(true);
            if (id) {
                const response = await fetch(
                    `${apiBase}/movie/${id}?api_key=${apiKey}&language=pt-BR`);
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
    if (!state) {
        return <Text>problema na requisição</Text>
    }

    const handleTimeMovie = () => {
        let min = parseInt(state?.runtime)
        let hors = parseInt(min / 60)
        min = min % 60
        const timeMovie = `${hors}H${min}M`
        return timeMovie

    }



    const formatDate = () => {
        const date = state?.release_date
        const parsedDate = parseISO(date)
        const formattedDate = format(parsedDate, 'dd/M/yyyy')
        return formattedDate
    }

    const basicBoxStyles = {
        display: 'flex',
        width: '1920px',
        height: '1080px',
        background:
            `url(https://www.themoviedb.org/t/p/original/${state?.backdrop_path}) center/cover no-repeat`,
    }

    return (

        <Box sx={basicBoxStyles} bg="blackAlpha.900">

            <Box p={"300px"} zIndex={"999"} w={'100%'} h={"2000"} backgroundImage={"linear-gradient(0deg, rgba(0,0,0,1) 40%, rgba(0,0,0,0.9514180672268907) 60%, rgba(0,0,0,0.8421743697478992) 80%, rgba(0,0,0,0.7021183473389356) 100%)"}  >
                <Flex>
                    {loading && !state && <Flex><Spinner
                        thickness='8px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    /></Flex>}
                    <Box>
                        <Box width={"70%"} mt="200px">
                            <Box w={"750px"}>
                                <Heading color={"white"} fontSize={"40pt"}>{state?.title}</Heading>
                                <Text color={"white"} fontSize={'10.5pt'}>{state?.tagline}</Text>
                                <Text color={"white"} fontSize={'9pt'} mt='10px'>{handleTimeMovie()}</Text>
                                <ButtonGroup mt="50px"><Button>Assitir trailer</Button><Button>Favorito</Button></ButtonGroup>
                                <Flex mt={'30px'} alignContent={'center'}>
                                    {state && state?.genres.map((item) => (
                                        <Text ml="10px" fontSize={"10pt"} color={'white'}>{item.name}</Text>
                                    ))}

                                </Flex>
                                <Text mt="10px" color={"white"} fontSize={"11pt"}>Data de Lançamento:   {formatDate()} </Text>


                                <Text mt="30px" color={"white"} fontSize={"11pt"}>{state?.overview}</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Image h="600px" ml='150px' src={`https://www.themoviedb.org/t/p/original/${state?.poster_path}`} alt="poster" />
                </Flex>
                <Box mt={'50px'}>
                    <Heading color="white">Produzido por:</Heading>
                    <SimpleGrid columns={5} spacing={2}>
                        {state && state?.production_companies.map((item) => (
                            <Flex alignItems={"center"} w={"230px"} mt={'30px'}>
                                <Box bg='gray.300' p={2} borderRadius={'10px'}>
                                    <Image alt='logo' src={`https://www.themoviedb.org/t/p/original/${item.logo_path}`} />
                                </Box>
                            </Flex>
                        ))}
                    </SimpleGrid>
                </Box>
            </Box>
        </Box>
    )
}
