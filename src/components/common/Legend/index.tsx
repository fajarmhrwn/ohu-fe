import { useEffect, useState } from "react";
import { SimpleGrid,
    Box,
    Text,
    Flex,
    Heading,
    Image,
    Spinner,
    useMediaQuery
} from "@chakra-ui/react";

export const Legend: () => JSX.Element = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [data, setData] = useState<{
        text: string
        src: string
    }[]>([])
    const isMobile = useMediaQuery('(max-width: 640px)')
    const isTab = useMediaQuery('(max-width: 1240px)')
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
                <Flex  p={'5%'}  >
                    <Box mr={isMobile[0] ? '10px' : '100px'} p={'10px'} m='auto'>
                        <Heading fontSize={'67px'} m={'auto'}>legends</Heading>
                        <SimpleGrid columns={isMobile[0] ? 1 : 2} spacingY="5" spacingX={'100px'}   mt={'53px'} >
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
                    <Image src='https://i.pinimg.com/564x/d1/5e/40/d15e40af25ed938c9ae46c877a8d896c.jpg' marginTop={'160px'} marginRight={'auto'} marginLeft={'auto'} display={isTab[0] ? 'none' : 'block'} />
                </Flex>
        }
        </>
    )
};