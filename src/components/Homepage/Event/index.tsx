import {
  Box,
  Text,
  Heading,
  Image,
  Flex,
  Stack,
  Button,
  Show,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import ImageBalloon from '@assets/events_balloon.svg';
import ImageJoget from '@assets/events_joget.svg';

const Event: () => JSX.Element = () => {
  // TODO: link mission where
  const links = [
    { label: 'OHU Map Tour', to: '/tour' },
    { label: 'Mission', to: '/' },
    { label: 'Leaderboards', to: '/leaderboard' },
  ];

  return (
    <>
      <Box backgroundColor="#FFEBB0" py={5}>
        <Flex
          justifyContent={{ base: 'center', lg: 'space-around' }}
          alignItems="center"
          ml={{ base: '14ch', lg: 0 }}
          mb={{ base: '-5ch', lg: 0 }}
        >
          <Show above="lg">
            <Text fontSize="3xl" fontFamily="Subheading">
              Apa saja yang dapat kita lakukan di OHU Event?
            </Text>
          </Show>
          <Heading  fontSize={{ base: '6xl', lg: '7xl' }} fontFamily="Heading">
            vens
          </Heading>
        </Flex>
        <Flex
          justifyContent={{ base: 'center', lg: 'space-evenly' }}
          flexDirection={{ base: 'column-reverse', lg: 'row' }}
          alignItems="center"
        >
          <Image
            display={{ base: 'none', lg: 'block' }}
            src={ImageBalloon}
            w="30%"
            h="30%"
            objectFit="contain"
          />
          <Stack
            direction="column"
            spacing={{ base: 5, lg: 8 }}
            justify="center"
          >
            {links.map((item) => {
              return (
                <Link to={item.to} key={item.label}>
                  <Button
                    backgroundColor="#FFA06F"
                    w={{ base: '250px', lg: '20vw' }}
                    borderRadius="full"
                    fontSize={{ base: 'lg', lg: '2xl' }}
                    color="white"
                    transition="all 0.15s ease-in-out"
                    _hover={{ backgroundColor: '#FFB08D' }}
                  >
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </Stack>
          <Image
            src={ImageJoget}
            w={{ base: '220px', lg: '20%' }}
            h={{ base: '200px', lg: '20%' }}
            objectFit="contain"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
          />
        </Flex>
      </Box>
    </>
  );
};

export default Event;
