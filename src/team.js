import React from "react";
<<<<<<< HEAD
import { Grid, Box, Text, Image, Stack, SimpleGrid } from "@chakra-ui/core";
 
const Team = props => {
   return (
       <Grid templateColumns="repeat(4,2fr)" gap={6} mt={{ base: 4, md: 4 }} ml={{ md: 6 }} mr={{ md: 6 }}>
        <Box w="100%" h="10">
            <Stack isInline>
                <Image
                    src="{props.icon}"
                    alt="" />
                <SimpleGrid rows={2} spacing={6}>
                    <Text as='h4' fontWeight='semibold'>
                        {props.title}
                    </Text>
                    <Text>
                        {props.name}
                    </Text>
                </SimpleGrid>
            </Stack>
            </Box>
            <Team icon="/avataaars.png title='CEO' name="John Doe"/>
            <Team icon="/avataaars.png title='COO' name="Mark Kinyanjui"/>
            <Team icon="/avataaars.png title='CTO' name="Peter Owoka"/>
             
            const Team = [{icon:"/avataaars.png", title:'CEO', name:"John Doe"} {icon="/avataaars.png title='COO' name="Mark Kinyanjui"}{icon="/avataaars.png title='CTO' name="Peter Owoka"} ]
   );
=======
import { Grid, Box, Text, Image } from "@chakra-ui/core";
import CEO from "./components/team/ceo";
import CTO from "./components/team/cto";
import COO from "./components/team/coo";
import Hiring from "./components/team/hiring";

const Team = props => {
    return (
        <Grid templateRows="repeat(1, 1fr)" gap={6} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} mr={{ md: 6 }} >

            <Box borderRadius="50px 0px 50px 0px"
                background="#3658fe"
                h='80px'
                w='250px'
                padding='15px'
                boxShadow='lg'
                mt={{ base: 4, md: 16 }}
            >

                <Text as='h3'
                    color='white'
                    textAlign='center'
                    padding='15px'>
                    Team
                </Text>
            </Box>

            <Grid templateColumns="repeat(4,8fr)" gap={6} mt={{ base: 4, md: 4 }} ml={{ md: 6 }} mr={{ md: 6 }}>
                <CEO />
                <CTO />
                <COO />
                <Hiring />
            </Grid>
        </Grid>
    );
>>>>>>> 6258e1b189d9c6d8dfd42de773aacd6400ab2dce
}
 
export default Team;

