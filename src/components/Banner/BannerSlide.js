/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import MovieBanner from "./MovieBanner";

const BannerSlider = ({state}) => {


  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "160px",
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "160px",
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Flex>
      <Box
        className="box-banner">
        <Slider className="slide-banner" {...settings}>
          {state && state.map(item => (<MovieBanner it={item} date={item.release_date} sinopse={item.overview} name={item.title} image={`https://www.themoviedb.org/t/p/original/${item.backdrop_path}`} key={item.title} />))}
        </Slider>
      </Box >
    </Flex>
  );
};
export default BannerSlider;
