import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

import theme from "../configs/themes";

const IndexPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box id="root" boxSizing="border-box">
        {/* <Button onClick={toggleColorMode}>hi</Button> */}
        <Center
          boxShadow="0 0px 5px 2px rgb(217, 218, 217)"
          id="header"
          justifyContent="space-around"
          p={7}
        >
          <Center w="35%">(LOGO HERE)</Center>

          <Flex w="40%" justifyContent="flex-end">
            <Button {...theme.navButtons}>How it works</Button>
            <Button {...theme.navButtons}>Why</Button>
            <Button
              {...theme.navButtons}
              bg="orange.500"
              ml={5}
              borderRadius={5}
              _hover={{ bg: "orange.600" }}
            >
              Pair me
            </Button>
          </Flex>
          <Flex w="20%" justifyContent="flex-end">
            <Button
              {...theme.navButtons}
              _hover={{ bg: "blue.600" }}
              borderRadius={5}
              bg="blue.500"
            >
              Log in
            </Button>
          </Flex>
        </Center>
        <Center
          justifyContent="space-around"
          flexDir="column"
          p={[10, 10, 10, 10, 10, 20]}
        >
          <Box w={["50%", "50%", "60%", "70%", "80%"]}>
            <Heading
              {...theme.fonts.heading}
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
              Ever had a cool project idea but lack the manpower to execute it?
              We know how it feels to have such great ideas that are hard to
              execute alone. That's why we're introducing PairPro! The new
              match-making system that connects you with another developer with
              similar experience and is ready to collaborate to build great
              projects!
            </Text>
          </Box>

          <Button
            mt="12.5%"
            size="lg"
            fontSize="4xl"
            p={7}
            bg="orange.500"
            _hover={{ bg: "orange.600" }}
            _active={{ bg: "orange.700" }}
            _focus={{}}
          >
            Start pairing now!
          </Button>
        </Center>
        <Center mt="5%">
          <Button>hi</Button>
        </Center>
      </Box>
    </>
  );
};

export default IndexPage;
