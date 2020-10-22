import React from "react";
import { Box, Text, Image, Stack, SimpleGrid } from "@chakra-ui/core";

const System = props => {
    return (
        <Box w="100%" h="10">
            <Stack isInline>
                <Image
                    src="/Annotation 2020-09-21 171708.png"
                    size={130}
                    alt="" />
                <SimpleGrid rows={2} spacing={6}>
                    <Text as='h4' fontWeight='semibold'>
                        System & Database Administration
                    </Text>
                    <Text>
                        We will manage your server installation, topology and configuration, minimize your downtimes
                        making your services available at user convenience and keep your clientelle happy.
                    </Text>
                </SimpleGrid>
            </Stack>
        </Box>
    );
}
export default System; 