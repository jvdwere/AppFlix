import { IconButton, Input, Flex } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'



const SearchInput = () => {

    return (
        <Flex alignItems={"center"} bg={"White"} borderRadius={"10px"}>
            <Input placeholder="Buscar" w={"200px"} h={"30px"} bg={"White"} fontSize={"15pt"} />
            <IconButton icon={<SearchIcon />} h={"30px"} />
        </Flex>
    )

}



export default SearchInput;