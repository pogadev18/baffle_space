import Head from 'next/head';
import BigLogo from '@/root/components/landingPage/bigLogo';
import InfoTexts from '@/root/components/landingPage/infoTexts';

// import HomeSlider from '@/root/components/homeSlider';
// import HomeWhaleSection from '@/root/components/HomeWhaleSection';
// import IncomeDistribution from '@/root/components/IncomeDistribution';

const Home = () => {
  return (
    <>
      <Head>
        <title>Baffle.space</title>
      </Head>
      <BigLogo />
      <InfoTexts />
    </>
  );
};

Home.landingPage = true;

export default Home;
