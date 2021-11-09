import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { IoIosArrowDown } from "react-icons/io";
import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { bounceAnimation, themes } from "../configs/themes";
import { useRecoilState } from "recoil";
import { userState } from "../components/states";
import Header from "../components/header";

const IndexPage = () => {
  const [_, setUserData] = useRecoilState(userState);
  // useEffect(() => {
  //   setUserData(props);
  // }, []);

  return (
    <>
      <Box id="root" boxSizing="border-box">
        <Box id="home" h="100vh">
          <Header />
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

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const res = await fetch("http://localhost:3000/api/stats", {
      headers: { Cookie: ctx.req.headers.cookie },
    });
    const data = await res.json();

    return { props: data };
  },
});
