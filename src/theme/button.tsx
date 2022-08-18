import { ComponentStyleConfig, SystemStyleFunction } from '@chakra-ui/react';

const baseStyle: SystemStyleFunction = () => ({
  fontWeight: 'normal',
  borderRadius: '7px',
  bg: 'transparent',
  paddingY: '1em',
  transition: 'all 0.15s ease-in-out',
  _hover: {
    _disabled: {
      bg: 'initial'
    }
  }
});

const solid: SystemStyleFunction = () => ({
  color: 'white',
  bg: '#FFA06E',
  transition: 'all 0.15s ease-in-out',
  _hover: {
    color: 'white',
    bg: '#FFA06E'
  },
  _disabled: {
    bg: '#CFCFCF',
    _hover: {
      bg: '#CFCFCF'
    }
  }
});

export const Button: ComponentStyleConfig = {
  baseStyle,
  variants: {
    solid
  },
  defaultProps: {
    colorScheme: '#FFA06E',
    variant: 'solid'
  }
};
