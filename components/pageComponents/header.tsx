import {
  Center,
  Flex,
  Box,
  Divider,
  Button,
  Image,
  Popover,
  Link as LinkChakra,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../attachments/pairpro-transparent.png";
import { RiArrowDownSFill } from "react-icons/ri";
import { themes } from "../../configs/themes";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import getUserId from "../../helpers/getUserId";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = ({ user, data }) => {
  const header = useRef();
  const [onHome, setOnHome] = useState(true);
  const [headerSticky, setHeaderSticky] = useState(false);
  useEffect(() => {
    if (process.browser) {
      if (window.location.pathname != "/") {
        console.log("this is not home page");
        setOnHome(false);
      }
    }
  }, []);
  if (process.browser) {
    window.onscroll = () => {
      if (
        window.innerHeight - window.pageYOffset <=
        // @ts-expect-error
        header.current?.getBoundingClientRect().height
      ) {
        setHeaderSticky(true);
      } else {
        setHeaderSticky(false);
      }
    };
  }

  return (
    <Center
      zIndex="overlay"
      position={headerSticky ? "fixed" : null}
      top={headerSticky ? 0 : null}
      width={headerSticky ? "100%" : null}
      bg={headerSticky ? "rgb(23, 25, 35,.75)" : null}
      ref={header}
      // h="11.5v%"
      boxShadow="0 0px 3px 1px rgb(217, 218, 217)"
      id="header"
      justifyContent="space-around"
      p={7}
      fontFamily="Arial"
    >
      <Center w="35%">
        <Center w="280px" h="40px">
          <Link href="/">
            <Image
              _hover={{ cursor: "pointer" }}
              w="240px"
              h="180px"
              src={logo.src}
            />
          </Link>
        </Center>
      </Center>
      <Flex w="45%" justifyContent="flex-end">
        {/* FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:ISSUE WITH RENDERING BUTTON SINCE ITS ON SERVERFIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME: */}
        {onHome && (
          <>
            <Button {...themes.navButtons}>
              <LinkScroll
                to="how-it-works"
                smooth={true}
                // @ts-expect-error
                offset={-header.current?.getBoundingClientRect().height}
                duration={500}
              >
                How it works
              </LinkScroll>
            </Button>

            <Button {...themes.navButtons}>
              <LinkScroll
                to="why"
                smooth={true}
                // @ts-expect-error
                offset={-header.current?.getBoundingClientRect().height}
                duration={500}
              >
                Why
              </LinkScroll>
            </Button>
          </>
        )}

        <LinkChakra
          _hover={{}}
          _focus={{}}
          href={user && data.data ? "/pairingSession" : "/api/auth/login"}
        >
          <Button
            {...themes.navButtons}
            bg="orange.500"
            ml={5}
            borderRadius={5}
            _hover={{ bg: "orange.600" }}
          >
            Connect me with someone
          </Button>
        </LinkChakra>
      </Flex>
      <Flex w="15%" justifyContent="flex-end">
        {user ? (
          <Box mr="20%">
            <Menu>
              <MenuButton
                bg="transparent"
                _hover={{ color: "gray.400" }}
                _focus={{}}
              >
                <Box cursor="pointer" _hover={{ color: "gray.300" }}>
                  <Image src={user.picture} borderRadius="50%" boxSize="10" />
                  <Flex fontFamily="Arial" fontWeight="500">
                    Me
                    <RiArrowDownSFill fontSize="22.5" />
                  </Flex>
                </Box>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link href={`/user/${getUserId(user)}`}>
                    <Center
                      justifyContent="space-between"
                      fontWeight="bold"
                      _hover={{ cursor: "pointer" }}
                    >
                      <Image
                        w="60px"
                        h="60px"
                        borderRadius="50%"
                        src={user.picture}
                        p={1}
                      />
                      {user && user?.sub?.startsWith("auth0")
                        ? user.nickname
                        : user?.name
                        ? user?.name
                        : user?.nickname}
                    </Center>
                  </Link>
                </MenuItem>
                <Divider />
                <Link href={`/user/${getUserId(user)}`}>
                  <MenuItem>Settings</MenuItem>
                </Link>
                <Link href="/api/auth/logout">
                  <MenuItem>Sign out</MenuItem>
                </Link>
              </MenuList>
            </Menu>

            {/* <Popover>
              <PopoverTrigger>
                <Box cursor="pointer" _hover={{ color: "gray.300" }}>
                  <Image src={user.picture} borderRadius="50%" boxSize="10" />
                  <Flex fontFamily="Roboto">
                    Me
                    
                    <RiArrowDownSFill fontSize="22.5" />
                  </Flex>
                </Box>
              </PopoverTrigger>
              <PopoverContent width="250px">
                <PopoverArrow />
                <PopoverHeader fontFamily="Roboto">
                  <Link href={`/user/${getUserId(user)}`}>
                    <Center
                      justifyContent="space-between"
                      fontWeight="bold"
                      _hover={{ cursor: "pointer" }}
                    >
                      <Image
                        w="60px"
                        h="60px"
                        borderRadius="50%"
                        src={user.picture}
                      />

                      {user && user?.sub?.startsWith("auth0")
                        ? user.nickname
                        : user?.name
                        ? user?.name
                        : user?.nickname}
                    </Center>
                  </Link>
                </PopoverHeader>
                <PopoverBody>
                  <Flex flexDir="column" justifyContent="space-around">
                    {/* <Link>Messages</Link> 
                    <Box p={3}>
                      <Link href={`/user/${getUserId(user)}`}>Settings</Link>
                    </Box>
                    <Divider />
                    <Box p={3}>
                      <Link href="/api/auth/logout">Sign out</Link>
                    </Box>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover> */}
          </Box>
        ) : (
          <Link href="/api/auth/login">
            <Button
              {...themes.navButtons}
              _hover={{ bg: "blue.600" }}
              borderRadius={5}
              bg="blue.500"
            >
              Log in
            </Button>
          </Link>
        )}
      </Flex>
    </Center>
  );
};
export default Header;
