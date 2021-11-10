import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Box, Button, Center, Flex, Heading, Image } from "@chakra-ui/react";
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

  //   console.log(id);

  //   if (process.browser) {
  //     console.log(window.location.pathname);
  //   }

  return (
    <>
      <Header />
      <Box m="0 auto" w="65vw" p={5}>
        <Flex bg="blue">
          <Center flexDir="column" bg="red">
            <Box w="70%" borderRadius="50%">
              {/* @ts-expect-error */}
              <Image w="100%" h="100%" borderRadius="50%" src={data?.picture} />
            </Box>
            <Heading fontFamily="Arial">
              {/* @ts-expect-error */}
              {data?.name ? data?.name : data?.nickname}
            </Heading>
          </Center>
          <UserSettings />
          {/* <FormValidate /> */}
        </Flex>
      </Box>
    </>
  );
};
export default UserAccount;
export const getServerSideProps = withPageAuthRequired();
