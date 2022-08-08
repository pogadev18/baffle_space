import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react';
import { MoralisProvider } from 'react-moralis';
import { NextPage } from 'next';
import Script from 'next/script';
import { ToastContainer } from 'react-toastify';
import dynamic from 'next/dynamic';

import * as ga from '@/root/lib/google-analytics';
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
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script strategy="afterInteractive" id="google-analytics-script">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
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
    </>
  );
};

export default MyApp;
