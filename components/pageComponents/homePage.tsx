import { Center, Box, Heading, Text, Button } from "@chakra-ui/react";

import React from "react";
import { themes } from "../../configs/themes";

const HomePage = () => {
  return (
    <Center
      h="80%"
      justifyContent="space-around"
      flexDir="column"
      p={[10, 10, 10, 10, 10, 20]}
    >
      <Box w={["55%", "55%", "66%", "75%", "85%"]}>
        <Heading
          {...themes.fonts.heading}
          fontFamily="Arial"
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
          Ever had a cool project idea but lack the manpower to execute it? We
          know how it feels to have such great ideas that are hard to execute
          alone. That's why we're introducing PairPro! The new match-making
          system that connects you with another developer with similar
          experience and is ready to collaborate to build great projects!
        </Text>
      </Box>

      <Button
        mt="5.5%"
        size="lg"
        fontSize="4xl"
        p={10}
        bg="orange.500"
        fontFamily="Arial"
        _hover={{ bg: "orange.600" }}
        _active={{ bg: "orange.700" }}
        _focus={{}}
      >
        Start pairing now!
      </Button>
    </Center>
  );
};
export default HomePage;
