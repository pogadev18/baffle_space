import Head from 'next/head';

import Hero from '@/root/components/landingPage/hero';
import HomeFooter from '@/root/components/landingPage/homeFooter';

const Home = () => {
  return (
    <>
      <Head>
        <title>Baffle.space</title>
      </Head>

      <Hero />
      <HomeFooter />
    </>
  );
};

Home.landingPage = true;

export default Home;
