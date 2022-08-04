import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Magilio', 'sans-serif'`,
    body: `'Alegreya Sans Regular', 'sans-serif'`,
  },
  styles: {
    global: () => ({
      body: {
        bg: "#FFFCF2"
      }
    })
  },
});

export default theme;
