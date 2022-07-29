import Head from 'next/head';

import Hero from '@/root/components/landingPage/hero';

const Home = () => {
  return (
    <>
      <Head>
        <title>Baffle.space</title>
      </Head>

      <Hero />
    </>
  );
};

Home.landingPage = true;

export default Home;
