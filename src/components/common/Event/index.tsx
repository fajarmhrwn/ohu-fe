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
      <Box backgroundColor='#FFEBB0' w='2100px' h='1200px'>
        <Flex>
        <Text fontSize='43px' pos='absolute' left='222px' top='360px' w='855px' h='40px'>
            Apa saja yang dapat kita lakukan di OHU Event?
        </Text>
        <Heading fontSize='124px' pos='absolute' left='1520px' top='170px' w='370px' h='136px'>
            Events
        </Heading> 
        </Flex>
        <Flex>
        <Image pos='absolute' top='500px' left='100px' w='700px' src='https://i.postimg.cc/NGPR6LNw/Group-5479.png'/>
        <Stack direction='column' spacing={4} pos='absolute' top='550px' right='600px' m={10}>
            <Button backgroundColor='#FFA06F' w='400px' h='70px' borderRadius='50px' fontSize='35px'>
                OHU Map Tour
            </Button>
            <Button backgroundColor='#FFA06F' w='400px' h='70px' borderRadius='50px' fontSize='35px'>
                Missions
            </Button>
            <Button backgroundColor='#FFA06F' w='400px' h='70px' borderRadius='50px' fontSize='35px'>
                Leaderboards
            </Button>  
        </Stack>
        <Image pos='absolute' w='454px' top='500px' left='1400px' src='https://i.postimg.cc/W3N0nZLs/21-22-joget-2-1.png'/>
        </Flex>
        </Box>
    )
}