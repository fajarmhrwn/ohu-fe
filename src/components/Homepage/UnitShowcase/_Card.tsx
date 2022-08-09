import { Box, Flex, Image, Text } from '@chakra-ui/react';

interface ICard {
  img: string;
  label: string;
}

const Card = ({ img, label }: ICard) => {
  return (
    <Box
      borderRadius="10px"
      bg="#FFFFFF"
      boxShadow="4px 9px 28px rgba(0, 0, 0, 0.25);"
      h="25em"
    >
      <Image h="70%" src={img} borderTopRadius="10px" />
      <Flex h="30%" justifyContent="center" alignItems="center">
        <Text fontFamily="Subheading" fontSize="4xl">
          {label}
        </Text>
      </Flex>
    </Box>
  );
};

export default Card;
