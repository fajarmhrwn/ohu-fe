import React from "react";
import { Flex } from "@chakra-ui/react";

function Card(props) {
  const { nim, name, score, rank } = props;

  return (
    <Flex
      display="inline-flex"
      sx={{ gap: ".5rem" }}
      dir="row"
      boxSizing="border-box"
      // width={["294px", "930px"]}
      minWidth="294px"
      maxWidth="930px"
      paddingX={["5px", 0]}
      height={["auto"]}
      background="#FFFFFF"
      border="2px solid #FFA06F"
      borderRadius="10px"
      marginBottom={["12.07px", "17px"]}
    >
      <Flex
        // width={["52.93px", "93px"]}
        minWidth="52.93px"
        maxWidth="93px"
        // height={["29px", "59px"]}
        marginLeft={["9px", "25px"]}
        marginRight={["0px", "50px"]}
        marginTop={["11px", "17px"]}
        marginBottom={["12.93px", "17px"]}
        fontFamily="Alegreya Sans"
        fontStyle="normal"
        fontWeight="500"
        fontSize={["32px", "64px"]}
        lineHeight="92%"
        justifyContent="center"
        alignItems="center"
      >
        #{rank}
      </Flex>

      <Flex
        dir="column"
        display="table-row"
        height="auto"
        marginTop={["11px", "17px"]}
        marginBottom={["8.93px", "17px"]}
        // marginRight={[]}
        // marginLeft={[]}
      >
        <Flex
          position="relative"
          // width={["184px", "647px"]}
          minWidth="184px"
          maxWidth="647px"
          //height={["18px","33px"]}

          fontFamily="Alegreya Sans"
          fontStyle="normal"
          fontWeight="500"
          fontSize={["20px", "36px"]}
          lineHeight="92%"
          color="#000000"
        >
          {name}
        </Flex>

        <Flex
          position="relative"
          width={["60px", "90px"]}
          height={["15px", "22px"]}
          fontFamily="Alegreya Sans"
          fontStyle="normal"
          fontWeight="500"
          fontSize={["16px", "24px"]}
          lineHeight="92%"
        >
          {nim}
        </Flex>
      </Flex>
      <Flex
        justifyContent="flex-end"
        alignItems="center"
        width={["47px", "124px"]}
        // height={["22px","59px"]}

        // marginLeft={["-15px", "0"]}
        marginLeft="auto"
        fontFamily="Alegreya Sans"
        fontStyle="normal"
        fontWeight="500"
        fontSize={["24px", "64px"]}
        lineHeight="92%"
      >
        {score}
      </Flex>
    </Flex>
  );
}

export default Card;
