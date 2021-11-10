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
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import Header from "../../components/pageComponents/header";
import FormValidate from "../../components/userComponents/userForm";
import UserSettings from "../../components/userComponents/userSettings";
import { userState } from "../../states/recoil";

const UserAccount = () => {
  const { user } = useUser();
  const [data, setData] = useRecoilState(userState);
  useEffect(() => {
    setData(user);
  }, [user]);

  const router = useRouter();
  const { id } = router.query;

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
            {data?.name ? data?.name : data?.nickname}
          </Text>
          <Text fontFamily="Arial" color="lightgray">
            • (CITY HERE)
          </Text>
        </Center>
        {/* TODO: */}
        <Center bg="black" borderRightRadius={10} w="60%" pt={10}>
          <UserSettings />
        </Center>
        {/* <FormValidate /> */}
      </Flex>
    </>
  );
};
export default UserAccount;
export const getServerSideProps = withPageAuthRequired();
