import { signInAnonymously } from "firebase/auth";
import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

import { ModalsProvider } from "@mantine/modals";
import { ThemeProvider } from "@samuel-lewis/components";

import { firebase } from "~/api/firebase";
import { userConnection } from "~/api/firebase/firestore/user";
import { colorsOverride } from "~/components/colors";
import { Layout } from "~/components/Layout";
import { AddItemModal, ADD_ITEM_MODAL_KEY } from "~/components/modals";
import { RouterTransition } from "~/components/RouterTransition";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  useEffect(() => {
    signInAnonymously(firebase.auth).then((auth) =>
      userConnection.getOrCreateDoc(auth.user.uid, {
        name: "Anonymous",
      })
    );
  }, []);

  return (
    <>
      <Head>
        <title>Party Inventory</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ThemeProvider
        themeOverride={{
          colors: colorsOverride,
          white: "#ede4da",
          black: "#353540",
          primaryColor: "red",
        }}
      >
        <ModalsProvider
          modals={{ [ADD_ITEM_MODAL_KEY]: AddItemModal }}
          modalProps={{
            size: "xl",
            transition: "fade",
            centered: true,
            closeOnClickOutside: false,
            exitTransitionDuration: 200,
            overflow: "inside",
          }}
        >
          <Layout>
            <RouterTransition />
            <Component {...pageProps} />
          </Layout>
        </ModalsProvider>
      </ThemeProvider>
    </>
  );
}
