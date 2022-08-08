import { useEffect, useRef } from 'react';
import { Box, Flex, Heading, Center, Image, Spacer, Hide, AspectRatio } from '@chakra-ui/react';
import { motion, useAnimation, useInView } from 'framer-motion';
import gedungKiri from '@assets/gedung_2.png'
import gedungKanan from '@assets/gedung_1.png'

const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const animation = useAnimation();

    useEffect(() => {
        if (isInView) {
            animation.start({
                y: 0,
                opacity: 1,
                visibility: 'visible',
                transition: {
                    type: 'spring',
                    duration: 1,
                },
            });
        }
        if (!isInView) {
            animation.start({
                opacity: 0,
                visibility: 'hidden',
                y: -20,
                transition: {
                    duration: 0.5,
                },
            });
        }
    }, [isInView]);

    return (


        <Box h="100%" w="100%" borderRadius="0% 0% 50% 50% / 0% 0% 20% 20% " pt={10} pb={10} bg="#FFEBB0">
            <motion.div animate={animation}>
                <Flex flexDir="column" alignItems="center" gap={10} mt={7}>
                    <Heading size={['xl', '3xl']} ref={ref} mb={[1, 8]} text-align="center">pn oue ni</Heading>
                </Flex>
                <Flex mt="3" w='100%'>
                    <Hide below="md">
                        <Box boxSize='md' ml="-155" mt={[-100]}>
                            <Image src={gedungKiri} alt='saya' w={[0, 0, 0, 500]} />
                        </Box>
                    </Hide>
                    <Spacer />
                    <Center>
                        <AspectRatio w={[290, 400, 650]} ratio={16 / 9} mb={[5, 120]} ref={ref}>
                            <iframe
                                src="https://www.youtube.com/embed/Ku1zqLj_be4"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen />
                        </AspectRatio>
                    </Center>
                    <Spacer />
                    <Hide below="md">
                        <Box boxSize='280px' mr='auto' mt={[-100]}>
                            <Image src={gedungKanan} alt='' w={[0, 0, 0, 500]} />
                        </Box>
                    </Hide>
                </Flex>
            </motion.div>
        </Box>

    )
}

export default Hero;