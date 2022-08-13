import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { getTransition } from 'src/util/transition';
import Carousel from './_Carousel';
import WaveTop from '../../../assets/wave_top.svg';

const UnitRecommendation = () => {

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
      <motion.section {...getTransition('left', { delay: 0.5, duration: 2.25 })}>
        <Box pt={14}>
          <Flex alignItems="center" flexDir="column" pt={3}>
              <Flex flexDir="column" alignItems="center" gap={5}>
                <Heading size="2xl" textAlign="center" mb={3}>
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
            <Carousel />
          </Flex>
        </Box>
      </motion.section>
      <Image src={WaveTop} alt="wave_top" w="100%" h="20%" />
    </Box>
  );
};

export default UnitRecommendation;
