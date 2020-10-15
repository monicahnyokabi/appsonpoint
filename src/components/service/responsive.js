import React from "react";
import { Box, Text, Image, Stack, SimpleGrid } from "@chakra-ui/core";

const Responsive = props => {
    return (
        <Box w="100%" h="10">
            <Stack isInline>
                <Image
                    src="/Annotation 2020-09-21 163901.png"
                    size={130}
                    alt="" />
                <SimpleGrid rows={2} spacing={6}>
                    <Text as='h4' fontWeight='semibold'>
                        Responsive Web Design
                    </Text>
                    <Text>
                        We design, develop, commission and maintain fast, beautiful and websites that will look
                        great on any screen and keep your visitors coming back.
                    </Text>
                </SimpleGrid>

            </Stack>
        </Box>
    );
}

export default Responsive;