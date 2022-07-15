import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  custom1110: '1110px',
};

export const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: `'Lato'`,
    body: `'Lato'`,
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
    },
    yellow: {
      300: '#f0bc21',
      400: '#FFC000',
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
