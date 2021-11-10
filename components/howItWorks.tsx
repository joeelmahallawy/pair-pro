import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import PairProgrammingPic from "../attachments/pairprogramming_pic.svg";
import { themes } from "../configs/themes";

const HowItWorks = () => {
  return (
    <Center p={10} flexDir="column">
      <Heading
        mb={20}
        fontFamily="Roboto"
        fontSize="4em"
        textDecor="underline"
        textUnderlineOffset="20%"
      >
        How it works
      </Heading>

      <Center
        // bg="gray.700"
        id="why-its-good"
        w="90%"
        justifyContent="space-between"
        p={10}
      >
        <Box w="70%" textAlign="center" p={5}>
          <Heading mb={3} fontSize="3em" fontFamily="Roboto">
            How does it work?
          </Heading>
          <Text fontFamily="Arial">
            It's very simple; click 'Start Pairing now' and you'll be added to a
            matchmaking queue. Once a developer with similar interests also
            joins the queue, you'll be matched and put in a chat room together.
            From there, you're able to host 1-on-1 zoom calls and speak about
            projects you're passionate about, and as they say– the rest is
            history!
          </Text>
        </Box>
        <Box w="50%">
          <Image src={PairProgrammingPic.src} />
        </Box>
      </Center>
    </Center>
  );
};
export default HowItWorks;

// <Center id="how-it-works" p={10} bg="green">
//   <Heading>hi</Heading>
// </Center>
