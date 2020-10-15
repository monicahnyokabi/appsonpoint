import React from "react";
import { Box, Text, Image, Stack, SimpleGrid } from "@chakra-ui/core";

const Consultancy = props => {
    return (
        <Box w="100%">
            <Stack isInline>
                <Image
                    src="/Annotation 2020-09-21 171752.png"
                    size={130}
                    alt="" />
                <SimpleGrid rows={2} spacing={6}>
                    <Text as='h4' fontWeight='semibold'>
                        IT Consultancy
                    </Text>
                    <Text>
                        Need guidance on how to handle problems in the computer technology sphere? Talk to us. We
                        will put all the knowledge and years of experience to use to help you in the right direction.
                    </Text>
                </SimpleGrid>
            </Stack>
        </Box>
    );
}

export default Consultancy;