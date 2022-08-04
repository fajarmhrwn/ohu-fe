import { useEffect, useState } from "react";
import { SimpleGrid,
    Box,
    Text,
    Flex,
    Heading,
    Image,
    Spinner
} from "@chakra-ui/react";

export const Legend: () => JSX.Element = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [data, setData] = useState<{
        text: string
        src: string
    }[]>([])

    useEffect(()=>{
        setTimeout(() => {
            setData([
                {
                    text: 'Gerbang Utama',
                    src: 'https://bit.ly/dan-abramov'
                },
                {
                    text: 'Gerbang Utama',
                    src: 'https://bit.ly/dan-abramov'
                },
                {
                    text: 'Gerbang Utama',
                    src: 'https://bit.ly/dan-abramov'
                },
                {
                    text: 'Gerbang Utama',
                    src: 'https://bit.ly/dan-abramov'
                },
                {
                    text: 'Gerbang Utama',
                    src: 'https://bit.ly/dan-abramov'
                },
                {
                    text: 'Gerbang Utama',
                    src: 'https://bit.ly/dan-abramov'
                },
                {
                    text: 'Gerbang Utama',
                    src: 'https://bit.ly/dan-abramov'
                },
                {
                    text: 'Gerbang Utama',
                    src: 'https://bit.ly/dan-abramov'
                },
                {
                    text: 'Gerbang Utama',
                    src: 'https://bit.ly/dan-abramov'
                },
                {
                    text: 'Gerbang Utama',
                    src: 'https://bit.ly/dan-abramov'
                },
            ])

            setIsLoading(false)

        }, 1000)
    }, [data])

    return (
        <>
            {isLoading ? <Spinner /> : 
                <Flex bg='#FFFBF2' p={'100px'} m={'auto'} >
                    <Box mr={{xl:'100px',base:'10px'}}>
                        <Heading fontSize={'67px'} m={'auto'} mt={'38px'}>legends</Heading>
                        <SimpleGrid columns={{lg:2,base:1}} spacingY="31px" spacingX={'100px'}  m={'auto'} mt={'53px'} >
                            {data.map((item) => 
                                <Flex>
                                    <Image
                                        borderRadius='full'
                                        boxSize='67px'
                                        src={item.src}
                                    />
                                    <Text textAlign={'center'} fontSize="30px"  m={'auto 27px'} mr={'0'} >{item.text}</Text>
                                </Flex>
                            )}
                        </SimpleGrid>
                    </Box>
                    <Image src='https://i.pinimg.com/564x/d1/5e/40/d15e40af25ed938c9ae46c877a8d896c.jpg' marginTop={'5%'} margin={'auto'} display={{base: 'none', xl:'block'}}/>
                </Flex>
        }
        </>
    )
};