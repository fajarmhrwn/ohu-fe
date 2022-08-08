import React from 'react';
import { Box, Heading, Flex, Image, Text, Grid, GridItem } from '@chakra-ui/react';

export default function Card(){
const unit = [
    {
        id : 1,
        imgUrl : 'https://picsum.photos/seed/picsum/400/300',
        label : 'Unit A',
        visitors : 100,
    },
    {
        id : 2,
        imgUrl : 'https://picsum.photos/seed/picsum/400/300',
        label : 'Unit B',
        visitors : 100,
    },
    {
        id : 3,
        imgUrl : 'https://picsum.photos/seed/picsum/400/300',
        label : 'Unit C',
        visitors : 100,
    }
];

const Card =(u) => {
    return (
        <Box
        marginTop={10}
        opacity='black'
        height={[300,350,400,430]}
        width={[200,250,300,350]}
        bg='white'
        border={10}
        borderColor='black'
        borderRadius='lg'
        boxShadow='xl'
        pos='sticky'
        >
            <Flex
            borderTopRadius='lg'
            maxW='sm' 
            overflow='hidden'>
                <Image src={u.imgUrl}/>
            </Flex>
            
            <Flex
            marginTop={10}
            marginLeft={5}
            color='black'
            fontWeight='bold'
            fontSize='28'
            justifyContent='space-between'
            >{u.label}
            </Flex>
            
            <Flex
            marginTop={5}
            marginLeft={5}
            borderRadius='lg'
            color='black'
            fontSize='18'
            >{u.visitors} visitors
            </Flex>
            
        </Box>
    )
}

return(
    <Grid
    h="550px"
    templateRows="repeat(1, 1fr)"
    templateColumns="repeat(3, 1fr)"
    columnGap={20}
    gap={2}
    pos='sticky'>
    {unit.map(Card)}
    </Grid>
)
}
