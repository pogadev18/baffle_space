import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
// import { isMobile } from 'react-device-detect';
// import detectEthereumProvider from '@metamask/detect-provider';

// import { METAMASK_APP_URL } from '@/root/constants';

const Header = dynamic(() => import('@/root/components/landingPage/header'));
const Footer = dynamic(() => import('@/root/components/landingPage/homeFooter'));

interface LandingPageLayoutProps {
  children: ReactNode;
}

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
  /*
      TODO: Business logic discussion

      - if the user enters on the web from a mobile device, he will be redirected to metamask app store / google play
        without having the possibility to navigate the website until metamask has been installed and enters on the
        website from the metamask app browser.

      - or, we leave the page as it is right now and we notify the user that he / she needs to install metamask to
        be able to login and participate to whitelist.
   */

  /*
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
  */

  return (
    <Flex className="LandingPageLayout" direction="column" align="center" m="0 auto" height="100vh">
      <Header />
      {children}
      <Footer />
    </Flex>
  );
};

export default LandingPageLayout;
