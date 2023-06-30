import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, IconButton, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons'
import Link from "next/link";
import { SearchIcon } from '@chakra-ui/icons'
import { apiBase, apiKey } from "../../../lib/tmdb";
import MyCard from "../../components/Movies/MovieCard";


const Search = () => {

    const [searchText, setSearchText] = useState('')
    const [resultsMovies, setResultsMovies] = useState([])
    const [notFoundMovies, setNotFoundMovies] = useState('')


    const handleSearch = async () => {

        if (searchText !== '') {
            const result = await fetch(`${apiBase}/search/movie?api_key=${apiKey}&language=pt-BR&query=${searchText}`)
            const json = await result.json();

            if (json.results.length === 0) {
                console.log(`O Filme "${searchText}" nao foi encontrado`)
                let message = `O Filme "${searchText}" nao foi encontrado`
                setNotFoundMovies(message)
            }

            setResultsMovies(json.results)
            console.log(json.results)
            setNotFoundMovies('')
        }


    }


    return (
        <Box h={"100%"} >
            <Flex justifyContent={"center"} bg={"black"}>
                <Flex mt={"150px"}>
                    <Link href={"/"}>
                        <ArrowBackIcon boxSize={"30px"} color="#ECC94B" />
                    </Link>
                    <Input
                        color={'white'}
                        variant='flushed'
                        focusBorderColor='#FFDF6B'
                        borderColor={"#ECC94B"}
                        fontSize={"50pt"}
                        p={6}
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                        h='70px' />
                    <IconButton onClick={handleSearch} variant={"link"} size='lg' icon={<SearchIcon color="#ECC94B" boxSize={"50px"} />} />
                </Flex>
            </Flex>
            <Heading textAlign={'center'} mt={'50px'} color={'white'}>{notFoundMovies}</Heading>
            <Flex w={"70%"}justify={"right"}>
                <SimpleGrid columns={4} spacing={10}>
                    {resultsMovies && resultsMovies.map((item) =>
                        <MyCard it={item} img={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`} key={item.title} />
                    )}
                </SimpleGrid>
            </Flex>
        </Box>
    )
}

export default Search;