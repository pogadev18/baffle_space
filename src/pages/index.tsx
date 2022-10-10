import Head from 'next/head';
import BigLogo from '@/root/components/landingPage/bigLogo';
import InfoTexts from '@/root/components/landingPage/infoTexts';
import { Text } from '@chakra-ui/react';

// import HomeSlider from '@/root/components/homeSlider';
// import HomeWhaleSection from '@/root/components/HomeWhaleSection';
// import IncomeDistribution from '@/root/components/IncomeDistribution';

const Home = () => {
  return (
    <>
      <Head>
        <title>Baffle.space</title>
      </Head>
      <section id="#top">
        <BigLogo />
        <InfoTexts />
      </section>
      <Text marginBottom="20px" color="#00B0CA" fontWeight="700" textDecoration="underline">
        <a href="#top">back to top</a>
      </Text>
    </>
  );
};

Home.landingPage = true;

export default Home;
