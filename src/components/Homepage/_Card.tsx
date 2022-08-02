import React from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';

interface CardProps {
  label: string;
  isActive: boolean;
  isInView: boolean;
  color: string;
}

const Card = ({ label, isActive, isInView, color }: CardProps) => {
  return (
    <Box
      h={{
        base: '17em',
        lg: '28em',
      }}
      w={{
        base: '11em',
        lg: '17em',
      }}
      bg={'dark' + color}
      m="0 auto"
      transition="250ms ease-in"
      transform={{
        base: isActive ? 'scale(1)' : 'scale(0.8)',
        lg: !isInView ? 'scale(0.8)' : isActive ? 'scale(1)' : 'scale(0.7)',
      }}
      position="relative"
      borderRadius="30px"
    >
      <Box
        bg={color}
        position="absolute"
        w="100%"
        h={isActive && isInView ? '75%' : '100%'}
        borderRadius="30px"
        transition="200ms"
      ></Box>
      <Flex
        position="absolute"
        bottom="0"
        w="100%"
        h="25%"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          opacity={isActive && isInView ? '1' : '0'}
          transitionDelay="200ms"
          transition="200ms ease-out"
          color="#eeeeee"
        >
          {label}
        </Heading>
      </Flex>
    </Box>
  );
};

export default Card;
