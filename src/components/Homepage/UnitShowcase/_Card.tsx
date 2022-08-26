import { Box, Flex, Image, Text, Center } from '@chakra-ui/react';

interface ICard {
  img?: string;
  label?: string;
  onClick?: () => void;
}

const Card = ({ img, label, onClick }: ICard) => (
  <Box
    borderRadius="10px"
    bg="#FFFFFF"
    boxShadow="4px 9px 28px rgba(0, 0, 0, 0.25);"
    h={{
      base: '13em',
      md: '14em',
      lg: '18em',
      xl: '20em'
    }}
    w={{
      base: '12em',
      md: '12em',
      lg: '16em',
      xl: '18em'
    }}
    _hover={{
      boxShadow: '4px 9px 28px rgba(0, 0, 0, 0.5);',
      transform: 'scale(1.05)',
      transition: '200ms linear'
    }}
    cursor="pointer"
    onClick={onClick}
    p="2"
  >
    <Center h="70%">
      <Image
        src={img}
        draggable="false"
        w={{
          base: '5em',
          md: '7em',
          lg: '9em'
        }}
        borderTopRadius="10px"
      />
    </Center>
    <Flex h="30%" justifyContent="center" alignItems="center">
      <Text
        fontFamily="Subheading"
        fontSize={{
          base: 'lg',
          md: 'xl',
          lg: '3xl'
        }}
        textAlign="center"
      >
        {label}
      </Text>
    </Flex>
  </Box>
);

export default Card;
