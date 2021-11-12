import { ChakraProvider, Spinner, theme } from "@chakra-ui/react";
import App, { AppProps } from "next/app";
import { ColorModeScript } from "@chakra-ui/react";
import { themes } from "../configs/themes";
import { UserProvider } from "@auth0/nextjs-auth0";
import { RecoilRoot } from "recoil";
import ReactGA from "react-ga";
import { DefaultSeo } from "next-seo";
import { createSEOConfig } from "../utils/seoMeta";
import React from "react";

class MyApp extends App {
  async componentDidMount() {
    if (process.env.NODE_ENV === "production") {
      // ReactGA.initialize("UA-203142465-1");
      this.logPageView();
    }
  }

  componentDidUpdate() {
    this.logPageView();
  }

  logPageView() {
    const { router } = this.props;

    if (process.env.NODE_ENV === "production") {
      ReactGA.pageview(router.asPath);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <UserProvider>
          <ChakraProvider theme={theme}>
            <DefaultSeo {...createSEOConfig()} />

            <Component {...pageProps} />
          </ChakraProvider>
        </UserProvider>
      </>
    );
  }
}

export default MyApp;
