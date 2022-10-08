import { useState, useEffect } from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
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
        bg="#00B0CA"
        color="white"
        mt="-10"
        ml="-5"
        w="12"
      >
        {value}
      </SliderMark>
      <SliderTrack bg="#333333">
        <SliderFilledTrack bg="#00B0CA" />
      </SliderTrack>
      <SliderThumb boxSize={6}>
        <Box color="#00B0CA" />
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
      <Text
        textAlign="right"
        fontSize={{ base: '50px', sm: '50px' }}
        marginBottom="50px"
        color="white"
        fontWeight="700"
      >
        {calculatingEarnings ? (
          <Box
            marginLeft="auto"
            marginTop="10px"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            gap="15px"
          >
            <LoadingSpinner spinnerColor="#09ccdb" />
            <Text fontSize={{ base: '25px', sm: '50px' }}>calculating...</Text>
          </Box>
        ) : (
          `$${finalValue}`
        )}
      </Text>

      <Box marginBottom="50px">
        <SimulateSlider max={1000} value={chancesValue} setValue={setChancesValue} />
        <Text fontSize={{ base: '4vw', sm: '14px' }} fontWeight="400" color="white" marginTop="5px">
          number of sold tickets
        </Text>
      </Box>
      <Box>
        <SimulateSlider max={100} value={nftOwnersValue} setValue={setNftOwnersValue} />
        <Text fontSize={{ base: '4vw', sm: '14px' }} fontWeight="400" color="white" marginTop="5px">
          Number of NFT owners engaged in one game
        </Text>
      </Box>
    </>
  );
};

export default SimulateEarnings;
