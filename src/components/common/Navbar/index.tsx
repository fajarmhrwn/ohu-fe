import { useState } from "react";
import Logo from "../../../assets/react.svg";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [display, changeDisplay] = useState("none");

  return (
    <Flex>
      <Flex
        width="100%"
        height="80px"
        backgroundColor="white"
        alignItems="center"
        justify={"space-between"}
        px={{ md: 20, base: 5 }}
      >
        {/* Desktop */}

        {/* Logo */}
        <Box alignItems={"center"}>
          <HStack>
            <Image src={Logo} />
            <Text fontWeight="extrabold" fontSize="xl">
              KAT ITB 2022
            </Text>
          </HStack>
        </Box>
        {/* Menu Bar */}
        <Flex
          display={["none", "none", "flex", "flex"]}
          alignItems="center"
          gap={20}
        >
          <Flex gap={20}>
            <Link>Home</Link>
            <Link>Tour</Link>
            <Link>Leaderboard</Link>
          </Flex>

          {isLogin ? (
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant="ghost"
                cursor="pointer"
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
              boxShadow="md"
              h="30px"
              fontSize="15px"
              px={8}
              color="white"
              colorScheme="yellow"
              onClick={() => setIsLogin(true)}
            >
              Log In
            </Button>
          )}
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.200"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        py={10}
        px={5}
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
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
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant="ghost"
                cursor="pointer"
                p={0}
                fontSize="md"
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
              boxShadow="md"
              h="30px"
              fontSize="15px"
              px={8}
              color="white"
              colorScheme="yellow"
              w={{ md: "100%", base: "35%" }}
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
