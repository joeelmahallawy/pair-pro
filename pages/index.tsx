import {
  Button,
  Center,
  Flex,
  Heading,
  Link,
  Image,
  Text,
} from "@chakra-ui/react";
import YosemitePic from "../attachments/yosemite_compressed.jpeg";
import React, { useEffect } from "react";
import Header from "../components/pageComponents/header";
import HowItWorks from "../components/pageComponents/howItWorks";
import Why from "../components/pageComponents/why";
import HomePage from "../components/pageComponents/homePage";
import { Bouncer } from "../components/animations";
import Socials from "../components/socialLinks";
import getUserId from "../helpers/getUserId";

const IndexPage = (user) => {
  if (user.error == "not_authenticated") user = null;

  console.log("USER FROM HOMEPAGE", user);
  useEffect(() => {
    if (user) {
      fetch("https://pair-pro.vercel.app/api/mongo", {
        headers: {
          user: getUserId(user),
        },
      }).then(async (res) => {
        const userData = await res.json();
        if (!userData.data) window.location.pathname = "initLogin";
      });
    }
  }, []);

  return (
    <>
      <Flex
        flexDir="column"
        id="root"
        // bg="#13111c"
        boxSizing="border-box"
      >
        <Flex flexDir="column" id="home" h="100vh">
          <Header user={user} />
          <HomePage />
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
              <Link href={"/api/auth/login"} _hover={{}} _focus={{}}>
                Sign me up!
              </Link>
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

            <Center flexDir="column" w="10vw">
              <Text fontWeight="500" fontFamily="Roboto">
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

    return { props: user };
  } catch (err) {
    return {};
  }
};
