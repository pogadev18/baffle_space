import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  custom1110: '1110px',
  custom1100: '1100px',
};

export const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    gray: {
      100: '#F5f5f5',
      200: '#EEEEEE',
      300: '#4e4e4e',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    black: {
      900: '#1E1E1E',
      800: '#2B2B2B',
      700: '#5B5B5B',
      600: '#49515a',
      500: '#242424',
      100: '#000000',
    },
    yellow: {
      300: '#f0bc21',
      400: '#FFC000',
    },
    red: {
      400: '#BA3326',
    },
    green: {
      900: '#34a134',
    },
    pink: {
      900: '#ef21d9',
      800: '#bc25ab',
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ':focus': {
            outline: 'none',
            boxShadow: 'none',
          },
        },
      },
    },
  },
});
