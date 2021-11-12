import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Center } from "@chakra-ui/react";
import React from "react";
import Header from "../components/pageComponents/header";

const Pairing = (user) => {
  console.log(user);
  return (
    <>
      <Header user={user} />
      <Center fontFamily="Arial" w="100vw" h="90vh">
        Hi
      </Center>
    </>
  );
};
export default Pairing;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const res = await fetch("http://localhost:3000/api/stats", {
      headers: { Cookie: ctx.req.headers.cookie },
    });
    const data = await res.json();

    return { props: data };
  },
});
