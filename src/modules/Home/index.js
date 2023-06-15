import { Inter } from 'next/font/google'
import Head from 'next/head'
import BannerSlide from "@/src/components/Banner/BannerSlide"
import MoviesRow from '@/src/components/Movies/MoviesRow'

import HeaderL from "../../components/Layout/HeaderL"

const inter = Inter({ subsets: ['latin'] })
import { next, trending } from "../../../lib/tmdb"

export default function Home() {
    return (


        <>
            <Head>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <HeaderL />
            <BannerSlide />
            <MoviesRow cat={trending} lista="Destaques do Mes" />
            <MoviesRow cat={next} lista="Proximos lançamentos" />
        </>


    )
}
