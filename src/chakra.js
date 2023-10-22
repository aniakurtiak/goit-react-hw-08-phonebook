// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';

// 2. Define the new text styles
const theme = extendTheme({
  textStyles: {
    nav: {
      // you can also use responsive styles
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
