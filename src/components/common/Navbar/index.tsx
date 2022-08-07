import { useState } from "react";
import Logo from "../../../assets/react.svg";
import { Box, Button, Flex, HStack, IconButton, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [display, changeDisplay] = useState("none");

  return (
    <Flex>
      <Flex
        width="1770px" height="73px" left="78px" top="109px" alignItems="center" justify={"space-between"} px={{ md: 20, base: 5 }}
      >
        {/* Desktop */}

        {/* Logo */}
        <Box alignItems={"center"}>
          <HStack>
            <Image src={Logo}/>
            <Text fontWeight="400" fontSize="30px">
              KAT ITB 2022
            </Text>
          </HStack>
        </Box>
        {/* Menu Bar */}
        <Flex
          display={["none", "none", "flex", "flex"]} alignItems="center" gap={20}
        >
          <Flex gap={20}>
            <Link>Home</Link>
            <Link>Tour</Link>
            <Link>Leaderboard</Link>
          </Flex>

          {isLogin ? (
            <Menu>
              <MenuButton
                as={Button} rightIcon={<ChevronDownIcon />} variant="ghost" cursor="pointer"
              >
                Lorem Ipsum
              </MenuButton>
              <MenuList>
                <MenuItem>Dashboard</MenuItem>
                <MenuItem onClick={() => setIsLogin(false)}>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button
              boxShadow="0px 1px 7px 2px rgba(244, 166, 65, 0.62)" borderRadius="10px" fontSize="15px" h="30px" px={8} color="white" bgColor="#F4A641"
              onClick={() => setIsLogin(true)}
            >
              Log In
            </Button>
          )}
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu" size="lg" mr={2} icon={<HamburgerIcon />} onClick={() => changeDisplay("flex")} display={["flex", "flex", "none", "none"]}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="375px" h="812px" top="0px" left="0px" display={display} bgColor="rgba(255, 193, 118, 0.9)" backdropFilter="blur(25px)" zIndex={20} pos="absolute" py={10} px={5} overflowY="auto" flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2} mr={2} aria-label="Open Menu" size="lg" icon={<CloseIcon />} onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" py={20} gap={10} w="35%" justify="center">
          <Flex flexDir="column" gap={10}>
            <Link>Home</Link>
            <Link>Tour</Link>
            <Link>Leaderboard</Link>
          </Flex>

          {isLogin ? (
            <Menu>
              <MenuButton
                as={Button} rightIcon={<ChevronDownIcon />} variant="ghost" cursor="pointer" p={0} fontSize="md"
              >
                Lorem Ipsum
              </MenuButton>
              <MenuList bgColor="#FFFFFF" border="2px solid #FFA06F" borderRadius="10px">
                <MenuItem>Dashboard</MenuItem>
                <MenuItem onClick={() => setIsLogin(false)}>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button
              boxShadow="0px 1px 7px 2px rgba(244, 166, 65, 0.62)" borderRadius="10px" fontSize="15px" h="30px" px={8} color="white" bgColor="#F4A641" w={{ md: "100%", base: "35%" }}
              onClick={() => setIsLogin(true)}
            >
              Log In
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
