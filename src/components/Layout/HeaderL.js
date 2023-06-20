import react from "react";
import { Box, Flex } from "@chakra-ui/react";
import Hamburger from "./Menu/Hamburger";
import SearchInput from "./SearchInput";
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
                <SearchInput />
            </Flex>
            <LogButton />
        </Flex>
    )
}

export default HeaderL;