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
                <Text fontSize={{xl: '2vw', lg:'2vw'}}
                    display={{lg: 'block', base:'none'}}
                    pos='relative' 
                    top='12vw' 
                    h='40px'
                    left='2%'>
                    Apa saja yang dapat kita lakukan di OHU Event?
                </Text>

                <Heading fontSize={{xl: '6vw',lg: '6vw', base:'70px'}}
                    pos='relative'
                    left={{xl:'1vw',lg: '0vw', base:'20%'}}
                    top={{lg: '5vw', base:'370px'}}
                    w='70%px'>
                    Events
                </Heading> 
            </Flex>
            <Flex justifyContent='space-between'>
                <Image pos='absolute'
                    display={{'2xl': 'block', lg: 'block', base:'none'}} 
                    top='16vw' 
                    marginRight='auto' 
                    marginLeft='2%' 
                    w='40%' 
                    src='https://i.postimg.cc/NGPR6LNw/Group-5479.png'/>
            
                <Stack direction='column' 
                    pos='relative'
                    top={{lg: '18vw', base:'600px'}}
                    left={{xl:'44vw',lg: '44vw', base:'20%'}}
                    spacing = {{xl: '1.5vw', lg:'1.5vw',base: '8'}}>
                    <Button backgroundColor='#FFA06F' 
                        w={{xl: '20vw',lg:'20vw', base:'400px'}} 
                        h={{xl: '3vw', lg:'3vw', base:'70px'}} 
                        borderRadius={{xl: '70vw', lg:'70vw',base:'50px'}} 
                        fontSize={{xl: '2vw',lg:'2vw', base:'35px'}}>
                        OHU Map Tour
                    </Button>
                    <Button backgroundColor='#FFA06F' 
                        w={{xl: '20vw',lg:'20vw', base:'400px'}} 
                        h={{xl: '3vw', lg:'3vw', base:'70px'}} 
                        borderRadius={{xl: '70vw', lg:'70vw',base:'50px'}} 
                        fontSize={{xl: '2vw',lg:'2vw', base:'35px'}}>
                        Missions
                    </Button>  
                    <Button backgroundColor='#FFA06F' 
                        w={{xl: '20vw',lg:'20vw', base:'400px'}} 
                        h={{xl: '3vw', lg:'3vw', base:'70px'}} 
                        borderRadius={{xl: '70vw', lg:'70vw',base:'50px'}} 
                        fontSize={{xl: '2vw',lg:'2vw', base:'35px'}}>
                        Leaderboards
                    </Button>  
                </Stack>
                <Image pos='absolute' 
                    w={{lg: '30%', base:'300px'}} 
                    top={{lg: '16vw', base:'420px'}} 
                    marginRight='auto' 
                    marginLeft={{lg: '68%', base:'180px'}}
                    src='https://i.postimg.cc/W3N0nZLs/21-22-joget-2-1.png'/>
            </Flex>
            </Box>
    )
}
