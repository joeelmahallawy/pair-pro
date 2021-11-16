import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import {
  ModalOverlay,
  ModalContent,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Modal,
  Flex,
  Spinner,
  Alert,
  AlertIcon,
  Box,
  AlertDescription,
  AlertTitle,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/pageComponents/header";
import getUserId from "../helpers/getUserId";

const Pairing = (user) => {
  const [showSpinner, setshowSpinner] = useState(true);
  useEffect(() => {
    async () => {
      fetch("https://pair-pro.vercel.app/api/mongo", {
        method: "POST",
        headers: {
          type: "queue",
        },
        body: JSON.stringify({
          id: getUserId(user),
        }),
      }).then((res) => setshowSpinner(false));
      //
    };
    // setTimeout(() => {
    //   setshowSpinner(false);
    // }, 500);
  }, []);

  return (
    <>
      <Header user={user} />
      <Center fontFamily="Arial" w="100vw" h="80vh">
        {showSpinner ? (
          <Spinner w="70px" h="70px" />
        ) : (
          <>
            <Alert
              status="success"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="200px"
              w="35vw"
              borderRadius={10}
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                Congratulations!
              </AlertTitle>
              <AlertDescription maxWidth="sm">
                You've been added to the matchmaking queue! You will receive an
                email once you match with someone.
              </AlertDescription>
            </Alert>
          </>
        )}
      </Center>
    </>
  );
};
export default Pairing;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const res = await fetch("https://pair-pro.vercel.app/api/stats", {
      headers: { Cookie: ctx.req.headers.cookie },
    });
    const data = await res.json();

    return { props: data };
  },
});
