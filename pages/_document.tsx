import { ColorModeScript, layout } from "@chakra-ui/react";
import title from "next/head";
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { themes } from "../configs/themes";
// import { IoIosClock } from "react-icons/io";
// import config from "../config/configs";
// import apple from "/icons/favicon.ico";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            sizes="16x16"
            href="/icons/pairpro_transparent_4XV_icon.ico"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={themes.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
