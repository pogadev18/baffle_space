import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { MoralisProvider } from 'react-moralis';
import { NextPage } from 'next';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import AppLayout from '@/layouts/appLayout';
import LandingPageLayout from '@/layouts/landingPageLayout';
import AuthGuard from '@/components/authGuard';
import { theme } from '@/theme/index';
import { store } from '@/store/store';

import 'reset-css';
import 'react-toastify/dist/ReactToastify.css';

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean;
  specialLayout?: boolean;
  landingPage?: boolean;
};

type AppProps = {
  Component: NextApplicationPage;
  pageProps: any;
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
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
          ) : Component.landingPage ? (
            <LandingPageLayout>
              <Component {...pageProps} />
            </LandingPageLayout>
          ) : (
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          )}
          <ToastContainer />
        </MoralisProvider>
      </ChakraProvider>
    </Provider>
  );
};

export default MyApp;