import react from "react";
import { Box, Flex } from "@chakra-ui/react";
import Hamburger from "./Menu/Hamburger";
import InputSearch from "./InputSearch";
import LogButton from "../Auth/LogButton";

const HeaderL = () => {

    return (
        <Flex
            className="HeaderL"
            alignItems={"center"}>
            <Hamburger />
            <Flex
                justifyContent={"center"}
          
                width={"100%"}>
                <InputSearch />
            </Flex>
            <LogButton />
        </Flex>
    )
}

export default HeaderL;