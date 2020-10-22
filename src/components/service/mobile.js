import React from "react";
import {  Box, Text, Image, Stack, SimpleGrid } from "@chakra-ui/core";

const Mobile = props => {
    return (
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
}
export default Mobile;