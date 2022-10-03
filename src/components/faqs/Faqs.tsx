import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import styles from '@/root/components/landingPage/whitepaperSections/WhitepaperSections.module.scss';
import React from 'react';

const Faqs = () => {
  const openWhitelistDrawer = () => {
    const drawerIcon = document.getElementById('open-whitelist-icon');
    if (drawerIcon) drawerIcon.click();
  };

  return (
    <Box color="white">
      <Text fontWeight="900" fontSize="3xl" marginTop="0" marginBottom="15px">
        FAQ
      </Text>
      <Accordion allowMultiple>
        <AccordionItem background="black.900" borderRadius="5px" mb="5">
          <h2>
            <AccordionButton _expanded={{ bg: '#09ccdb', color: 'white' }}>
              <Box fontWeight="900" flex="1" textAlign="left">
                What is a raffle?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            A raffle is a type of contest in which you buy a ticket or more for chances to win a
            prize. After the tickets are sold, a drawing determines the winning ticket.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem background="black.900" borderRadius="5px" mb="5">
          <h2>
            <AccordionButton _expanded={{ bg: '#09ccdb', color: 'white' }}>
              <Box fontWeight="900" flex="1" textAlign="left">
                What is Baffle Space?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Baffle Space is the play to win and earn Gaming dApp based on the Polygon blockchain set
            to bridge the gap between the crypto space and the real world by offering tangible
            prizes in raffles for which tickets are purchased with cryptocurrency ($MATIC).{' '}
            <Link href="/whitepaper">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className={styles.link}>
                <strong style={{ textDecoration: 'underline' }}>Read More</strong>
              </a>
            </Link>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem background="black.900" borderRadius="5px" mb="5">
          <h2>
            <AccordionButton _expanded={{ bg: '#09ccdb', color: 'white' }}>
              <Box fontWeight="900" flex="1" textAlign="left">
                How do I earn?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Having your Baffle Space NFT as soon as they launch gives you the power to earn up to
            95ETH by the time they get sold out. You can join the whitelist{' '}
            <button type="button" onClick={openWhitelistDrawer}>
              <strong style={{ textDecoration: 'underline' }}>here</strong>
            </button>{' '}
            <br />
            <br /> After the Baffle Space Gaming dApp goes live, we will share 60% of the revenue
            with NFT owners.
            <br />
            <br />
            <Link href="/whitepaper#genesisNFT">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className={styles.link}>
                <strong style={{ textDecoration: 'underline' }}>Read More</strong>
              </a>
            </Link>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem background="black.900" borderRadius="5px">
          <h2>
            <AccordionButton _expanded={{ bg: '#09ccdb', color: 'white' }}>
              <Box fontWeight="900" flex="1" textAlign="left">
                What are dApps?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Decentralized applications (dApps) are digital applications or programs that exist and
            run on a blockchain or peer-to-peer (P2P) network of computers instead of a single
            computer. DApps (also called &ldquo;dapps&rdquo;) are outside the purview and control of
            a single authority and users only need a wallet address to interact with the dApp,
            keeping their personal information private. DApps can be developed for a variety of
            purposes including gaming, finance, and social media.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Faqs;
