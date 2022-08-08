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
            <Flex>
            <Heading fontSize={{'2xl': '240px',lg: '124px', base:'70px'}}
                pos='relative'
                marginLeft={{lg: '75%', base:'330px'}} 
                marginRight='10%'
                top={{lg: '150px', base:'370px'}}
                w='70%px'>
                Events
            </Heading> 
            </Flex>
                    <Text fontSize='43px'
                        display={{lg: 'block', base:'none'}} 
                        pos='relative' 
                        left='10%' 
                        top='3%' 
                        w='855px' 
                        h='40px'
                        >
                        Apa saja yang dapat kita lakukan di OHU Event?
                    </Text>
                    <Image pos='absolute'
                        display={{'2xl': 'block', lg: 'block', base:'none'}} 
                        top='15%' 
                        marginRight='auto' 
                        marginLeft='5%' 
                        w='40%' 
                        src='https://i.postimg.cc/NGPR6LNw/Group-5479.png'/>
            <Flex>
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
