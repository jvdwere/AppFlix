import react from "react";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import HeaderL from "./HeaderL"

const Layout = ({ children }) => {

    return (
        <Box h={"10000px"} bg="blackAlpha.900">
                {children}
        </Box>

    )
}
export default Layout;