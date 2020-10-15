import React from "react";
import { Box, Text, Image } from "@chakra-ui/core";

const Cto = props => {
    return (
        <Box>
            <Image
                src="/avataaars.png"
                size={130} />
            <Text as='h4'>
                CTO
            </Text>
            <Text as='h5'>
                John Walker
            </Text>
        </Box>
    );
}

export default Cto;