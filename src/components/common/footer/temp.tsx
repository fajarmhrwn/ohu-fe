import {
  Avatar,
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text
} from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

import Logo from '@assets/logo_sementara.png';

const socials = [
  {
      to: 'https://twitter.com/oskmitb',
      icon: <FaTwitter size={27} />,
      hover: '#1DA1F2'
  },
  {
      to: 'https://www.instagram.com/oskm.itb/',
      icon: <FaInstagram size={27} />,
      hover: '#FD5949'
  },
  {
      to: 'https://www.youtube.com/channel/UCmkkBEqwMZ1SEZN937pdpgA',
      icon: <FaYoutube size={27} />,
      hover: '#FF0000'
  },
];

export const TempFooter = () => {
  return (
    <Flex
      bg='#ffa06e'
      alignItems='center'
      justifyContent={{ base: 'flex-start', md: 'space-between' }}
      py={7}
      px={{ base: 5, md: 16 }}
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Box display='flex' flexDirection='column' alignSelf='center'>
        <Link to="/">
          <Flex
            alignItems='center'
            justifyContent={{ base: 'center', md: 'flex-start' }}
            flexDirection={{ base: 'column', md: 'row' }}
          >
            {/* <Image src={Logo} w='20%' objectFit='contain' /> */}
            <Avatar
              src={Logo}
              size='md'
              mr={{ base: 0, md: 2 }}
              mb={{ base: 2, md: 0 }}
              transition='all 0.15s ease-in-out'
              _hover={{
                transform: 'scale(1.1)',
                color: '#FFEBB0'
              }}
            />
            <Text
              fontSize={{ base: '2xl', md: "3xl" }}
              fontFamily='Heading'
              transition='all 0.15s ease-in-out'
              textShadow='-1px -2px 0px #FFEBB0'
              textAlign='center'
              _hover={{
                transform: 'scale(1.05)',
                color: '#FFEBB0',
                textShadow: '-1px -2px 0px #000000'
              }}
            >
              OHU 2022
            </Text>
          </Flex>
        </Link>
        <Text mt={1} fontSize={{ base: 'lg', md: "xl" }} fontFamily='Caption' textAlign='center'>
          &copy; DEVA 2022 - Event & Attendance
        </Text>
      </Box>
      <Flex flexDirection='column' alignSelf='center' mt={{ base: 5, md: 0 }}>
        <Text fontFamily='Subheading' fontSize={{ base: 'xl', md: "2xl" }} textAlign={{ base: 'center', md: 'right' }} mb={2}>
          Find us on
        </Text>
        <Box>
          <Stack direction='row' spacing={{ base: 3, md: 6 }}>
            {socials.map(({ to, icon, hover }) => {
              return (
                <Link key={to} to={to}>
                  <Box transition='all 0.15s ease-in-out' _hover={{ color: hover, transform: 'scale(1.2)' }}>
                    {icon}
                  </Box>
                </Link>
              )
            })}
          </Stack>
        </Box>
      </Flex>
    </Flex>
  )
}