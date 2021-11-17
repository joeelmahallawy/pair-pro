import { Button, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import YosemitePic from "../attachments/yosemite_compressed.jpeg";
import React, { useEffect } from "react";
import Header from "../components/pageComponents/header";
import HowItWorks from "../components/pageComponents/howItWorks";
import Why from "../components/pageComponents/why";
import HomePage from "../components/pageComponents/homePage";
import { Bouncer } from "../components/animations";
import Socials from "../components/socialLinks";
import getUserId from "../helpers/getUserId";
// import Router from 'next/router'
import Router from "next/router";

const IndexPage = ({ user, data }) => {
  console.log(user);
  console.log(data);
  useEffect(() => {
    if (user?.error != "not_authenticated" && !data.data && process.browser) {
      Router.push("/initLogin");
    }
  }, []);
  if (user.error == "not_authenticated") user = null;

  return (
    <>
      <Flex
        fontFamily="Arial"
        flexDir="column"
        id="root"
        // bg="#13111c"
        boxSizing="border-box"
      >
        <Flex flexDir="column" id="home" h="100vh">
          <Header user={user} />
          <HomePage />
          {/* TODO: */}
          <Bouncer />
        </Flex>
        <Flex h="85vh" bg="gray.900" id="how-it-works">
          <HowItWorks />
        </Flex>
        <Flex h="75vh" bg="gray.800" id="why">
          <Why />
        </Flex>

        {!user && (
          <Center p={0} bg="gray.900">
            <Button
              m="10%"
              size="md"
              fontSize="3xl"
              p={10}
              bg="orange.500"
              fontFamily="Arial"
              _hover={{ bg: "orange.600" }}
              _active={{ bg: "orange.700" }}
            >
              <Link href={"/api/auth/login"}>Sign me up!</Link>
            </Button>
          </Center>
        )}
        <Center
          p={5}
          flexDir="column"
          bg={user ? "gray.900" : "gray.800"}
          id="footer"
        >
          <Heading mb={3} fontSize="150%">
            Collaborators
          </Heading>
          <Center
            bg="gray.700"
            w={["10vw", "12.5vw", "14vw", "16vw", "20vw"]}
            h={["20vw", "25vw", "28vw", "32vw", "40vw"]}
            p={5}
            borderRadius={5}
            flexDir="column"
            boxShadow="0px 0px 5px 0.5px white"
            id="contact-card"
          >
            <Image
              w="160px"
              fit="cover"
              h="140px"
              borderRadius="50%"
              src={YosemitePic.src}
            />

            <Center flexDir="column" w="100%">
              <Text fontWeight="500" fontSize="lg" fontFamily="Roboto">
                Youssef El Mahallawy
              </Text>
              <Socials
                linkedIn={"https://www.linkedin.com/in/youssefelmahallawy"}
                gitHub={"https://github.com/joeelmahallawy"}
              />
              <Text bg="gray.600" mt={3} borderRadius={10} p={3}>
                Hi, I'm Bob the builder, but in tech. I love solving problems
                and building projects!
              </Text>
            </Center>
          </Center>
        </Center>
        <Center
          justifyContent="flex-end"
          p={10}
          h="11.5vh"
          bg="gray.900"
          id="footer"
        >
          @Copyright 2021
        </Center>
      </Flex>
    </>
  );
};

export default IndexPage;

export const getServerSideProps = async (ctx) => {
  try {
    const res = await fetch("https://pair-pro.vercel.app/api/stats", {
      headers: { Cookie: ctx.req.headers.cookie },
    });
    const user = await res.json();

    const response = await fetch("https://pair-pro.vercel.app/api/mongo", {
      method: "GET",
      headers: {
        user: getUserId(user),
      },
    });
    const data = await response.json();

    return { props: { user, data } };
  } catch (err) {
    return {};
  }
};
