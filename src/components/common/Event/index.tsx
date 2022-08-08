import React from 'react'
import { Box, 
        Text, 
        Heading,
        Image,
        Flex,
        Stack,
        Button } from '@chakra-ui/react'

        
export const Event: () => JSX.Element = () => {

    return (
            <Box backgroundColor='#FFEBB0'
            w={{lg: 'auto', base: '640px'}}
            h='3600px'>
            <Flex justifyContent='space-around'>
                <Text fontSize={{xl: '80px', lg:'43px'}}
                    display={{lg: 'block', base:'none'}}
                    pos='relative' 
                    top='350px' 
                    h='40px'
                    left='2%'>
                    Apa saja yang dapat kita lakukan di OHU Event?
                </Text>

                <Heading fontSize={{xl: '200px',lg: '124px', base:'70px'}}
                    pos='relative'
                    left={{lg: '0', base:'20%'}}
                    top={{lg: '150px', base:'370px'}}
                    w='70%px'>
                    Events
                </Heading> 
            </Flex>
            <Flex justifyContent='space-between'>
                <Image pos='absolute'
                    display={{'2xl': 'block', lg: 'block', base:'none'}} 
                    top='15%' 
                    marginRight='auto' 
                    marginLeft='5%' 
                    w='40%' 
                    src='https://i.postimg.cc/NGPR6LNw/Group-5479.png'/>
            
                <Stack direction='column' 
                    pos='relative'
                    top={{lg: '450px', base:'600px'}}
                    left={{lg: '45%', base:'20%'}}
                    spacing = {8}>
                    <Button backgroundColor='#FFA06F' 
                        w='150%' 
                        h='90%'
                        borderRadius='50px' 
                        fontSize='200%'>
                        OHU Map Tour
                    </Button>
                    <Button backgroundColor='#FFA06F' 
                        w='150%' 
                        h='90%'
                        borderRadius='50px' 
                        fontSize='200%'>
                        Missions
                    </Button>  
                    <Button backgroundColor='#FFA06F' 
                        w='150%' 
                        h='90%'
                        borderRadius='50px' 
                        fontSize='200%'>
                        Leaderboards
                    </Button>  
                </Stack>
                <Image pos='absolute' 
                    w={{lg: '30%', base:'300px'}} 
                    top={{lg: '15%', base:'420px'}} 
                    marginRight='auto' 
                    marginLeft={{lg: '68%', base:'180px'}}
                    src='https://i.postimg.cc/W3N0nZLs/21-22-joget-2-1.png'/>
            </Flex>
            </Box>
    )
}
