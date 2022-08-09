import { useEffect, useRef } from 'react';
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Carousel from './_Carousel';
import WaveTop from '../../../assets/wave_top.svg';

const UnitRecommendation = () => {
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
    <Box
      bg="#BFE99F"
      h="100%"
      w="100%"
      borderTopRadius={{
        base: '50px',
        lg: '150px',
      }}
      overflowX="hidden"
    >
      <Box p={10} pb={20}>
        <Flex alignItems="center" flexDir="column" pt={3}>
          <motion.div animate={animation}>
            <Flex flexDir="column" alignItems="center" gap={5}>
              <Heading size="2xl" ref={ref} textAlign="center">
                ni eommedato
              </Heading>
              <Button
                bg="#588E50"
                color="#FFFFFF"
                transition="200ms linear"
                borderRadius="50px"
                px={10}
                fontSize="lg"
                _hover={{
                  background: '#689E60',
                }}
              >
                View All Units
              </Button>
            </Flex>
          </motion.div>
          <Carousel />
        </Flex>
      </Box>
      <Image src={WaveTop} alt="wave_top" w="100%" h="20%" />
    </Box>
  );
};

export default UnitRecommendation;
