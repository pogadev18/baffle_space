import { ChakraProvider } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";
import { NextPage } from "next";
import { ToastContainer } from "react-toastify";
import AppLayout from "@/layouts/appLayout";
import AuthGuard from "@/components/authGuard";
import { theme } from "@/theme/index";

import "reset-css";
import "react-toastify/dist/ReactToastify.css";

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean;
  specialLayout?: boolean;
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
        {Component.requireAuth ? (
          <AuthGuard>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </AuthGuard>
        ) : Component.specialLayout ? (
          <AuthGuard>
            <Component {...pageProps} />
          </AuthGuard>
        ) : (
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        )}
        <ToastContainer />
      </MoralisProvider>
    </ChakraProvider>
  );
}

export default MyApp;
