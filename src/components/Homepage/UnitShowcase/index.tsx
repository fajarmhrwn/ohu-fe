import { useEffect, useRef } from 'react';
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Card from './_Card';
import ReactSVG from '../../../assets/react.svg';

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
        y: -10,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [isInView]);

  return (
    <Box
      h="100%"
      w="100%"
      overflowX="hidden"
      overflowY="hidden"
    >
        <Box p={14} pt={180} overflowY="hidden">
                <Heading size="2xl" ref={ref} >
                    Unit Showcase
                </Heading>
                <Box 
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    alignItems="center"
                    gap={20}
                    mt={20}
                    mb={20}
                >
                    <Card img={ReactSVG} label={'Unit A'} />
                    <Card img={ReactSVG} label={'Unit B'} />
                    <Card img={ReactSVG} label={'Unit C'} />
               
                </Box>
        </Box>

    </Box>
  );
};

export default UnitShowcase;
