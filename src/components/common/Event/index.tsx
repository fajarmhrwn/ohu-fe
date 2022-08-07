import React from 'react'
import { Box, 
        Text, 
        Heading,
        Image,
        Flex,
        Stack,
        Button,
        useMediaQuery,
        Show,
        Hide } from '@chakra-ui/react'

        
export const Event: () => JSX.Element = () => {

    return (
            <Box backgroundColor='#FFEBB0'
            w={{lg: '1920px', base: '640px'}}
            h='1200'>
            <Flex>
            <Heading fontSize={{lg: '124px', base:'70px'}}
                pos='relative'
                marginLeft={{lg: '1430px', base:'300px'}} 
                marginRight='auto'
                top={{lg: '200px', base:'400px'}}
                w='370px'
                h='136px'>
            Events
            </Heading> 
            </Flex>
                    <Text fontSize='43px'
                        display={{lg: 'block', base:'none'}} 
                        pos='absolute' 
                        left='170px' 
                        top='360px' 
                        w='855px' 
                        h='40px'
                        >
                        Apa saja yang dapat kita lakukan di OHU Event?
                    </Text>
                    <Image pos='absolute'
                        display={{lg: 'block', base:'none'}} 
                        top='500px' 
                        marginRight='auto' 
                        marginLeft='80px' 
                        w='700px' 
                        src='https://i.postimg.cc/NGPR6LNw/Group-5479.png'/>
            <Flex>
                <Stack direction='column' 
                    pos='relative'
                    top={{lg: '450px', base:'600px'}}
                    left={{lg: '830px', base:'100px'}}
                    spacing = {8}>
                    <Button backgroundColor='#FFA06F' 
                        w='400px' 
                        h='70px' 
                        borderRadius='50px'
                        fontSize='35px'>
                        OHU Map Tour
                    </Button>
                    <Button backgroundColor='#FFA06F' 
                        w='400px' 
                        h='70px' 
                        borderRadius='50px' 
                        fontSize='35px'>
                        Missions
                    </Button>
                    <Button backgroundColor='#FFA06F' 
                        w='400px' 
                        h='70px' 
                        borderRadius='50px' 
                        fontSize='35px'>
                        Leaderboards
                    </Button>  
                </Stack>
                <Image pos='absolute' 
                    w={{lg: '454px', base:'300px'}} 
                    top={{lg: '500px', base:'450px'}} 
                    marginRight='auto' 
                    marginLeft={{lg: '1320px', base:'150px'}}
                    src='https://i.postimg.cc/W3N0nZLs/21-22-joget-2-1.png'/>
            </Flex>
            </Box>
    )
}
