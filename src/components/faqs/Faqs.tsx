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
  // background="black.900" padding="15px"
  return (
    <Box color="white">
      <Text fontWeight="900" fontSize="3xl" marginTop="0" marginBottom="15px">
        FAQ
      </Text>
      <Accordion allowMultiple>
        <AccordionItem background="black.900" borderRadius="5px" mb="5">
          <h2>
            <AccordionButton _expanded={{ bg: 'yellow.400', color: 'black' }}>
              <Box fontWeight="900" flex="1" textAlign="left">
                What does raffle mean?
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
            <AccordionButton _expanded={{ bg: 'yellow.400', color: 'black' }}>
              <Box fontWeight="900" flex="1" textAlign="left">
                What is Baffle Space?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Baffle Space is the play to win and earn raffle dApp based on the Polygon blockchain set
            to bridge the gap between the crypto space and the real world by offering tangible
            prizes in raffles for which tickets are purchased with cryptocurrency ($MATIC). Read
            more <i>link la litepaper</i>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem background="black.900" borderRadius="5px" mb="5">
          <h2>
            <AccordionButton _expanded={{ bg: 'yellow.400', color: 'black' }}>
              <Box fontWeight="900" flex="1" textAlign="left">
                How can I earn?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Having your Baffle Space NFT as soon as they launch gives you the power to earn up to
            95ETH by the time they get sold out. You can join the whitelist here link care deschide
            whitelist drawer
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem background="black.900" borderRadius="5px">
          <h2>
            <AccordionButton _expanded={{ bg: 'yellow.400', color: 'black' }}>
              <Box fontWeight="900" flex="1" textAlign="left">
                What are dApps?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            After the Baffle Space Gaming dApp goes live, we will share 60% of the revenue with NFT
            owning players, so each raffle you participate in will guarantee you a piece of the pie
            on top of the chances to win the Dream Prize.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Faqs;
