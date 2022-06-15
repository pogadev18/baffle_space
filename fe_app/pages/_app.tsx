import { ChakraProvider } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";
import { NextPage } from "next";

import AppLayout from "@/layouts/appLayout";
import AuthGuard from "@/components/authGuard";
import { theme } from "@/theme/index";

import "reset-css";

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean;
};

type AppProps = {
  Component: NextApplicationPage;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MoralisProvider
        appId={process.env.MORALIS_APP_ID!}
        serverUrl={process.env.MORALIS_SERVER_URL!}
      >
        <AppLayout>
          {Component.requireAuth ? (
            <AuthGuard>
              <Component {...pageProps} />
            </AuthGuard>
          ) : (
            <Component {...pageProps} />
          )}
        </AppLayout>
      </MoralisProvider>
    </ChakraProvider>
  );
}

export default MyApp;
