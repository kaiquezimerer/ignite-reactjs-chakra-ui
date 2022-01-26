import { extendTheme } from '@chakra-ui/react';

// Chakra UI - Theme
export const theme = extendTheme({
  colors: {
    black: {
      '800': '#000000',
      '500': '#1D1D1D',
      '100': '#47585B',
    },
    gray: {
      '800': '#999999',
      '500': '#DADADA',
      '100': 'rgba(153, 153, 153, 0.5)',
    },
    white: {
      '100': '#FFFFFF',
      '500': '#F5F8FA',
    },
    yellow: {
      '800': '#FFBA08',
      '500': 'rgba(255, 186, 8, 0.5)',
    }
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'white.500',
        color: 'black.100',
      },
      a: {
        cursor: 'pointer',
      }
    }
  }
});
