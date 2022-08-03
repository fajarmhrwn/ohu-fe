import React, { useEffect } from "react";
import { SimpleGrid,
    Box,
    Text,
    Flex,
    Heading,
    Image
} from "@chakra-ui/react";

const Legend: React.FC = () => {
    const text =['Gerbang Utama','Gerbang Utama','Gerbang Utama','Gerbang Utama','Gerbang Utama','Gerbang Utama','Gerbang Utama','Gerbang Utama','Gerbang Utama','Gerbang Utama']

    const list = text.map((list_item) => 
                    <Flex>
                        <Image
                            borderRadius='full'
                            boxSize='67px'
                            src= 'https://bit.ly/dan-abramov'
                            alt='Dan Abramov'
                        />
                        <Text textAlign={'center'} fontSize="30px"  m={'auto 27px'} mr={'0'} >{list_item}</Text>
                    </Flex>
            )

    useEffect(()=>{
        console.log("'https://bit.ly/dan-abramov'")
    })
    return (
        <Flex bg='#FFFBF2' p={'100px'} m={'auto'} >
            <Box mr={{xl:'100px',base:'10px'}}>
            <Heading fontSize={'67px'} m={'auto'} mt={'38px'}>legends</Heading>
            <SimpleGrid columns={{lg:2,base:1}} spacingY="31px" spacingX={'100px'}  m={'auto'} mt={'53px'} >
                {list}
            </SimpleGrid>
            </Box>
            <Image src='https://i.pinimg.com/564x/d1/5e/40/d15e40af25ed938c9ae46c877a8d896c.jpg' marginTop={'5%'} margin={'auto'} display={{base: 'none', xl:'block'}}/>
        </Flex>
    )
};

export default Legend;