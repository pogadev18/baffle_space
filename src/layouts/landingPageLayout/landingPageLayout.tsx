import React, { ReactNode, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { isMobile } from 'react-device-detect';
import detectEthereumProvider from '@metamask/detect-provider';

import { METAMASK_APP_URL } from '@/root/constants';

const Header = dynamic(() => import('@/root/components/landingPage/header'));
const Footer = dynamic(() => import('@/root/components/landingPage/homeFooter'));

interface LandingPageLayoutProps {
  children: ReactNode;
}

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
  useEffect(() => {
    const providerCheck = async () => {
      try {
        const provider = await detectEthereumProvider();

        if (isMobile && !provider) {
          window.location.replace(METAMASK_APP_URL);
        }
      } catch (e) {
        throw new Error('please install metamask to properly use this application');
      }
    };

    providerCheck();
  }, []);

  return (
    <Flex className="LandingPageLayout" direction="column" align="center" m="0 auto" height="100vh">
      <Header />
      {children}
      <Footer />
    </Flex>
  );
};

export default LandingPageLayout;
