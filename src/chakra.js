import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  textStyles: {
    nav: {
      fontSize: ['18px', '24px'],
      fontWeight: 'normal',
      lineHeight: '110%',
      letterSpacing: '-1%',
      color: 'white',
    },
  },
  fonts: {
    body: 'Young Serif, serif',
    heading: 'Lobster Two, sans-serif',
  },
});

export default theme;
