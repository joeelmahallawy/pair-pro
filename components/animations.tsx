import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { bounceAnimation } from "../configs/themes";
import Fade from "react-reveal/Fade";

const Bouncer = () => (
  <Flex id="bouncer" animation={bounceAnimation} justifyContent="center">
    <Box _hover={{ cursor: "pointer" }}>
      <Fade top big>
        <IoIosArrowDown size={40} />
      </Fade>
    </Box>
  </Flex>
);
export { Bouncer };
