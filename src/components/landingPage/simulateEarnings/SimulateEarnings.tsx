import { useState, useEffect } from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';
import LoadingSpinner from '@/root/components/LoadingSpinner';

const SimulateSlider = ({
  value,
  max,
  setValue,
}: {
  value: number;
  max: number;
  // eslint-disable-next-line no-unused-vars
  setValue: (val: number) => void;
}) => {
  return (
    <Slider
      max={max}
      value={value}
      defaultValue={0}
      aria-label="slider"
      onChange={(val) => setValue(val)}
    >
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
        <Box color="tomato" />
      </SliderThumb>
    </Slider>
  );
};

const SimulateEarnings = () => {
  const [chancesValue, setChancesValue] = useState(0);
  const [nftOwnersValue, setNftOwnersValue] = useState(0);
  const [finalValue, setFinalValue] = useState(0);
  const [calculatingEarnings, setCalculatingEarnings] = useState(false);

  useEffect(() => {
    setCalculatingEarnings(true);
    const simulateEarnings = setTimeout(() => {
      setFinalValue(chancesValue + nftOwnersValue);
      setCalculatingEarnings(false);
    }, 1000);

    return () => {
      clearTimeout(simulateEarnings);
      setCalculatingEarnings(false);
    };
  }, [chancesValue, nftOwnersValue]);

  return (
    <>
      <Heading as="h6" fontSize={{ base: '8vw', sm: '25px' }} fontWeight="900" color="#747070">
        simulate your earnings
      </Heading>
      <Text fontSize="50px" marginBottom="50px" color="white" fontWeight="900">
        {calculatingEarnings ? (
          <Box marginTop="10px" display="flex" alignItems="center" gap="15px">
            <LoadingSpinner spinnerColor="#09ccdb" />
            <Text fontSize="15px">calculating...</Text>
          </Box>
        ) : (
          `$${finalValue}`
        )}
      </Text>

      <Box marginBottom="100px">
        <SimulateSlider max={1000} value={chancesValue} setValue={setChancesValue} />
        <Text fontSize={{ base: '5vw', sm: '15px' }} fontWeight="900" color="white" marginTop="5px">
          number of sold chances
        </Text>
      </Box>
      <Box>
        <SimulateSlider max={100} value={nftOwnersValue} setValue={setNftOwnersValue} />
        <Text fontSize={{ base: '5vw', sm: '15px' }} fontWeight="900" color="white" marginTop="5px">
          number of nft owners
        </Text>
      </Box>
    </>
  );
};

export default SimulateEarnings;
