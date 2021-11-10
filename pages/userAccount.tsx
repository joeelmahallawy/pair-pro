import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Box, Button, Center } from "@chakra-ui/react";
import React, { useEffect } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import Header from "../components/header";
import { userState } from "../states/recoil";

const UserAccount = () => {
  const { user } = useUser();
  const [data, setData] = useRecoilState(userState);
  useEffect(() => {
    setData(user);
  }, [user]);

  console.log(data);
  return (
    <>
      <Header />
    </>
  );
};
export default UserAccount;
export const getServerSideProps = withPageAuthRequired();
