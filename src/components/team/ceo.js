import React from "react";
import { Box, Text, Image } from "@chakra-ui/core";

const Ceo = props => {
    return (
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

export default Ceo;