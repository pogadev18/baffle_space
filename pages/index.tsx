import { Box } from '@chakra-ui/layout';
import { useMoralis } from 'react-moralis';
import { isMobile } from 'react-device-detect';

import AlertComponent from '@/components/alert';
import SocialsForm from '@/components/landingPage/socialsForm';
import ParticipateToWhitelist from '@/components/landingPage/participateToWhitelist';
import Hero from '@/components/landingPage/hero';
import CreateContestForm from '@/components/createContestForm';

import { AlertStatusValues } from '@/utils/interfaces/alertStatuses';

const { Error, Info } = AlertStatusValues;

const Home = () => {
  const { isAuthenticated, authError } = useMoralis();

  return (
    <>
      <CreateContestForm />
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
        {isAuthenticated && (
          <>
            <SocialsForm isAuthenticated={isAuthenticated} />
            <ParticipateToWhitelist />
          </>
        )}
      </Box>
    </>
  );
};

Home.landingPage = true;

export default Home;
