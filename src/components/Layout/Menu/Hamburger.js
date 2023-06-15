import { Box,Icon,Button,Flex } from "@chakra-ui/react";
import {GiHamburgerMenu } from 'react-icons/gi';

export default function Hamburger(){
    return (
    <Button ml={"20px"} p={1}><Icon  as={GiHamburgerMenu} /></Button>)
}