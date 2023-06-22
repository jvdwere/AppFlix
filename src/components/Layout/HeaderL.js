import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Hamburger from "./Menu/Hamburger";
import SearchButton from "./SearchButton";
import LogButton from "../Auth/LogButton";
import Link from "next/link";

const HeaderL = () => {
   
    return (
        <Flex
            className="HeaderL"
            backdropFilter="auto"
            backdropBrightness='70%'
            backdropBlur={"10px"}
            alignItems={"center"}>
            <Heading ml="20px" color={"white"}><Link href={"/"}>LOGO</Link></Heading>
            <Flex
                justifyContent={"center"}
                width={"100%"}>
                <SearchButton />
            </Flex>
            <LogButton />
        </Flex>
    )
}

export default HeaderL;