import { ChakraProvider, Circle, Box, Center, Flex, Text, Button, AspectRatio, useDisclosure, ModalOverlay, ModalContent, Modal, Link } from '@chakra-ui/react';

export const Popup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const onAir = true //dummy data
  return (
    <ChakraProvider>
    <Center h="100%">
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent>
      <Box 
        position="relative"
        py="10" 
        px="10"
        height="100%" 
        maxW="550px"  
        borderWidth="none"
        borderRadius='10px'
        bgColor="#fffbf2">

      <Flex
      alignItems="center"
      justifyContent="space-between"
      >  
        <Flex 
          flexDirection = "row" 
          alignItems = "center">
          <Text
            fontFamily='Alegreya'
            fontSize="32pt" 
            fontWeight="bold" 
            mt={0}>
            Unit A 
          </Text>
          <Flex
            background = "#79C7D4"
            boxShadow = "0px 1px 7px 2px rgba(121, 199, 212, 0.62)"
            borderRadius = "8.5px"
            flexDirection = "row"
            justifyContent = "space-evenly"
            alignItems = "center"
            w = "4em"
            h = "1.3em"
            ml = "1em"> 
              <Circle
                size = "0.6em"
                bg = {onAir ? "#CB3946" : "#363636"}>
              </Circle>
              <Text
                fontWeight = "500"
                fontSize = "0.7em"
                color = "#FFFFFF"
                fontFamily = "Alegreya Sans"
                fontStyle = "normal">
                {onAir ? "On Air" : "Off Air"}
              </Text>    
          </Flex>
        </Flex>
        <Button className='CloseButton'
          onClick={onClose}
          fontSize={32}
          bgColor="#fffbf2"
          >&times;
        </Button>
      </Flex>
      <Box
        borderRadius='5px'
        bgColor="#ff7d4c"
        borderColor="#ff7d4c"
        borderWidth="3px"
        mt='-2'
        mb="3"/>
      <AspectRatio maxW="560px" ratio={16/9}>
        <Box
          as="iframe"
          title="liveStream"
          src="https://www.youtube.com/embed/L5oAdk4x7a0"
          allowFullScreen
        />
      </AspectRatio>
      

      <Text 
        fontFamily='Alegreya'
        fontSize="32pt" 
        fontWeight="bold" 
        mt={6}>
        Rundown
      </Text>
      <Box
        borderRadius='5px'
        bgColor="#ff7d4c"
        borderColor="#ff7d4c"
        borderWidth="3px"
        mt='-2'
        mb="3"/>
      <Text 
        mt={2}
        fontFamily='Alegreya Sans' 
        fontSize="12pt"  
        lineHeight="short"
        align="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam tellus, sodales non mauris id, placerat fringilla elit. In non sem porta, tristique velit in, vestibulum turpis. Nulla quis elit ipsum. Nunc non mi id diam accumsan posuere tincidunt in lectus. Vivamus tempus purus dui, in luctus nisi commodo eget. Fusce imperdiet metus arcu, ullamcorper vehicula nulla tempus sit amet. In tortor purus, malesuada ac tempus sed, pharetra ut leo. Ut sit amet turpis ut turpis iaculis elementum. Quisque convallis auctor turpis eget pulvinar. Vestibulum blandit massa eu ipsum lobortis, ac malesuada turpis pharetra.
      </Text>


      <Text
        fontFamily='Alegreya'
        fontSize="32pt" 
        fontWeight="bold"
        mt={6}>
        Mission
      </Text>
      <Box
        borderRadius='5px'
        bgColor="#ff7d4c"
        borderColor="#ff7d4c"
        borderWidth="3px"
        mt='-2'
        mb="3"/>
      <Text 
        mt={2}
        fontFamily='Alegreya Sans' 
        fontSize="12pt"  
        lineHeight="short"
        align="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam tellus, sodales non mauris id, placerat fringilla elit. In non sem porta, tristique velit in, vestibulum turpis. Nulla quis elit ipsum. Nunc non mi id diam accumsan posuere tincidunt in lectus. Vivamus tempus purus dui, in luctus nisi commodo eget. Fusce imperdiet metus arcu, ullamcorper vehicula nulla tempus sit amet. In tortor purus, malesuada ac tempus sed, pharetra ut leo. Ut sit amet turpis ut turpis iaculis elementum. Quisque convallis auctor turpis eget pulvinar. Vestibulum blandit massa eu ipsum lobortis, ac malesuada turpis pharetra.
      </Text>
      <Text 
        fontSize="24pt" 
        fontWeight="semibold" 
        mt={4} 
        align="center">
        Interested?
      </Text>
      <Link href='https://google.com' isExternal>
        <Button type='button'
          fontSize='18pt'
          height="32pt"
          width="100%"
          alignItems="center"
          bg="#ff7d4c"
          borderRadius="150px"
          fontWeight="semibold"
          _hover={{
            bg: "#d85526",
          }}
          _active={{
            bg: "#ba431b"
          }}
          >Click Here 
        </Button>
      </Link>

      </Box>
      </ModalContent>
      </Modal>
    </Center>
    </ChakraProvider>
  );
};
