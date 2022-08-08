import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/root/components/landingPage/header'));
const Footer = dynamic(() => import('@/root/components/landingPage/homeFooter'));

interface LandingPageLayoutProps {
  children: ReactNode;
}

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
  return (
    <Flex className="LandingPageLayout" direction="column" align="center" m="0 auto" height="100vh">
      <Header />
      {children}
      <Footer />
    </Flex>
  );
};

export default LandingPageLayout;
