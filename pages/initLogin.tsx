import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Box, Center } from "@chakra-ui/react";
import React from "react";
import Header from "../components/pageComponents/header";
import TypeForm from "../components/userComponents/firstTimeLoginForm";
import FormValidate from "../components/userComponents/userForm";

export default function InitLog() {
  return (
    <>
      {/* <Header user={user} /> */}

      <Box w="75vw" m="0 auto" h="100vh" bg="#13111c">
        <TypeForm />
      </Box>
    </>
  );
}

// export const getServerSideProps = withPageAuthRequired({
//   async getServerSideProps(ctx) {
//     const res = await fetch("http://localhost:3000/api/stats", {
//       headers: { Cookie: ctx.req.headers.cookie },
//     });
//     const data = await res.json();

//     return { props: data };
//   },
// });
