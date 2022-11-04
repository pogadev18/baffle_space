import { useState } from 'react';
import {
  Box,
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
} from '@chakra-ui/react';

const sliderMarks = [
  '0',
  '100',
  '500',
  '1000',
  '2000',
  '3000',
  '4000',
  '5000',
  '6000',
  '7000',
  '8000',
  '9500',
];

const NftSimulator = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [trackValue, setTrackValue] = useState(0);

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  };

  return (
    <Box pt={6} pb={2}>
      <Text fontSize={{ base: '70px', md: '125px' }} fontWeight="700">
        {sliderValue.toFixed(2)}
        <Box fontSize="40px" color="grey" display={{ base: 'block', md: 'inline-block' }}>
          $ETH earned
        </Box>
      </Text>
      <Text
        marginBottom={{ base: '50px', md: '30px' }}
        fontSize={{ base: '40px' }}
        fontWeight="700"
      >
        NFTs sold: {trackValue}
      </Text>
      <Slider
        color="primary"
        max={9500}
        defaultValue={0}
        onChange={(val) => {
          setSliderValue(val * 0.01);
          setTrackValue(val);
        }}
      >
        {sliderMarks.map((markValue) => (
          <SliderMark
            key={markValue}
            display={{ base: 'none', md: 'block' }}
            {...labelStyles}
            value={Number(markValue)}
          >
            {markValue}
          </SliderMark>
        ))}

        <SliderMark
          value={trackValue}
          textAlign="center"
          bg="#00B0CA"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        >
          {trackValue}
        </SliderMark>
        <SliderTrack bg="#333333">
          <SliderFilledTrack bg="#00B0CA" />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};

export default NftSimulator;
