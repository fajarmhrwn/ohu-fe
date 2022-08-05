import React from 'react';
import {
  ChakraProvider,
  Box,
  Button,
  Image,
  Heading
} from "@chakra-ui/react"
import theme from "@theme/theme"

declare var require: any

export const PageNotFound = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box display= "flex" flexDirection="column" alignItems="center" >
        <Box mt={{base:"46px", md:"0px"}} >
          <Image objectFit="cover" src={require("@assets/Prisma nungguin sprout.png")} h={{base:"413px", md:"648px"}}/>
        </Box>
        <Box mt={{base:"10px", md:"20px"}}>
          <Heading>
            <Box fontFamily="Magilio" fontWeight="400" fontSize={{base:"42px", md:"96px"}} color="#231A51" lineHeight="92%" textAlign="center" pr= "50px" pl= "50px">
              Halaman Tidak Ditemukan
            </Box>
          </Heading>
        </Box>
        <Box mt={{base:"30px", md:"110px"}} mb={{base:"168px", md:"205px"}}>
          <Button as="a" href="https://www.google.com" width={{base:"245px", md:"533px"}} height={{base:"40px", md:"69px"}} background="#FFA06F" borderRadius="50px" fontFamily= 'Alegreya Sans Regular' fontWeight="500" fontSize={{base:"18px", md:"40px"}} line-height="92%">
            Kembali ke halaman utama
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
};
