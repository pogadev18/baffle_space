import Head from 'next/head';

import Hero from '@/root/components/landingPage/hero';
import HomeSlider from '@/root/components/homeSlider';

const Home = () => {
  return (
    <>
      <Head>
        <title>Baffle.space</title>
      </Head>

      <Hero />
      <HomeSlider />
    </>
  );
};

Home.landingPage = true;

export default Home;
