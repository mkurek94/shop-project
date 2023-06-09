import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import '../../i18n';
import theme from "@/theme";
import createEmotionCache from "@/createEmotionCache";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { CartProvier } from "@/providers/CartProvider";
import { AccountProvier } from "@/providers/AccountProvider";

import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";

import "@/styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Golden Boards</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1D4CB0" />
      </Head>
      <ThemeProvider theme={theme}>
        <AccountProvier>
          <CartProvier>
            <Navbar />
            <Component {...pageProps} />
            <Footer/>
          </CartProvier>
        </AccountProvier>
      </ThemeProvider>
    </CacheProvider>
  );
}
