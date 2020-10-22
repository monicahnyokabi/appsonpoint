import React from "react";
import { Grid, Box, Text, Image, Stack, SimpleGrid } from "@chakra-ui/core";

const Services = props => {
    return (
        <Grid templateRows="repeat(2, 1fr)" gap={6} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} mr={{ md: 6 }} >
            <div class="d-flex justify-content-center mt-5 mb-3">
                <h3 class="rcorners3 text-white text-center">Services</h3>
            </div>
            <Grid templateColumns="repeat(3,1fr)" gap={6}>
                <Box w="100%" h="10">
                    <Stack isInline>
                        <Image
                            src="/mobile.PNG"
                            alt="" />
                        <SimpleGrid rows={2} spacing={6}>
                            <Text as='h4' fontWeight='semibold'>
                                Mobile Applications
                            </Text>
                            <Text>
                                We create elegant mobile applications with stunning features
                                that will give you are wider reach and show your clients how
                                far you are willing to go to serve them better.
                            </Text>
                        </SimpleGrid>

                    </Stack>
                </Box>
             
    );
};

export default Services;