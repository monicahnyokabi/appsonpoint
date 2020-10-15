import React from "react";
import { Grid, Box, Text, Image } from "@chakra-ui/core";
import CEO from "./components/team/ceo";
import CTO from "./components/team/cto";
import COO from "./components/team/coo";
import Hiring from "./components/team/hiring";

const Team = props => {
    return (
        <Grid templateRows="repeat(1, 1fr)" gap={6} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} mr={{ md: 6 }} >

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
                    Team
                </Text>
            </Box>

            <Grid templateColumns="repeat(4,8fr)" gap={6} mt={{ base: 4, md: 4 }} ml={{ md: 6 }} mr={{ md: 6 }}>
                <CEO />
                <CTO />
                <COO />
                <Hiring />
            </Grid>
        </Grid>
    );
}

export default Team;