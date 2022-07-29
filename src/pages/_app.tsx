import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { MoralisProvider } from 'react-moralis';
import { NextPage } from 'next';
import { ToastContainer } from 'react-toastify';
import dynamic from 'next/dynamic';

import { theme } from '@/root/theme';

import 'reset-css';
import 'react-toastify/dist/ReactToastify.css';

const AppLayout = dynamic(() => import('@/root/layouts/appLayout'));
const LandingPageLayout = dynamic(() => import('@/root/layouts/landingPageLayout'));
const AuthGuard = dynamic(() => import('@/root/components/authGuard'));

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
  );
};

export default MyApp;
