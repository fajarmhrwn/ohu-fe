import React from 'react';
import Vistock from '@assets/page-not-found.png';
import { Flex, Image, Text } from '@chakra-ui/react';

interface ErrorProps {
  message?: string;
}

const ErrorNotFoundPage: React.FC<ErrorProps> = ({ message }) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    flexDir="column"
    position="relative"
  >
    <Image src={Vistock} alt="gambar vistock" />
    <Text
      fontSize={{ base: 24, md: 48 }}
      fontFamily="Heading"
      top="60%"
      position="absolute"
      py="2"
      px="20"
      borderRadius="full"
      backgroundColor="#F4a641"
      color="#fff"
    >
      {message || 'No Data'}
    </Text>
  </Flex>
);

export default ErrorNotFoundPage;
