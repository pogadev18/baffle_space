import { Box } from '@chakra-ui/layout';
import { useMoralis } from 'react-moralis';
import { isMobile } from 'react-device-detect';
import Head from 'next/head';

import AlertComponent from '@/components/alert';
import Hero from '@/components/landingPage/hero';

import { AlertStatusValues } from '@/utils/interfaces/alertStatuses';
import CreateContestForm from '@/components/createContestForm';

const { Error, Info } = AlertStatusValues;

const Home = () => {
  const { isAuthenticated, authError } = useMoralis();

  return (
    <>
      <CreateContestForm />

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
