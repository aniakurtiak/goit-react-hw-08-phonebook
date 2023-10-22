import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  textStyles: {
    nav: {
      fontSize: ['18px', '20px', '24px', '26px'],
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
