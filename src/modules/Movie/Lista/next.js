/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react"
import { Box, Image, Heading } from "@chakra-ui/react";
import { apiBase, apiKey } from "@/lib/tmdb";

export default function Page() {

    const [loading, setLoading] = useState(false)
    const [state, setState] = useState();


    const fetchAllData = async () => {
        try {
            setLoading(true);

            const response = await fetch(
                `${apiBase}/movie/upcoming?api_key=${apiKey}&language=pt-BR`);
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
            {loading && !state && <><Heading color="white">carregando..</Heading></>}
            <ul>
                {state?.map((item) => (
                    <li>
                        <Image alt="poster" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`} />
                    </li>
                ))}
            </ul>
        </Box>
    )
}

