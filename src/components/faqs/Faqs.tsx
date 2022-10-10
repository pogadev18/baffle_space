import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from '@chakra-ui/react';

const Faqs = () => {
  // const openWhitelistDrawer = () => {
  //   const drawerIcon = document.getElementById('open-whitelist-icon');
  //   if (drawerIcon) drawerIcon.click();
  // };

  return (
    <Box color="white">
      <Text color="#00B0CA" fontWeight="900" fontSize="3xl" marginTop="0" marginBottom="15px">
        FAQ
      </Text>
      <Accordion allowMultiple>
        <AccordionItem background="black.900" borderRadius="5px" mb="5">
          <h2>
            <AccordionButton _expanded={{ bg: '#09ccdb', color: 'black' }}>
              <Box fontWeight="700" flex="1" textAlign="left">
                What is Baffle Space?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Baffle Space is the play to win and earn Gaming dApp based on the Polygon blockchain to
            bridge the gap between the crypto space and the real world by offering tangible prizes
            and crypto in hybrid multi-layered drawing lotteries for which tickets are purchased
            with cryptocurrency ($MATIC).
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem background="black.900" borderRadius="5px">
          <h2>
            <AccordionButton _expanded={{ bg: '#09ccdb', color: 'black' }}>
              <Box fontWeight="700" flex="1" textAlign="left">
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
