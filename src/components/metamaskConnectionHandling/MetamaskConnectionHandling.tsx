import React, { useEffect, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { Spinner } from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';
import { useMoralis } from 'react-moralis';

import AlertComponent from '@/root/components/alert';
import { AlertStatusValues } from '@/root/utils/interfaces/alertStatuses';
import MetamaskHelpText from '@/root/components/landingPage/metamaskHelpText';

const MetamaskConnectionHandling = () => {
  const [metamaskAvailability, setMetamaskAvailability] = useState('pending');
  const { isAuthenticated } = useMoralis();

  useEffect(() => {
    const checkMetamaskAvailability = async () => {
      try {
        const provider = await detectEthereumProvider();

        if (provider) {
          setMetamaskAvailability('ok');
        }

        if (!provider) {
          setMetamaskAvailability('notFound');
        }
      } catch (error) {
        setMetamaskAvailability('error');
        throw new Error('No metamask provider available!');
      }
    };

    checkMetamaskAvailability();
  }, []);

  return (
    <section>
      {metamaskAvailability === 'pending' ? (
        <div style={{ position: 'absolute', left: '0', right: '0', padding: '15px', zIndex: '20' }}>
          <Spinner color="pink" />
        </div>
      ) : !isAuthenticated && metamaskAvailability === 'notFound' ? (
        <AlertComponent
          showIcon={false}
          status={AlertStatusValues.Info}
          title={isMobile ? 'MetaMask Access' : 'MetaMask Connection'}
        >
          <MetamaskHelpText />
        </AlertComponent>
      ) : null}
    </section>
  );
};

export default MetamaskConnectionHandling;
