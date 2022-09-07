import Head from 'next/head';

import Hero from '@/root/components/landingPage/hero';
import HomeSlider from '@/root/components/homeSlider';
import HomeWhaleSection from '@/root/components/HomeWhaleSection';
import IncomeDistribution from '@/root/components/IncomeDistribution';

const Home = () => {
  return (
    <>
      <Head>
        <title>Baffle.space</title>
      </Head>

      <Hero />
      <HomeSlider />
      <HomeWhaleSection />
      <IncomeDistribution />
    </>
  );
};

Home.landingPage = true;

export default Home;
