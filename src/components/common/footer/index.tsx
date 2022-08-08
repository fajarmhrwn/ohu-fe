import { Box, Center, Text, Circle, VStack, HStack} from '@chakra-ui/react';

const Footer = () => {
  // TODO: Ubah kalau dah ada content footernya
  return (
    <Box
      bg='#ffa06e'
      px={4}
      py={6}
      mt={5}
    >
      <VStack spacing={{ base: '0px', lg: '20px' }} mt={{ base: '0px', lg: '20px' }}>
        <HStack spacing={{ base: '17px', lg: '30px' }}>
          <Circle size={{ base: '91px', lg: '186px' }} bg='#D9D9D9'></Circle>
          <Box
            fontFamily='Alegreya Semibold'
            fontSize={{ base: '36px', lg: '73px' }}
            lineHeight={{ base: '33.12px', lg: '67.16px' }}
          >
            <Text>KAT</Text>
            <Text>ITB</Text>
            <Text>2022</Text>
          </Box>
        </HStack>
        <Center bg='#D9D9D9' h={[209, 209, 229]} w={[0, 0, 0, 1320]}>
          <Text
            fontFamily='Alegreya Semibold'
            fontSize={{ base: '0px', lg: '73px' }}
            lineHeight={{ base: '33.12px', lg: '67.16px' }}
          >
            Footer Content
          </Text>
        </Center>
      </VStack>
    </Box>
  );
};

export default Footer;