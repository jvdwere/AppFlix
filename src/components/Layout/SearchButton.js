import { Button, ButtonGroup } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import Link from "next/link";



const SearchButton = () => {

    return (

        <ButtonGroup alignItems={"center"}>
            <Link href={"/search"}>
                <Button fontSize={"20pt"} fontStyle={"bold"} bg={"#ECC94B"}>
                    Buscar
                    <SearchIcon ml="5px" boxSize={"25px"} />
                </Button>
            </Link>
        </ButtonGroup>

    )

}



export default SearchButton;