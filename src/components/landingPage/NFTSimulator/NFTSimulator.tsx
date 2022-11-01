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
        <span
          style={{
            fontSize: '40px',
            color: 'grey',
          }}
        >
          $ETH
        </span>
      </Text>
      <Text
        marginBottom={{ base: '50px', md: '30px' }}
        fontSize={{ base: '40px' }}
        fontWeight="700"
      >
        {trackValue}
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
        <SliderMark display={{ base: 'none', md: 'block' }} value={0} {...labelStyles}>
          0
        </SliderMark>
        <SliderMark display={{ base: 'none', md: 'block' }} value={100} {...labelStyles}>
          100
        </SliderMark>
        <SliderMark display={{ base: 'none', md: 'block' }} value={500} {...labelStyles}>
          500
        </SliderMark>
        <SliderMark display={{ base: 'none', md: 'block' }} value={1000} {...labelStyles}>
          1000
        </SliderMark>
        <SliderMark display={{ base: 'none', md: 'block' }} value={2000} {...labelStyles}>
          2000
        </SliderMark>
        <SliderMark value={3000} {...labelStyles} display={{ base: 'none', md: 'block' }}>
          3000
        </SliderMark>
        <SliderMark value={4000} {...labelStyles} display={{ base: 'none', md: 'block' }}>
          4000
        </SliderMark>
        <SliderMark value={5000} {...labelStyles} display={{ base: 'none', md: 'block' }}>
          5000
        </SliderMark>
        <SliderMark value={6000} {...labelStyles} display={{ base: 'none', md: 'block' }}>
          6000
        </SliderMark>
        <SliderMark value={7000} {...labelStyles} display={{ base: 'none', md: 'block' }}>
          7000
        </SliderMark>
        <SliderMark value={8000} {...labelStyles} display={{ base: 'none', md: 'block' }}>
          8000
        </SliderMark>

        <SliderMark value={9500} {...labelStyles} display={{ base: 'none', md: 'block' }}>
          9500
        </SliderMark>
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
