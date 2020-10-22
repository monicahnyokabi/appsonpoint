import React from "react";
import { Box, Text, Image, Stack, SimpleGrid } from "@chakra-ui/core";

const Security = props => {
    return (
        <Box w="100%">
            <Stack isInline>
                <Image
                    src="/Annotation 2020-09-21 164340.png"
                    size={130}
                    alt="" />
                <SimpleGrid rows={2} spacing={6}>
                    <Text as='h4' fontWeight='semibold'>
                        Security
                    </Text>
                    <Text>
                        We carry out through penetration tests and identify potential vulnerabitity in your network
                        infrastructure; hardware, software and dependent resources inclusive. Our team of security
                        experts will plug these weaknesses, and provide continuous guidance on how to minimize creating
                        others as your resources grow.
                    </Text>
                </SimpleGrid>

            </Stack>
        </Box>
    );
}

export default Security;