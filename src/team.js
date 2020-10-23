import React from "react";

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
}
 
export default Team;

