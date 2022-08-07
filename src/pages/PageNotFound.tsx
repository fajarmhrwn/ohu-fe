import { Box, Button, Image, Heading, Flex } from '@chakra-ui/react';
import pageNotFoundImage from '@assets/page-not-found-image.svg';

export const PageNotFound = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      position="relative"
    >
      <Image
        objectFit="cover"
        src={pageNotFoundImage}
        w={{
          base: '100%',
          md: '50%',
        }}
      />
      <Box pt={10}>
        <Heading
          fontWeight="400"
          fontSize={{
            base: '3em',
            md: '4em',
          }}
          color="#231A51"
          lineHeight="92%"
          textAlign="center"
          pr="50px"
          pl="50px"
        >
          Halaman Tidak Ditemukan
        </Heading>
      </Box>
      <Button
        as="a"
        href="https://www.google.com"
        background="#FFA06F"
        borderRadius="50px"
        fontFamily="Alegreya"
        fontWeight="500"
        mt={{
          base: 5,
          md: 8,
        }}
        p={{
          md: '1em',
        }}
        fontSize={{
          base: '1em',
          md: '1.5em',
        }}
      >
        Kembali ke halaman utama
      </Button>
    </Flex>
  );
};
