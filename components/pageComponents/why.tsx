import {
  Center,
  Heading,
  Box,
  Text,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { themes } from "../../configs/themes";
import LaptopPic from "../../attachments/laptop.jpeg";

const Why = () => {
  return (
    <Center p={10} justifyContent="space-around" w="100%">
      <Box w="30%">
        <Image h="100%" src={LaptopPic.src} />
      </Box>
      <Center textAlign="center" flexDir="column" w="50%" p={10}>
        <Heading {...themes.fonts.titles}>Why?</Heading>
        <Text fontFamily="Arial">
          Pair programming has many advantages – not only do you accomplish more
          when you're working with someone, but you also learn much better. A
          common pair programming pattern is to have a 'driver' and 'navigator'.
          The driver is the one who writes the code and the navigator reads over
          the code as the driver is writing it and guides the driver. We believe
          this common pattern helps shape you to become a better developer as it
          gets you exposed to new ideas and techniques when coding! Not only
          does it help you become a better developer, but it also helps you
          build that one project you've always wanted to build but didn't have
          the ability to alone!
        </Text>
      </Center>
    </Center>
  );
};
export default Why;
