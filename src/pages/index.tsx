import { Box } from '@chakra-ui/layout';
import { useMoralis } from 'react-moralis';
import { isMobile } from 'react-device-detect';
import Head from 'next/head';

import AlertComponent from '@/root/components/alert';
import Hero from '@/root/components/landingPage/hero';
import HomeFooter from '@/root/components/landingPage/homeFooter';

import { AlertStatusValues } from '@/root/utils/interfaces/alertStatuses';

const { Error, Info } = AlertStatusValues;

const Home = () => {
  const { isAuthenticated, authError } = useMoralis();

  return (
    <>
      <Head>
        <title>Baffle.space</title>
      </Head>
      {authError && (
        <AlertComponent
          status={Error}
          title="Something went wrong"
          description={authError.message}
        />
      )}
      <Hero />
      <HomeFooter />
      <Box>
        {!isAuthenticated && isMobile && (
          <AlertComponent
            status={Info}
            title="MetaMask mobile connection"
            description="We detected that you are using a mobile device. In order to connect with MetaMask, please download the 'MetaMask' app from GooglePlay or AppStore."
          />
        )}
      </Box>
    </>
  );
};

Home.landingPage = true;

export default Home;
