import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Link,
  Image,
  Text,
} from "@chakra-ui/react";
import { useUser } from "@auth0/nextjs-auth0";
import WashingtonPic from "../attachments/washington_pic.jpeg";
import YosemitePic from "../attachments/yosemite_compressed.jpeg";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../states/recoil";
import Header from "../components/pageComponents/header";
import HowItWorks from "../components/pageComponents/howItWorks";
import Why from "../components/pageComponents/why";
import HomePage from "../components/pageComponents/homePage";
import { Bouncer } from "../components/animations";
import Socials from "../components/socialLinks";
import getUserId from "../helpers/getUserId";
import checkFirstTime from "../helpers/checkFirstTimeUser";

const IndexPage = () => {
  const { user } = useUser();
  const [data, setUserData] = useRecoilState(userState);

  useEffect(() => {
    checkFirstTime(user, setUserData);
  }, [user]);
  // console.log(data);
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

        {!data && (
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
          p={15}
          flexDir="column"
          bg={data ? "gray.900" : "gray.800"}
          id="footer"
        >
          <Heading mb={3} fontSize="150%">
            Collaborators
          </Heading>
          <Center bg="gray.700" p={5} flexDir="column" id="contact-card">
            <Image
              w="160px"
              h="140px"
              borderRadius="50%"
              src={YosemitePic.src}
            />
            {/* TODO: */}

            <Center flexDir="column">
              <Text fontWeight="500" fontFamily="Roboto">
                Youssef El Mahallawy
              </Text>
              <Socials
                linkedIn={"https://www.linkedin.com/in/youssefelmahallawy"}
                gitHub={"https://github.com/joeelmahallawy"}
              />
            </Center>
          </Center>
        </Center>
        <Center
          // justifyContent="flex-end"
          p={10}
          h="11.5vh"
          bg="gray.500"
          id="footer"
        >
          Copyright
        </Center>
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
