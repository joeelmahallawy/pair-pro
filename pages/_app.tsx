import { ChakraProvider, Spinner, theme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { ColorModeScript } from "@chakra-ui/react";
import { themes } from "../configs/themes";
import { UserProvider } from "@auth0/nextjs-auth0";
import { RecoilRoot } from "recoil";
import React, { Suspense } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <ChakraProvider theme={{ ...theme, ...themes }}>
      <RecoilRoot>
        <Suspense fallback="loading...">
          <Component {...pageProps} />
        </Suspense>
      </RecoilRoot>
    </ChakraProvider>
  </UserProvider>
);

export default MyApp;
