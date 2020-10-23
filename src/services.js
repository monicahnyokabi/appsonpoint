import React from "react";
import { Grid, Box, Text, Image, Stack, SimpleGrid } from "@chakra-ui/core";

const Services = props => {
   return (
       <Grid templateRows="repeat(2, 1fr)" gap={6} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} mr={{ md: 6 }} >
           <div class="d-flex justify-content-center mt-5 mb-3">
               <h3 class="rcorners3 text-white text-center">Services</h3>
           </div>
           <Grid templateColumns="repeat(3,1fr)" gap={6}>
           const mobileApplication = props => {
    return (

        <Box w="100%" h="10">
            <Stack isInline>
                <Image
                    src="{props.image}"
                    alt="" />
                <SimpleGrid rows={2} spacing={6}>
                    <Text as='h4' fontWeight='semibold'>
                        {props.title}
                    </Text>
                    <Text>
                        {props.description}
                    </Text>
                    
                </SimpleGrid>
            </Stack>
        </Box>
        <mobileApplication icon='mobile.png' title="Mobile Applications" description=" We create elegant mobile applications with stunning features
        that will give you are wider reach and show your clients how
        far you are willing to go to serve them better."/>
        const mobileApplication  = [{title:"Mobile Applications", icon:'Annotation 2020-09-21 163901.png', description:'We create elegant mobile applications with stunning features that will give you are wider reach and show your clients how far you are willing to go to serve them better.'}]
               
        const responsiveWebDesign = props => {
            return (
                <Box w="100%" h="10">
                    <Stack isInline>
                        <Image
                            src="{props.image}"
                            alt="" />
                        <SimpleGrid rows={2} spacing={6}>
                            <Text as='h4' fontWeight='semibold'>
                                {props.title}
                            </Text>
                            <Text>
                                {props.description}
                            </Text>
                            <responsiveWebDesign icon="/Annotation 2020-09-21 163901.png" title="Responsive Web Design" description="We design, develop, commission and maintain fast, beautiful and websites that will look
                great on any screen and keep your visitors coming back. "/>
                const responsiveWebDesign = [{title:"Responsive Web Design", icon:'Annotation 2020-09-21 163901.png', description:'We design, develop, commission and maintain fast, beautiful and websites that will look great on any screen and keep your visitors coming back'}]
                            
                        </SimpleGrid>
                    </Stack>
                 </Box>      
             

        const Security = props => {
            return (
                <Box w="100%" h="10">
                    <Stack isInline>
                        <Image
                            src="{props.image}"
                            alt="" />
                        <SimpleGrid rows={2} spacing={6}>
                            <Text as='h4' fontWeight='semibold'>
                                {props.title}
                            </Text>
                            <Text>
                                {props.description}
                            </Text>
                            
                                     <Security image="/Annotation 2020-09-21 164340.png" title="Responsive Web Design" description="We carry out through penetration tests and identify potential vulnerabitity in your network
                infrastructure; hardware, software and dependent resources inclusive. Our team of security
                experts will plug these weaknesses, and provide continuous guidance on how to minimize creating
                others as your resources grow.
                </Text>"/>
                const Security = [{title:"Security", icon:'/Annotation 2020-09-21 164340.png', description:'We carry out through penetration tests and identify potential vulnerabitity in your network infrastructure; hardware, software and dependent resources inclusive. Our team of security experts will plug these weaknesses, and provide continuous guidance on how to minimize creating others as your resources grow.'}]
                    </SimpleGrid>
                    </Stack>
                </Box>
                const Scalability= props => {
                    return (
                        <Box w="100%" h="10">
                            <Stack isInline>
                                <Image
                                    src="{props.image}"
                                    alt="" />
                                <SimpleGrid rows={2} spacing={6}>
                                    <Text as='h4' fontWeight='semibold'>
                                        {props.title}
                                    </Text>
                                    <Text>
                                        {props.description}
                                    </Text>
                                    
                        <Scalability image="/Annotation 2020-09-21 170012.png" title="Scalability & Performance" description="We pride ourselves in being able to make your application handle millions of user requests
                        as quickly and efficiently as it handles a single user. This is vital in creating a pleasant
                        user experience, and keep them loyal to you."
                        </Text>"/>
                        const Scalability = [{title:'Scalability & Performance', icon:"/Annotation 2020-09-21 170012.png", description:"We pride ourselves in being able to make your application handle millions of user requests as quickly and efficiently as it handles a single user. This is vital in creating a pleasant user experience, and keep them loyal to you."}]
                        </SimpleGrid>
                        </Stack>
                    </Box>
                        


                        const ItConsultancy = props => {
                            return (
                                <Box w="100%" h="10">
                                    <Stack isInline>
                                        <Image
                                            src="{props.image}"
                                            alt="" />
                                        <SimpleGrid rows={2} spacing={6}>
                                            <Text as='h4' fontWeight='semibold'>
                                                {props.title}
                                            </Text>
                                            <Text>
                                                {props.description}
                                            </Text>
                                            
                                < tConsultancy image="/Annotation 2020-09-21 171752.png" title=" IT Consultancy" description=" Need guidance on how to handle problems in the computer technology sphere? Talk to us. We
                               will put all the knowledge and years of experience to use to help you in the right direction."
                                </Text>"/>
                                const tConsultancy = [{title:"IT Consultancy", icon:"/Annotation 2020-09-21 171752.png", decription:"Need guidance on how to handle problems in the computer technology sphere? Talk to us. We will put all the knowledge and years of experience to use to help you in the right direction."}]
                                </SimpleGrid>
                                </Stack>
                            </Box>
   );
};
 
export default Services;