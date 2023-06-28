/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { Flex, Spinner } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import BannerSlide from "@/src/components/Banner/BannerSlide";
import MoviesRow from '@/src/components/Movies/MoviesRow';
import { apiBase, apiKey } from "../../../lib/tmdb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { next, trending, popular, discover, action, terror } from "../../../lib/tmdb"


const inter = Inter({ subsets: ['latin'] })



export default function Home() {

    const [loading, setLoading] = useState(false)
    const [state, setState] = useState();

    const fatchAllData = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `${apiBase}/movie/now_playing?api_key=${apiKey}&language=pt-BR`
            );
            const data = await response.json();
            setState(data.results);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fatchAllData();
    }, [])


    return (
        <>
            <Flex w={"100%"} h={"100%"} justifyContent={'center'} alignItems={"center"}>
                {loading && !state &&
                    <Spinner
                        thickness='8px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />}
            </Flex>
            <BannerSlide state={state} />
            <MoviesRow state={state} cat={trending} lista="Destaques do Mes" url="/movies/lista/trending" />
            <MoviesRow state={state} cat={next} lista="Proximos lançamentos" url="/movies/lista/next" />
            <MoviesRow state={state} cat={popular} lista="Populares" url="/movies/lista/popular" />
            <MoviesRow state={state} cat={discover} tema={action} url="/movies/lista/action" lista="Ação" />
            <MoviesRow state={state} cat={discover} tema={terror} url="/movies/lista/terror" lista="terror" />

        </>


    )
}
