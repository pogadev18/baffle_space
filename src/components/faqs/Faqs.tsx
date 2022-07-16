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
              <Box flex="1" textAlign="left">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem background="black.900" borderRadius="5px" mb="5">
          <h2>
            <AccordionButton _expanded={{ bg: 'yellow.400', color: 'black' }}>
              <Box flex="1" textAlign="left">
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem background="black.900" borderRadius="5px" mb="5">
          <h2>
            <AccordionButton _expanded={{ bg: 'yellow.400', color: 'black' }}>
              <Box flex="1" textAlign="left">
                Section 3 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem background="black.900" borderRadius="5px">
          <h2>
            <AccordionButton _expanded={{ bg: 'yellow.400', color: 'black' }}>
              <Box flex="1" textAlign="left">
                Section 4 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Faqs;
