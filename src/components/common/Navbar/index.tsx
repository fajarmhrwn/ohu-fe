import { useRef, useState } from "react";
import Logo from "../../../assets/react.svg";
import DashboardLogo from "../../../assets/dashboard_menu.svg";
import LogoutLogo from "../../../assets/logout_menu.svg";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
  Show,
  Text,
  useDisclosure,
  IconButton
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Link, matchPath } from "react-router-dom";

const Navbar = () => {
  // TODO: handle login (BE)
  // TODO: apply font, di branch ini belum ke apply fontnya soalnya
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const links = [
    { label: "Home", link: "/" },
    { label: "Tour", link: "/tour" },
    { label: "Leaderboard", link: "/leaderboards" }
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerRef = useRef<HTMLButtonElement>(null);

  const UtilNav = () => {
    return (
      isLogin ? (
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bg="transparent"
            textColor="black"
            fontSize="lg"
            px={0}
            fontFamily='Alegreya Sans'
          >
            {/* TODO: Ganti sama user yang login? */}
            Lorem Ipsum
          </MenuButton>
          <MenuList borderColor="#FFA06E">
            <MenuItem fontFamily='Alegreya Sans'>
              <Image src={DashboardLogo} mr="4" alt="dashboard_logo" />
              <Text>Dashboard</Text>
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={() => setIsLogin(false)} fontFamily='Alegreya Sans'>
              <Image src={LogoutLogo} mr="4" alt="logout_logo" />
              <Text>Logout</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Button
          boxShadow="0px 1px 7px 2px rgba(244, 166, 65, 0.62)"
          fontSize="md"
          px={8}
          color="white"
          bgColor="#F4A641"
          onClick={() => setIsLogin(true)}
          fontFamily='Alegreya Sans'
        >
          Log In
        </Button>
      )
    )
  }

  return (
    <Flex
      w="100%"
      px={10}
      py={2}
      bg="#FFEBB0"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      position="sticky"
      top="0"
      zIndex="999"
    >
      <Box alignItems={"center"}>
        <HStack>
          {/* TODO: ganti logo */}
          <Image src={Logo} mb={3} />
          <Text as="b" fontSize="2xl" fontFamily='Magilio'>
            KAT ITB 2022
          </Text>
        </HStack>
      </Box>
      {/* TODO liat font */}
      <Show above="lg">
        <Flex
          gap={20}
          fontSize="xl"  
          alignItems="center"
          fontWeight={400}
          fontFamily="Alegreya Sans"
        >
          {links.map((item) => {
            const match = matchPath({ path: item.link }, window.location.pathname);
            return (
              <Link key={item.label} to={item.link}>
                <Text
                  textUnderlineOffset={5}
                  textDecoration={match ? "underline" : "none"}
                  textDecorationColor="#FF7D4B"
                  _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "#FF7D4B"
                  }}
                >
                  {item.label}
                </Text>
              </Link>
            );
          })}
          <UtilNav />
        </Flex>
      </Show>
      <Show below="lg">
        <IconButton
          bg="transparent"
          aria-label="Open Menu"
          size="lg"
          icon={<HamburgerIcon w={6} h={6} color="black" />} onClick={onOpen}
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={drawerRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody bg="#FFEBB0">
              <Flex
                alignItems="flex-start"
                justifyContent="center"
                minH="90vh"
                flexDirection="column"
                gap={4}
              >
                {links.map((item) => {
                  const match = matchPath({ path: item.link }, window.location.pathname);
                  return (
                    <Link key={item.label} to={item.link}>
                      <Text
                        textUnderlineOffset={5}
                        textDecoration={match ? "underline" : "none"}
                        textDecorationColor="#FF7D4B"
                        _hover={{
                          textDecoration: "underline",
                          textDecorationColor: "#FF7D4B"
                        }}
                      >
                        {item.label}
                      </Text>
                    </Link>
                  );
                })}
                <UtilNav />
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>
    </Flex>
  );
};

export default Navbar;
