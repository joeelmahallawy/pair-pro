import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Box, Center } from "@chakra-ui/react";
import React from "react";
import Header from "../components/pageComponents/header";
import TypeForm from "../components/userComponents/firstTimeLoginForm";

export default function InitLog(props) {
  console.log(props);
  return (
    <>
      <Center w="100vw" m="5% auto">
        {/* <TypeForm user={props.user} data={props.data} /> */}
      </Center>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const res = await fetch("https://pair-pro.vercel.app/api/stats", {
      headers: { Cookie: ctx.req.headers.cookie },
    });
    const data = await res.json();

    return { props: data };
  },
});
