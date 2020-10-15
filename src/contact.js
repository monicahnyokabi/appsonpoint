import React from "react";
import { Grid, Box, Image, Text } from "@chakra-ui/core";

const Contact = props => {
    return (
        <Grid templateRows="repeat(2, 2fr)" gap={6} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} mr={{ md: 6 }} >
            <Box borderRadius="50px 0px 50px 0px"
                background="#3658fe"
                h='80px'
                w='250px'
                padding='15px'
                shadow='lg'
                mt={{ base: 4, md: 16 }}
            >

                <Text as='h3'
                    color='white'
                    textAlign='center'
                    padding='15px'>
                    Contact
                </Text>
            </Box>

            <Grid templateColumns="repeat(3,1fr)" bg="gray.500" gap={6} >


                <Box>
                    <Text as='h1'>
                        Contact Info
                    </Text>

                    <Text as='h4'>
                        info@AppsOnPoint.com
                    </Text>

                    <Text as='h4'>
                        0733 330 395
                    </Text>

                    <Text as='h1'>Address</Text>
                    <Text as='h4'>P.O. BOX 1302</Text>
                    <Text as='h4'>Nairobi, Kenya</Text>

                    <Text as='h1'>Location</Text>
                    <Text as='h4'>Hurlingham, Nairobi</Text>

                </Box>

                <Box>
                    <Text as='h4'>Home</Text>
                    <Text as='h4'>About</Text>
                    <Text as='h4'>Services</Text>
                    <Text as='h4'>Our Team</Text>
                    <Text as='h4'>Contact</Text>
                </Box>
                <Box mt={{ base: 4, md: 0 }}>
                    <Image src="/Annotation 2020-09-21 234646_1.png" />
                </Box>

            </Grid>
        </Grid>
    );
}

export default Contact;