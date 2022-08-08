import React from "react";
import { Flex, Text } from "@chakra-ui/react";

interface Props {
  nim: string;
  name: string;
  score: number;
  rank: number;
}

export const Card = ({ nim, name, score, rank }: Props) => {
  return (
    <Flex
      direction="row"
      boxSizing="border-box"
      border="2px solid #FFA06F"
      borderRadius="10px"
      background="#FFFFFF"
      marginBottom={{ md: "17px", base: "12.07px" }}
      // paddingTop={{md:"3.5px",base:"11px"}}
      // paddingBottom={{md:"3.5px",base:"9px"}}
      paddingLeft={{ md: "25px", base: "9px" }}
      paddingRight={{ md: "27px", base: "8px" }}
    >
      <Text
        fontWeight="500"
        fontFamily="Alegreya Sans"
        fontStyle="normal"
        fontSize={{ md: "64px", base: "32px" }}
        paddingRight={{ md: "25px", base: "9px" }}
      >
        #{rank}
      </Text>
      <Flex
        justifyContent="center"
        direction="column"
        paddingLeft={{ md: "25px", base: "8px" }}
        marginRight={{ md: "100px", base: "100px" }}
      >
        <Text
          fontFamily="Alegreya Sans"
          fontStyle="normal"
          fontWeight="500"
          fontSize={["20px", "36px"]}
          color="#000000"
          paddingBottom={{ md: "4px" }}
        >
          {name}
        </Text>
        <Text
          fontFamily="Alegreya Sans"
          fontStyle="normal"
          fontWeight="500"
          fontSize={["16px", "24px"]}
        >
          {nim}
        </Text>
      </Flex>
      <Text
        marginLeft="auto"
        fontFamily="Alegreya Sans"
        fontStyle="normal"
        fontWeight="500"
        fontSize={["24px", "64px"]}
      >
        {score}
      </Text>
    </Flex>
  );
};

export default Card;
