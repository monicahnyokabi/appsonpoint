import React from "react";
import { ThemeProvider, Box, Flex, Link, Image, Text } from "@chakra-ui/core";

const NavLink = ({ children, ...props }) => (
    <Link px={2} color="white" {...props}>
        {children}
    </Link>
);

const Header = props => {


    return (
        <Flex
            bg="blue.400"
            w="100%"
            px={5}
            py={4}
            justifyContent="space-between"
            alignItems="center"
        >
            <Flex flexDirection="row" justifyContent="center" alignItems="center">
                <Image
                    src="/group2.png"
                    size={70}
                />
            </Flex>
            <Box>
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Services</NavLink>
                <NavLink>Team</NavLink>
                <NavLink>Contact</NavLink>
            </Box>
        </Flex>
    );
};

export default Header;
