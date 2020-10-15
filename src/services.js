import React from "react";
import Mobile from "./components/service/mobile";
import Responsive from "./components/service/responsive";
import Security from "./components/service/security";
import Scalability from "./components/service/scalability";
import System from "./components/service/system";
import Consultancy from "./components/service/consultancy";

import { Grid, Box, Text } from "@chakra-ui/core";

const Services = props => {
    return (
        <Grid templateRows="repeat(2, 2fr)" gap={6} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} mr={{ md: 6 }} >

            <Box borderRadius="50px 0px 50px 0px"
                background="#3658fe"
                h='80px'
                w='250px'
                padding='15px'
                boxShadow='lg'
                mt={{ base: 4, md: 16 }}
            >
                <Text as='h3'
                    color='white'
                    textAlign='center'
                    padding='15px'>
                    Services
                </Text>
                
            </Box>

            <Grid templateColumns="repeat(3,1fr)" gap={6} ml={{ md: 6 }} mr={{ md: 6 }}>
                <Mobile />
                <Responsive />
                <Security />
            </Grid>

            <Grid templateColumns="repeat(3,1fr)" gap={6}>
                <Scalability/>
                <System/>
                <Consultancy/>
            </Grid>
        </Grid>
    );
};

export default Services;