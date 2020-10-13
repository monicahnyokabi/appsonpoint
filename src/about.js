import React from "react";
import { Grid, Box, Text } from "@chakra-ui/core";

const About = props => {
    return (
        <Grid templateColumns="repeat(2,1fr)" gap={6}>
            <Box p={5} boxShadow='md'  mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
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

            <Box p={5} boxShadow='md'  mt={{ base: 4, md: 4 }} ml={{ md: 6 }}>
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
    );
}
export default About;