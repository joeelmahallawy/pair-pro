import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { bounceAnimation } from "../configs/themes";
import Fade from "react-reveal/Fade";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

const Bouncer = () => (
  <Flex id="bouncer" animation={bounceAnimation} justifyContent="center">
    <Box _hover={{ cursor: "pointer" }}>
      <Fade top>
        <LinkScroll to="how-it-works" smooth={true} duration={500}>
          <IoIosArrowDown size={40} />
        </LinkScroll>
      </Fade>
    </Box>
  </Flex>
);
export { Bouncer };
