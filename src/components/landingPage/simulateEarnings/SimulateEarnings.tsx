import { useState } from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { MdGraphicEq } from 'react-icons/md';

const SimulateSlider = ({
  value,
  setValue,
}: {
  value: number;
  // eslint-disable-next-line no-unused-vars
  setValue: (val: number) => void;
}) => {
  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  };

  return (
    <Slider value={value} defaultValue={0} aria-label="slider" onChange={(val) => setValue(val)}>
      <SliderMark value={25} {...labelStyles} color="white">
        25%
      </SliderMark>
      <SliderMark value={50} {...labelStyles} color="white">
        50%
      </SliderMark>
      <SliderMark value={75} {...labelStyles} color="white">
        75%
      </SliderMark>
      <SliderMark
        value={value}
        textAlign="center"
        bg="blue.500"
        color="white"
        mt="-10"
        ml="-5"
        w="12"
      >
        {value}
      </SliderMark>
      <SliderTrack bg="red.100">
        <SliderFilledTrack bg="tomato" />
      </SliderTrack>
      <SliderThumb boxSize={6}>
        <Box color="tomato" as={MdGraphicEq} />
      </SliderThumb>
    </Slider>
  );
};

const SimulateEarnings = () => {
  const [chancesValue, setChancesValue] = useState(0);
  const [nftOwnersValue, setNftOwnersValue] = useState(0);
  const [finalValue, setFinalValue] = useState(0);

  const simulateMyEarnings = () => setFinalValue(chancesValue + nftOwnersValue);

  return (
    <>
      <Heading
        as="h6"
        fontSize={{ base: '8vw', sm: '25px' }}
        fontWeight="900"
        color="#747070"
        marginBottom="50px"
      >
        simulate your earn
      </Heading>
      <Text fontSize="50px" marginY="50px" color="white" fontWeight="900">
        ${finalValue}
      </Text>

      <Box marginBottom="100px">
        <SimulateSlider value={chancesValue} setValue={setChancesValue} />
        <Text
          fontSize={{ base: '5vw', sm: '15px' }}
          fontWeight="900"
          color="white"
          marginTop="25px"
        >
          number of sold chances
        </Text>
      </Box>
      <Box>
        <SimulateSlider value={nftOwnersValue} setValue={setNftOwnersValue} />
        <Text
          fontSize={{ base: '5vw', sm: '15px' }}
          fontWeight="900"
          color="white"
          marginTop="25px"
        >
          number of nft owners
        </Text>
      </Box>
      <Button
        marginTop="30px"
        rounded="20px"
        variant="solid"
        size={{ base: 'md', lg: 'lg' }}
        px={6}
        width={{ base: '100%', md: '260px' }}
        backgroundColor="#09ccdb"
        color="white"
        onClick={simulateMyEarnings}
        textTransform="uppercase"
        _hover={{
          backgroundColor: 'white',
          color: '#09ccdb',
        }}
      >
        calculate earnings
      </Button>
    </>
  );
};

export default SimulateEarnings;
