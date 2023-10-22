// 1. Import `extendTheme`
import { border, color, extendTheme } from '@chakra-ui/react';

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
    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
  },
  fonts: {
    body: 'Young Serif, serif',
    heading: 'Lobster Two, sans-serif',
  },
  //   input: {
  //     htmlSize: '35px',
  //     width: 'auto',
  //     variant: 'flushed',
  //     focusBorderColor: 'rgb(74, 59, 4)',
  //     color: 'rgb(194, 152, 0)',
  //     fontSize: '18px',
  //   },
});
export default theme;
