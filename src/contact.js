import React from "react";
import { Grid, Box, Image, Text } from "@chakra-ui/core";

const Contact = props => {
    return (
        <Grid templateColumns="repeat(3,1fr)" color="gray.500" gap={6} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} mr={{ md: 6 }}>
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
            <Box>
                <Image src="/Annotation 2020-09-21 234646_1.png" />
            </Box>

        </Grid>


        //         <footer class="bg-dark text-white mt-4">
        //           <div class="row">
        //             <div class="col-md-4 mt-5 p-5">
        //   <h1>Contact Info</h1>
        //   <h4>info@AppsOnPoint.com</h4>
        //   <h4>0733 330 395</h4>

        //   <h1 class="mt-5">Address</h1>
        //   <h4>P.O. BOX 1302</h4>
        //   <h4>Nairobi, Kenya</h4>

        //   <h1 class="mt-5">Location</h1>
        //   <h4>Hurlingham, Nairobi</h4>

        //             </div>
        //             <div class="col-md-4 mt-5 p-5">
        //               <h1 class="mt-5">Navigation</h1>
        //               <h4>
        //               <a class="text-white js-scroll-trigger" href="#page-top">Home</a>

        //               </h4>
        //               <h4>
        //                 <a class="text-white js-scroll-trigger" href="#about">About</a>
        //               </h4>
        //               <h4>
        //                 <a class="text-white js-scroll-trigger" href="#services">Services</a>
        //               </h4>
        //               <h4>
        //                 <a class="text-white js-scroll-trigger" href="#team">Our Team</a>
        //               </h4>
        //               <h4>
        //                 <a class="text-white js-scroll-trigger" href="#contact">Contact</a>
        //               </h4>

        //             </div>
        //             <div class="col-md-4 mt-5 p-5">
        //               <img src="/Annotation 2020-09-21 234646_1.png" alt="" />
        //             </div>
        //           </div>
        //         </footer>
    );
}

export default Contact;