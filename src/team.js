import React from "react";
import { Grid, Box, Text, Image, Stack, SimpleGrid } from "@chakra-ui/core";

const Team = props => {
    return (
        <Grid templateColumns="repeat(4,2fr)" gap={6} mt={{ base: 4, md: 4 }} ml={{ md: 6 }} mr={{ md: 6 }}>
            <Box>
                <Image
                    src="/avataaars.png"
                    size={130} />
                <Text as='h4'>
                    CEO
                </Text>
                <Text as='h5'>
                    Joe Doe
                </Text>
            </Box>
            
    );
}

export default Team;