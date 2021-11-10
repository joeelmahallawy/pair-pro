import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
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

  return (
    <>
      <Flex flexDir="column" id="root" boxSizing="border-box">
        <Flex flexDir="column" id="home" h="100vh">
          <Header />
          <HomePage />
          <Bouncer />
        </Flex>
        <Flex h="80vh" bg="gray.900" id="how-it-works">
          <HowItWorks />
        </Flex>
        <Flex h="70vh" bg="gray.800" id="why">
          <Why />
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
