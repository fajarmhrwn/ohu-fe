import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Heading',
    body: 'Body',
  },
  styles: {
    global: () => ({
      body: {
        bg: '#FFFCF2',
      },
    }),
  },
});

export default theme;
