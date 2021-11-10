import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Box, Button, Center, Heading } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import Header from "../../components/pageComponents/header";
import { userState } from "../../states/recoil";

const UserAccount = () => {
  const { user } = useUser();
  const [data, setData] = useRecoilState(userState);
  useEffect(() => {
    setData(user);
  }, [user]);

  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  //   if (process.browser) {
  //     console.log(window.location.pathname);
  //   }

  return (
    <>
      <Header />
      <Center m="0 auto" bg="red" w="80vw">
        <Heading>hi</Heading>
      </Center>
    </>
  );
};
export default UserAccount;
export const getServerSideProps = withPageAuthRequired();
