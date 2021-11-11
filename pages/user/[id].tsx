import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import {
  Box,
  Button,
  Text,
  Center,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { useRecoilState, useRecoilStateLoadable, useRecoilValue } from "recoil";
import Header from "../../components/pageComponents/header";
import TypeForm from "../../components/userComponents/firstTimeLoginForm";
import FormValidate from "../../components/userComponents/userForm";
import UserSettings from "../../components/userComponents/userSettings";
import firstTimeUser from "../../helpers/firstTimeUser";
import getUserId from "../../helpers/getUserId";
import { userInfo, firstLogin } from "../../states/recoil";

const UserAccount = () => {
  const { user } = useUser();
  const [data, setData] = useRecoilStateLoadable(userInfo);

  //   const [data, setData] = useRecoilState(userInfo);
  const [firstLog, setfirstLog] = useRecoilState(firstLogin);

  useEffect(() => {
    firstTimeUser(user, setfirstLog, setData);
    if (firstLog && process.browser) {
      console.log("hi");
      window.location = "http://localhost:3000/settings";
    } else {
      console.log("NOT your first time logging in");
    }
    // if (process.browser) {
    //   console.log(window.location.href);
    // }
  }, [user]);

  return (
    <>
      <Header />
      <Flex bg="gray.900" m="0 auto" mt={10} borderRadius={10} w="80vw">
        <Center w="40%" flexDir="column">
          <Box w="82.5%" borderRadius="50%">
            {/* @ts-expect-error */}
            <Image w="100%" h="100%" borderRadius="50%" src={data?.picture} />
          </Box>
          <Text
            fontSize="200%"
            fontWeight="600"
            fontFamily="Arial"
            overflow="auto"
          >
            {/* @ts-expect-error */}
            {data?.sub?.startsWith("auth0")
              ? // @ts-expect-error
                data.nickname
              : //   @ts-expect-error
              data?.name
              ? //   @ts-expect-error
                data?.name
              : //   @ts-expect-error
                data?.nickname}
          </Text>
          <Text fontFamily="Arial" color="lightgray">
            • (CITY HERE)
          </Text>
        </Center>
        {/* TODO: */}
        <Center bg="black" borderRightRadius={10} w="60%" pt={10}>
          <UserSettings />
          {/* <TypeForm /> */}
        </Center>
        {/* <FormValidate /> */}
      </Flex>
    </>
  );
};
export default UserAccount;
export const getServerSideProps = withPageAuthRequired();
