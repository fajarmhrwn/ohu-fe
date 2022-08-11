import { useEffect, useRef } from 'react';
import {
  Box,
  Flex,
  Heading,
  Center,
  Image,
  Spacer,
  Hide,
  AspectRatio,
} from '@chakra-ui/react';
import { motion, useAnimation, useInView } from 'framer-motion';
import gedungKiri from '@assets/gedung_2.svg';
import gedungKanan from '@assets/gedung_1.svg';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 1.3,
        },
      });
    }
    if (!isInView) {
      animation.start({
        y: -50,
        opacity: 0,
        transition: {
          duration: 0.3,
        },
      });
    }
  }, [isInView]);

  return (
    <Box
      h="100%"
      w="100%"
      borderRadius="0% 0% 50% 50% / 0% 0% 10% 10% "
      pt={3}
      pb={{
        base: 14,
        lg: 28,
      }}
      bg="#FFEBB0"
      position="relative"
    >
      <motion.div animate={animation}>
        <Flex flexDir="column" alignItems="center" gap={10} mt={7}>
          <Heading
            size={['xl', '3xl']}
            ref={ref}
            mb={[1, 8]}
            text-align="center"
          >
            pn oue ni
          </Heading>
        </Flex>
      </motion.div>
      <Flex mt="3" w="100%">
        <Spacer />
        <motion.div animate={animation}>
          <Center>
            <AspectRatio
              w={{
                base: '12em',
                md: '25em',
                lg: '52em',
              }}
              ratio={16 / 9}
              ref={ref}
            >
              <iframe
                src="https://www.youtube.com/embed/9EqZRAUfkuo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AspectRatio>
          </Center>
        </motion.div>
        <Spacer />
      </Flex>
      <Image
        src={gedungKiri}
        alt="Gedung Kiri"
        position="absolute"
        top="20px"
        left={{
          base: '-30px',
          sm: '0',
        }}
        w={{
          base: '6.3em',
          md: '11em',
          lg: '14.5em',
          xl: '18em',
        }}
      />
      <Image
        src={gedungKanan}
        alt="Gedung Kanan"
        position="absolute"
        top="20px"
        right={{
          base: '-30px',
          sm: '0',
        }}
        w={{
          base: '5.3em',
          md: '9.1em',
          lg: '12em',
          xl: '15em',
        }}
      />
    </Box>
  );
};

export default Hero;
