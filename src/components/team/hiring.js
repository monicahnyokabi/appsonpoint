import React from "react";
import { Box, Text, Image } from "@chakra-ui/core";

const Hiring = props => {
    return (
        <Box>
            <Image
                src="/avataaars.png"
                size={130} />
            <Text as='h4'>
                HIRING MANAGER
            </Text>
            <Text as='h5'>
                Pauline Kalxya
            </Text>
        </Box>
    );
}

export default Hiring;