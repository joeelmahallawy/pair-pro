import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Box, Text, Center, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Header from "../../components/pageComponents/header";
import UserSettings from "../../components/userComponents/userSettings";

const UserAccount = ({ user }) => {
  return (
    <>
      <Header user={user} />
      <Flex bg="gray.900" m="0 auto" mt={10} borderRadius={10} w="80vw">
        <Center w="40%" flexDir="column">
          <Box w="82.5%" borderRadius="50%">
            <Image w="100%" h="100%" borderRadius="50%" src={user?.picture} />
          </Box>
          <Text
            fontSize="200%"
            fontWeight="600"
            fontFamily="Arial"
            overflow="auto"
          >
            {user?.sub?.startsWith("auth0")
              ? user.nickname
              : user?.name
              ? user?.name
              : user?.nickname}
          </Text>
          <Text fontFamily="Arial" color="lightgray">
            • (CITY HERE)
          </Text>
        </Center>
        {/* TODO: */}
        <Center bg="black" borderRightRadius={10} w="60%" pt={10}>
          <UserSettings user={user} />
        </Center>
      </Flex>
    </>
  );
};
export default UserAccount;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const res = await fetch("http://localhost:3000/api/stats", {
      headers: { Cookie: ctx.req.headers.cookie },
    });
    const user = await res.json();
    return { props: user };
  },
});
