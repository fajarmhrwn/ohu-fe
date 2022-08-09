import React from 'react';
import { Box, Heading, Flex, Image, Text, Grid, GridItem, AspectRatio} from '@chakra-ui/react';

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
        marginTop='{10}'
        h={{
            base :'17em',
            lg:'26em',
        }}
        w={{
            base : '16em',
            lg : '23em',
        }}
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
            overflow='hidden'
            w={{
                base : '16em',
                lg : '23em',
            }}
            h={{
                base :'12em',
                lg:'18em',
            }}>
                <Image src={u.imgUrl}/>
            </Flex>
            
            <Flex
            marginTop='1em'
            marginLeft={5}
            color='black'
            fontWeight='bold'
            fontSize={{base:'20px', lg:'28px'}}
            justifyContent='space-between'
            w={{
                base : '3em',
                lg : '5 em',
            }}
            h={{
                base :'0em',
                lg:'2 em',
            }}>{u.label}
            </Flex>
            
            <Flex
            marginTop='2em'
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
    h="600px"
    templateRows="repeat(1, 1fr)"
    templateColumns="repeat(3, 1fr)"
    columnGap={20}
    gap={2}
    pos='sticky'>
    {unit.map(Card)}
    </Grid>
)
}
