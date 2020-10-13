import React from "react";
import { Grid, Box, Text, Image, Stack, SimpleGrid } from "@chakra-ui/core";

const Services = props => {
    return (
        <Grid templateRows="repeat(2, 1fr)" gap={6}>
            <div class="d-flex justify-content-center mt-5 mb-3">
                <h3 class="rcorners3 text-white text-center">Services</h3>
            </div>
            <Grid templateColumns="repeat(3,1fr)" gap={6}>
                <Box w="100%" h="10">
                    <Stack isInline>
                        <Image
                            src="/mobile.PNG"
                            alt="" />
                        <SimpleGrid rows={2} spacing={6}>
                            <Text as='h4' fontWeight='semibold'>
                                Mobile Applications
                            </Text>
                            <Text>
                                We create elegant mobile applications with stunning features
                                that will give you are wider reach and show your clients how
                                far you are willing to go to serve them better.
                            </Text>
                        </SimpleGrid>

                    </Stack>
                </Box>
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
            </Grid>

            <Grid templateColumns="repeat(3,1fr)" gap={6}>
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
                <Box w="100%">
                    <Stack isInline>
                        <Image
                            src="/Annotation 2020-09-21 171752.png"
                            size={130}
                            alt="" />
                        <SimpleGrid rows={2} spacing={6}>
                            <Text as='h4' fontWeight='semibold'>
                                IT Consultancy
                            </Text>
                            <Text>
                                Need guidance on how to handle problems in the computer technology sphere? Talk to us. We
                                will put all the knowledge and years of experience to use to help you in the right direction.
                            </Text>
                        </SimpleGrid>
                    </Stack>
                </Box>
            </Grid>

        </Grid>

    );
};

export default Services;