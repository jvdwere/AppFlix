/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Slider from "react-slick";
import MyCard from "./MovieCard";
import { apiBase, apiKey } from "../../../lib/tmdb";
import Link from "next/link";


const MoviesRow = ({ cat, lista, tema, url }) => {


  const [state, setState] = useState();
  useEffect(() => {
    async function call() {
      const response = await fetch(
        `${apiBase}${cat}?api_key=${apiKey}&language=pt-BR${tema}`
      );
     
      const data = await response.json();
      
      setState(data.results);
    }
    call();
  }, []);


  const settings = {
    arrows: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,


        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ],
  };
  return (
    <>
      <Box w={{ xl: "96%", lg: "94%", md: "92%", sm: "90%" }} margin={"auto"} mt={'50px'} >

        {/* <Flex w="100%">
          <Flex> */}
          <Flex>
            <Text className='categories' w="300px">{lista}</Text> <Link href={`${url}`}><Text color={"blue.400"}>hello</Text></Link></Flex>
           {/* </Flex>
          <Flex w="100%" justifyContent={"end"}>
           
        </Flex>
        </Flex>  */}

        <Slider className="slider-cat" {...settings}>
          {state && state.map((item) => <MyCard it={item} img={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`} key={item.title} />)}
        </Slider>
      </Box>
    </>


  );
};

export default MoviesRow;