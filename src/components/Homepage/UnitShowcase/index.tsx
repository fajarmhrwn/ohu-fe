import { useEffect, useRef } from 'react';
import { Box,  Flex, Heading, Text, Container } from '@chakra-ui/react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Card from './_Card';

const UnitShowcase = () => {
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
      bg="#FFFAF0"
      h="100%"
      w="column"
      p={10}
      overflowX="hidden"
    >
      <Flex alignItems="left" flexDir="column" pt={3}>
        <motion.div animate={animation}>
          <Flex flexDir="column" alignItems="left">
            <Heading size="2xl" ref={ref} textAlign="left">
              Unit Showcase
            </Heading>
          </Flex>
        </motion.div >
        <Box
            p={2}
            borderTopRadius={{
                base: '50px',
                lg: '0px'}}
            >
        </Box>
        <Card/>
      </Flex>
    </Box>
  );
};

export default UnitShowcase;
