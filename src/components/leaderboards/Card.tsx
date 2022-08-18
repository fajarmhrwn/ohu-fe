import { Flex, Text } from '@chakra-ui/react';

interface Props {
  nim: string;
  name: string;
  score: number;
  rank: number;
}

export const Card = ({ nim, name, score, rank }: Props) => {
  const colors = ['#C9B037', '#B4B4B4', '#AD8A56'];
  return (
    <Flex
      direction="row"
      boxSizing="border-box"
      border="2px solid #FFA06F"
      borderRadius="10px"
      background="#FFFFFF"
      paddingLeft={{ md: '25px', base: '9px' }}
      paddingRight={{ md: '27px', base: '8px' }}
      py={2}
      alignItems="center"
    >
      <Text
        fontFamily="Subheading"
        fontSize="3xl"
        color={colors[rank - 1] ?? '#000000'}
        w="5ch"
      >
        #{rank}
      </Text>
      <Flex justifyContent="center" direction="column" ml={2}>
        <Text fontFamily="Heading" fontSize="2xl" color="#000000" mb={-4}>
          {name}
        </Text>
        <Text fontFamily="Caption" fontSize="2xl">
          {nim}
        </Text>
      </Flex>
      <Text marginLeft="auto" fontFamily="Subheading" fontSize="4xl">
        {score}
      </Text>
    </Flex>
  );
};

export default Card;
