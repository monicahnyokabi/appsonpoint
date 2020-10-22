import React from "react";
import { Box, Text, Image } from "@chakra-ui/core";

const Coo = props => {
    return (
        <Box>
            <Image
                src="/avataaars.png"
                size={130} />
            <Text as='h4'>
                COO
            </Text>
            <Text as='h5'>
                Mary Marks
            </Text>
        </Box>
    );

}

export default Coo;