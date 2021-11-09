import { ChakraProvider, theme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { ColorModeScript } from "@chakra-ui/react";
import { themes } from "../configs/themes";
import { UserProvider } from "@auth0/nextjs-auth0";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <ChakraProvider theme={{ ...theme, ...themes }}>
      <Component {...pageProps} />
    </ChakraProvider>
  </UserProvider>
);

export default MyApp;
