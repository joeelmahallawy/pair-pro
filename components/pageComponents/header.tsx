import {
  Center,
  Flex,
  Box,
  Divider,
  Button,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import logo from "../../attachments/pairpro-transparent.png";
import { RiArrowDownSFill } from "react-icons/ri";
import { themes } from "../../configs/themes";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import getUserId from "../../helpers/getUserId";

const Header = ({ user }) => {
  const header = useRef();
  const [headerSticky, setHeaderSticky] = useState(false);
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
      position={headerSticky ? "fixed" : null}
      top={headerSticky ? 0 : null}
      width={headerSticky ? "100%" : null}
      bg={headerSticky ? "rgb(23, 25, 35,.75)" : null}
      ref={header}
      h="11.5v%"
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
      <Flex w="40%" justifyContent="flex-end">
        {/* FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:ISSUE WITH RENDERING BUTTON SINCE ITS ON SERVERFIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME: */}

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

        <Link href="/pairingSession">
          <Button
            {...themes.navButtons}
            bg="orange.500"
            ml={5}
            borderRadius={5}
            _hover={{ bg: "orange.600" }}
          >
            Pair me
          </Button>
        </Link>
      </Flex>
      <Flex w="20%" justifyContent="flex-end">
        {user ? (
          <Box mr="20%">
            <Popover>
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
                    <Center justifyContent="space-between" fontWeight="bold">
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
                    {/* <Link>Messages</Link> */}
                    <Link href={`/user/${getUserId(user)}`}>Settings</Link>
                    <Divider />
                    <Link href="/api/auth/logout">Sign out</Link>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>
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
