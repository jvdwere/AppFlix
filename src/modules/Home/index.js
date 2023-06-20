/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import BannerSlide from "@/src/components/Banner/BannerSlide";
import MoviesRow from '@/src/components/Movies/MoviesRow';
import HeaderL from "../../components/Layout/HeaderL";
import { apiBase, apiKey } from "../../../lib/tmdb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { next, trending, popular, discover, action, terror } from "../../../lib/tmdb"


const inter = Inter({ subsets: ['latin'] })



export default function Home() {
    const [state, setState] = useState();
    useEffect(() => {
        async function call() {
            const response = await fetch(
                `${apiBase}/movie/now_playing?api_key=${apiKey}&language=pt-BR`

            );
            const data = await response.json();

            setState(data.results);
        }

        call();
    }, []);


    return (
        <>
            <HeaderL />
            <Box>
                <BannerSlide state={state} />
            </Box>
        
                <MoviesRow state={state} cat={trending} lista="Destaques do Mes" />
                <MoviesRow state={state} cat={next} lista="Proximos lançamentos" />
                <MoviesRow state={state} cat={popular} lista="Populares" />
                <MoviesRow state={state} cat={discover} tema={action} lista="Ação" />
                <MoviesRow state={state} cat={discover} tema={terror} lista="terror" />
        
        </>


    )
}
