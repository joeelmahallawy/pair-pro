import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Box, Text, Center, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Header from "../../components/pageComponents/header";
import UserSettings from "../../components/userComponents/userSettings";
import getUserId from "../../helpers/getUserId";

const UserAccount = ({ user, data }: any) => {
  console.log("from suer account, user", user);
  console.log("from suer account,data", data);
  return (
    <>
      <Header user={user} data={data} />
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
          <Text fontSize="lg" fontFamily="Arial" color="lightgray">
            {data && <>• {data["Where are you based?"]}</>}
          </Text>
        </Center>
        {/* TODO: */}
        <Center bg="black" borderRightRadius={10} w="60%" pt={10}>
          {data && user && <UserSettings data={data} user={user} />}
        </Center>
      </Flex>
    </>
  );
};
export default UserAccount;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const res = await fetch("https://pair-pro.vercel.app/api/stats", {
      headers: { Cookie: ctx.req.headers.cookie },
    });
    const user = await res.json();
    //TODO:
    const response = await fetch("https://pair-pro.vercel.app/api/mongo", {
      headers: {
        user: getUserId(user),
      },
    });
    const data = await response.json();
    return { props: data };
  },
});
