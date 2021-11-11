import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Box, Center } from "@chakra-ui/react";
import React from "react";
import Header from "../components/pageComponents/header";
import TypeForm from "../components/userComponents/firstTimeLoginForm";

export default function InitLog(user) {
  return (
    <>
      <Box w="75vw" m="0 auto" h="80vh" bg="#13111c">
        <TypeForm user={user} />
      </Box>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const res = await fetch("http://localhost:3000/api/stats", {
      headers: { Cookie: ctx.req.headers.cookie },
    });
    const data = await res.json();

    return { props: data };
  },
});
