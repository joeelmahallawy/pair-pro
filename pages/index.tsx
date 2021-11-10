import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { IoIosArrowDown } from "react-icons/io";
import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { bounceAnimation, themes } from "../configs/themes";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../states/recoil";
import Header from "../components/header";
import dynamic from "next/dynamic";
import HowItWorks from "../components/howItWorks";
import Why from "../components/why";
import HomePage from "../components/homePage";
import { Bouncer } from "../components/animations";

const IndexPage = () => {
  const { user } = useUser();
  const [_, setUserData] = useRecoilState(userState);

  useEffect(() => {
    setUserData(user);
  }, [user]);

  // if (process.browser) {
  //   window.onscroll = () => {
  //     if (
  //       window.scrollY >
  //       // @ts-expect-error
  //       ourGoal.current?.getBoundingClientRect().top +
  //         window.pageYOffset -
  //         // @ts-expect-error
  //         nav.current?.getBoundingClientRect().height / 2
  //     ) {
  //       setShowSticky(true);
  //     } else {
  //       setShowSticky(false);
  //     }
  //   };
  // }

  return (
    <>
      <Flex flexDir="column" id="root" boxSizing="border-box">
        <Flex flexDir="column" id="home" h="100vh">
          <Header />
          <HomePage />
          <Bouncer />
        </Flex>
        <Flex h="85vh" bg="gray.900" id="how-it-works">
          <HowItWorks />
        </Flex>
        <Flex h="75vh" bg="gray.800" id="why">
          <Why />
        </Flex>

        <Center p={20} bg="gray.900">
          <Button
            mt="5.5%"
            size="md"
            fontSize="3xl"
            p={10}
            bg="orange.500"
            fontFamily="Arial"
            _hover={{ bg: "orange.600" }}
            _active={{ bg: "orange.700" }}
          >
            <Link href="/api/auth/login" _hover={{}} _focus={{}}>
              Sign me up!
            </Link>
          </Button>
        </Center>
        <Flex
          justifyContent="flex-end"
          p={10}
          h="11.5vh"
          bg="gray.500"
          id="footer"
        >
          Collaborators
        </Flex>
      </Flex>
    </>
  );
};

export default IndexPage;

// export const getServerSideProps = withPageAuthRequired({
//   async getServerSideProps(ctx) {
//     const res = await fetch("http://localhost:3000/api/stats", {
//       headers: { Cookie: ctx.req.headers.cookie },
//     });
//     const data = await res.json();

//     return { props: data };
//   },
// });
// export const getServerSideProps = withPageAuthRequired();
