import React, { useEffect } from 'react';
import { Box, Heading, Flex, Image, Center } from '@chakra-ui/react';
import reactIcon from '@assets/react.svg';

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
        base: '20em',
        lg: '28em',
      }}
      w={{
        base: '12em',
        lg: '17em',
      }}
      bg="#37662F"
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
        bg="#588E50"
        position="absolute"
        w="100%"
        h={{
          base: isActive ? '75%' : '100%',
          lg: isActive && isInView ? '75%' : '100%',
        }}
        borderRadius="30px"
        transition="200ms"
      >
        <Flex h="full" justifyContent="center" alignItems="center">
          <Image
            w={{
              base: '7em',
              lg: '10em',
            }}
            src={reactIcon}
            zIndex="10"
          />
        </Flex>
      </Box>
      <Flex
        position="absolute"
        bottom="0"
        w="100%"
        h="25%"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          opacity={{
            base: isActive ? '1' : '0',
            lg: isActive && isInView ? '1' : '0',
          }}
          transitionDelay="200ms"
          transition="200ms ease-out"
          color="#eeeeee"
          fontWeight="400"
        >
          {label}
        </Heading>
      </Flex>
    </Box>
  );
};

export default Card;
