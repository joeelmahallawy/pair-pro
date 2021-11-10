import { Center, Link } from "@chakra-ui/layout";
import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";

const Socials = ({ linkedIn, gitHub }: any) => {
  return (
    <Center>
      <Link _focus={{ outline: "none" }} isExternal={true} href={linkedIn}>
        <Center
          _hover={{ bg: "lightgray", cursor: "pointer" }}
          ml={2}
          borderRadius="50%"
          bg="white"
          w="40px"
          h="40px"
        >
          <AiFillLinkedin color="#2542D3" size="30" />
        </Center>
      </Link>
      <Link
        _focus={{ outline: "none" }}
        isExternal={true}
        href={`https://github.com/${gitHub}`}
      >
        <Center
          _hover={{ bg: "lightgray", cursor: "pointer" }}
          ml={2}
          borderRadius="50%"
          bg="white"
          w="40px"
          h="40px"
        >
          <AiFillGithub color="black" size="30" />
        </Center>
      </Link>
    </Center>
  );
};

export default Socials;
