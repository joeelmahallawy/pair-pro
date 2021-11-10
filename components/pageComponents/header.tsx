import {
  Center,
  Flex,
  Box,
  Link,
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
import React, { useRef, useState } from "react";
import logo from "../../attachments/pairpro-transparent.png";
import { RiArrowDownSFill, RiLink } from "react-icons/ri";
import { useRecoilState } from "recoil";
import { themes } from "../../configs/themes";
import { userState } from "../../states/recoil";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import getUserId from "../../helpers/getUserId";

const Header = () => {
  const [userData] = useRecoilState(userState);
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
    >
      <Center w="35%">
        <Center w="280px" h="40px">
          <Link href="/" _focus={{}}>
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
        <Button {...themes.navButtons}>
          <LinkScroll
            to="how-it-works"
            smooth={true}
            // @ts-expect-error
            offset={-header.current?.getBoundingClientRect().height}
            duration={500}
            // suppressHydrationWarning
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

        <Button
          {...themes.navButtons}
          bg="orange.500"
          ml={5}
          borderRadius={5}
          _hover={{ bg: "orange.600" }}
        >
          <Link href="/api/auth/login" _hover={{}} _focus={{}}>
            Pair me
          </Link>
        </Button>
      </Flex>
      <Flex w="20%" justifyContent="flex-end">
        {userData ? (
          <Box mr="20%">
            <Popover>
              {/* TODO: */}
              <PopoverTrigger>
                <Box cursor="pointer" _hover={{ color: "gray.300" }}>
                  <Image
                    //   @ts-expect-error
                    src={userData.picture}
                    borderRadius="50%"
                    boxSize="10"
                  />
                  <Flex fontFamily="Roboto">
                    Me
                    <RiArrowDownSFill fontSize="22.5" />
                  </Flex>
                </Box>
              </PopoverTrigger>
              <PopoverContent width="250px">
                <PopoverArrow />
                <PopoverHeader fontFamily="Roboto">
                  {console.log(userData)}
                  <Link href={`/user/${getUserId(userData)}`}>
                    <Center justifyContent="space-between" fontWeight="bold">
                      <Image
                        w="60px"
                        h="60px"
                        borderRadius="50%"
                        //   @ts-expect-error
                        src={userData.picture}
                      />
                      {/* @ts-expect-error */}
                      {userData.name}
                      {/* {naming(userData)} */}
                    </Center>
                  </Link>
                </PopoverHeader>
                <PopoverBody>
                  <Flex flexDir="column" justifyContent="space-around">
                    <Link p={0.5}>Messages</Link>
                    <Link p={0.5}>Settings</Link>
                    <Divider />
                    <Link _focus={{}} href="/api/auth/logout" p={0.5}>
                      Sign out
                    </Link>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        ) : (
          <Link href="/api/auth/login" _hover={{}}>
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
