import { useState, useEffect } from 'react';
import Head from 'next/head';
import BigLogo from '@/root/components/landingPage/bigLogo';
import InfoTexts from '@/root/components/landingPage/infoTexts';
import { Text } from '@chakra-ui/react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

import { getOffset } from '@/root/utils/utilityFunctions';

// import HomeSlider from '@/root/components/homeSlider';
// import HomeWhaleSection from '@/root/components/HomeWhaleSection';
// import IncomeDistribution from '@/root/components/IncomeDistribution';

const Home = () => {
  const [goToTopVisible, setGoToTopVisible] = useState(false);

  const listenToScroll = () => {
    const heightToShowFrom = getOffset(document.querySelector('#logoWrapper'));
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > heightToShowFrom) {
      setGoToTopVisible(true);
    } else {
      setGoToTopVisible(false);
    }
  };

  useEffect(() => {
    // const screenWidth = window.screen.width;
    // const MOBILE_SCREEN_WIDTH = 767;

    // if (screenWidth <= MOBILE_SCREEN_WIDTH) {
    window.addEventListener('scroll', listenToScroll);
    // }

    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Baffle.space</title>
      </Head>
      <section id="#top" style={{ width: '100%' }}>
        <BigLogo />
        <InfoTexts />
      </section>
      {goToTopVisible && (
        <Text
          position="fixed"
          bottom="50px"
          right="15px"
          fontSize={{ base: '25px', md: ' 40px' }}
          color="#00B0CA"
          fontWeight="700"
          textDecoration="underline"
        >
          <a href="#top">
            <BsFillArrowUpCircleFill />
          </a>
        </Text>
      )}
    </>
  );
};

Home.landingPage = true;

export default Home;
