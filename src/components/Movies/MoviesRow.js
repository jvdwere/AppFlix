/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import { Box, Flex, Image, SimpleGrid, Text, position } from "@chakra-ui/react";
import Slider from "react-slick";
import MyCard from "./MovieCard";
import { apiBase, apiKey } from "../../../lib/tmdb";


const MoviesRow = ({ cat, lista }) => {
  const [state, setState] = useState();

  useEffect(() => {
    async function call() {
      const response = await fetch(
        `${apiBase}${cat}?api_key=${apiKey}&language=pt-BR`
      );
      const data = await response.json();

      setState(data.results);
    }

    call();
  },);


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
          slidesToShow:1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ],
  };
  return (
    <>
      <Box w={{xl:"96%", lg:"94%",md:"92%",sm:"90%"}} margin={"auto"}>
        <Text className='categories' mt={'30px'}>{lista}</Text>
        <Slider className="slider-cat" {...settings}>
          {state && state.map((item) => <MyCard img={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`} key={item.title} />)}
        </Slider>
      </Box>
    </>


  );
};

export default MoviesRow;