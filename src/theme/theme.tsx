import { extendTheme } from '@chakra-ui/react';
import { Button } from './button'; 

const theme = extendTheme({
  fonts: {
    heading: 'Heading',
    body: 'Body',
  },
  styles: {
    global: {
      body: {
        bg: '#FFFCF2'
      },
      '*': {
        '&::-webkit-scrollbar': {
          w: '2.5'
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#FFEBB0'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#FFA06E'
        }
      }
    }
  },
  components: {
    Button
  }
});

export default theme;
