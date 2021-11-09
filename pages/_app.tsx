import { ChakraProvider, theme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { ColorModeScript } from "@chakra-ui/react";
import { themes } from "../configs/themes";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={{ ...theme, ...themes }}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
