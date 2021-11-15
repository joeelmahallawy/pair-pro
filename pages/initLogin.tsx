import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Box, Center } from "@chakra-ui/react";
import React from "react";
import Header from "../components/pageComponents/header";
import UserSettings from "../components/userComponents/userSettings";
import getUserId from "../helpers/getUserId";

export default function InitLog({ data, user }: any) {
  console.log("OHYA USER:", user);
  console.log("OHYA DATA:", data);

  return (
    <>
      <Center w="100vw" m="5% auto">
        <UserSettings />
      </Center>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const res = await fetch("https://pair-pro.vercel.app/api/stats", {
      headers: { Cookie: ctx.req.headers.cookie },
    });
    const user = await res.json();
    const response = await fetch("https://pair-pro.vercel.app/api/mongo", {
      method: "GET",
      headers: {
        user: getUserId(user),
      },
    });
    const data = await response.json();

    return { props: { user, data } };
  },
});
