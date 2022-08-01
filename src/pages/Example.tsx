import { Box, Heading, Text } from '@chakra-ui/react';
import { Navbar } from '../components/common';

export const Example = () => {
  return (
    <Box>
      <Navbar />
      <Heading>Heading</Heading>
      <Heading fontFamily="Alegreya Semibold">Sub Heading</Heading>
      <Text>
        Body: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Text>
      <Text fontFamily="Alegreya Sans Light">
        Caption: Lorem ipsum dolor sit amet.
      </Text>
    </Box>
  );
};
