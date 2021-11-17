import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import {
  Center,
  Spinner,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../components/pageComponents/header";
import getUserId from "../helpers/getUserId";

const Pairing = ({ user, responseData, emailData }) => {
  const [userExists, setUserExists] = useState(false);
  const [showSpinner, setshowSpinner] = useState(true);
  console.log(responseData);
  console.log("ohya heres some email data:", emailData.data.Email);
  console.log(user);
  useEffect(() => {
    if (!responseData.data) {
      fetch("https://pair-pro.vercel.app/api/mongo", {
        method: "POST",
        headers: {
          type: "queue",
        },
        body: JSON.stringify({
          userid: getUserId(user),
          email: emailData.data.Email,
        }),
      }).then(() => {
        setshowSpinner(false);
      });
    } else {
      setUserExists(true);
    }
  }, []);

  if (userExists) {
    return (
      <>
        <Header user={user} />
        <Center fontFamily="Arial" w="100vw" h="80vh">
          <Alert
            fontSize={["8px", "12px", "14px", "16px", "16px", "20px"]}
            height="22.5vh"
            status="error"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            w="35vw"
            borderRadius={10}
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Wait a minute!
            </AlertTitle>
            <AlertDescription fontWeight="500" maxWidth="lg">
              It seems that you've already been added to the queue, please wait
              patiently.
            </AlertDescription>
          </Alert>
        </Center>
      </>
    );
  }

  return (
    <>
      <Header user={user} />
      <Center fontFamily="Arial" w="100vw" h="80vh">
        {showSpinner ? (
          <Spinner w="70px" h="70px" />
        ) : (
          <>
            <Alert
              fontSize={["8px", "12px", "14px", "16px", "16px", "20px"]}
              height="22.5vh"
              status="success"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              w="35vw"
              borderRadius={10}
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                Congratulations!
              </AlertTitle>
              <AlertDescription fontWeight="500" maxWidth="lg">
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

    const emailRes = await fetch("https://pair-pro.vercel.app/api/mongo", {
      method: "GET",
      headers: {
        user: getUserId(data),
      },
    });
    const emailData = await emailRes.json();
    // TODO:
    const response = await fetch("https://pair-pro.vercel.app/api/mongo", {
      method: "GET",
      headers: {
        type: "queue",
        id: getUserId(data),
      },
    });
    const responseData = await response.json();

    return { props: { data, responseData, emailData } };
  },
});
