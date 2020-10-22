import React from "react";
import { Box, Text, Image, Stack, SimpleGrid } from "@chakra-ui/core";

const Scalability = props => {
    return (
        <Box w="100%" h="10">
            <Stack isInline>
                <Image
                    src="/Annotation 2020-09-21 170012.png"
                    alt="" />
                <SimpleGrid rows={2} spacing={6}>
                    <Text as='h4' fontWeight='semibold'>
                        Scalability & Performance
                    </Text>
                    <Text>
                        We pride ourselves in being able to make your application handle millions of user requests
                        as quickly and efficiently as it handles a single user. This is vital in creating a pleasant
                        user experience, and keep them loyal to you.
                    </Text>
                </SimpleGrid>
            </Stack>
        </Box>
    );
}

export default Scalability;