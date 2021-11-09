import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Link,
  Text,
  Image,
  useColorMode,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Divider,
} from "@chakra-ui/react";
import { useUser } from "@auth0/nextjs-auth0";
import { IoIosArrowDown } from "react-icons/io";
import React from "react";
import Fade from "react-reveal/Fade";
import { RiArrowDownSFill } from "react-icons/ri";

import { bounceAnimation, themes } from "../configs/themes";

const IndexPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { user, error, isLoading } = useUser();
  console.log(user);

  return (
    <>
      <Box id="root" boxSizing="border-box">
        <Box id="home" h="100vh">
          {/* <Button onClick={toggleColorMode}>hi</Button> */}
          <Center
            h="11.5v%"
            boxShadow="0 0px 5px 2px rgb(217, 218, 217)"
            id="header"
            justifyContent="space-around"
            p={7}
          >
            <Center w="35%">(LOGO HERE)</Center>

            <Flex w="40%" justifyContent="flex-end">
              <Button {...themes.navButtons}>How it works</Button>
              <Button {...themes.navButtons}>Why</Button>
              <Button
                {...themes.navButtons}
                bg="orange.500"
                ml={5}
                borderRadius={5}
                _hover={{ bg: "orange.600" }}
              >
                Pair me
              </Button>
            </Flex>
            <Flex w="20%" justifyContent="flex-end">
              {user ? (
                <Box mr="20%">
                  <Popover>
                    {/* TODO: */}
                    <PopoverTrigger>
                      <Box cursor="pointer" _hover={{ color: "gray.300" }}>
                        {/* <Link
                      _focus={{}}
                      display="flex"
                      flexDir="column"
                      href="/api/auth/logout"
                      _hover={{}}
                    > */}
                        <Image
                          src={user.picture}
                          borderRadius="50%"
                          boxSize="10"
                        />
                        <Flex fontFamily="Roboto">
                          Me
                          <RiArrowDownSFill fontSize="22.5" />
                        </Flex>
                        {/* </Link> */}
                        {/* TODO: */}
                      </Box>
                    </PopoverTrigger>
                    <PopoverContent width="250px">
                      <PopoverArrow />
                      <PopoverHeader fontFamily="Roboto">
                        <Link href="/userAccount" _hover={{}}>
                          <Center
                            justifyContent="space-between"
                            fontWeight="bold"
                          >
                            <Image
                              w="60px"
                              h="60px"
                              borderRadius="50%"
                              src={user.picture}
                            />
                            {user.name}
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

                          {/* <Button bg="blue.600" size="sm">
                          Button
                        </Button>
                        <Button colorScheme="teal" size="sm">
                          Button
                        </Button> */}
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
          <Center
            h="80%"
            justifyContent="space-around"
            flexDir="column"
            p={[10, 10, 10, 10, 10, 20]}
          >
            <Box w={["50%", "50%", "60%", "70%", "80%"]}>
              <Heading
                {...themes.fonts.heading}
                m="0 auto 1% auto"
                textAlign="center"
              >
                Start pairing with programmers who have similar experience and
                interests to build the projects of your dreams!
              </Heading>
              <Text
                w={["60%", "80%", "60%", "70%", "80%", "60%"]}
                textAlign="center"
                fontSize={["50%", "65%", "80%", "90%", "100%"]}
                m="0 auto"
                color="gray.400"
              >
                Ever had a cool project idea but lack the manpower to execute
                it? We know how it feels to have such great ideas that are hard
                to execute alone. That's why we're introducing PairPro! The new
                match-making system that connects you with another developer
                with similar experience and is ready to collaborate to build
                great projects!
              </Text>
            </Box>

            <Button
              mt="5.5%"
              size="lg"
              fontSize="4xl"
              p={10}
              bg="orange.500"
              _hover={{ bg: "orange.600" }}
              _active={{ bg: "orange.700" }}
              _focus={{}}
            >
              Start pairing now!
            </Button>
          </Center>
          <Flex
            id="bouncer"
            animation={bounceAnimation}
            justifyContent="center"
            // h="8.5vh"
          >
            <Box _hover={{ cursor: "pointer" }}>
              <Fade top big>
                <IoIosArrowDown size={40} />
              </Fade>
            </Box>
          </Flex>
        </Box>
        <Box bg="gray.900" id="how-it-works">
          <Center p={3}>
            <Heading>How it works</Heading>
          </Center>
        </Box>
      </Box>
    </>
  );
};

export default IndexPage;

// import { useUser } from '@auth0/nextjs-auth0';

// export default function Index() {

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;
