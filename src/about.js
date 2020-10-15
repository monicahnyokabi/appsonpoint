import React from "react";
import { Grid, Box, Text } from "@chakra-ui/core";

const About = props => {
    return (

        <Grid templateRows="repeat(1, 1fr)" gap={6} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} mr={{ md: 6 }} >


            <Box borderRadius="50px 0px 50px 0px"
                background="#3658fe"
                h='80px'
                w='250px'
                padding='15px'
                shadow='lg'
                mt={{ base: 4, md: 16 }}
            >

                <Text as='h3'
                    color='white'
                    textAlign='center'
                    padding='15px'>
                    About
                    </Text>
            </Box>

            <Grid templateColumns="repeat(2,1fr)" gap={6} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} mr={{ md: 6 }}>


                <Box p={5} boxShadow='md' >
                    <Text as='h4' fontWeight='semibold'>
                        WHY APPS ON POINT?
                </Text>
                    <Text as='h5'>
                        We keep your applications on point
                    </Text>
                    <Text>
                        Our expertise reach covers all the areas that are needed to keep consumer applications
                        running optimaly and flawlessly. We handle application design, development, debugging,
                        installation, maintainance, documentation, upgrading, security, database management, system
                        tuning and scaling. In addition, the term 'Apps' shows that we are modern and aware of the
                        changing trends in both the software technology and user circles.
                    </Text>
                </Box>

                <Box p={5} boxShadow='md' mt={{ base: 4, md: 4 }} ml={{ md: 6 }}>
                    <Text as='h4' fontWeight='semibold'>
                        WHY APPS ON POINT?
                    </Text>
                    <Text as='h5'>
                        We keep your applications on point
                    </Text>
                    <Text>
                        Our expertise reach covers all the areas that are needed to keep consumer applications
                        running optimaly and flawlessly. We handle application design, development, debugging,
                        installation, maintainance, documentation, upgrading, security, database management, system
                        tuning and scaling. In addition, the term 'Apps' shows that we are modern and aware of the
                        changing trends in both the software technology and user circles.
                    </Text>
                </Box>
            </Grid>
        </Grid>
    );
}
export default About;