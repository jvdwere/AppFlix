import { Flex, Icon, Heading, Text } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'



const SearchButton = () => {

    return (
        <Flex alignItems={"center"}>
           <Text fontSize={"20pt"} fontStyle={"bold"} fontcolor={"yellow.500"}>Buscar</Text>
            <Icon h={"30px"} >{<SearchIcon />} </Icon> 
        </Flex>
    )

}



export default SearchButton;