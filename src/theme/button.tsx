import { ComponentStyleConfig, SystemStyleFunction } from '@chakra-ui/react';;

const baseStyle: SystemStyleFunction = () => {
  return {
    fontWeight: 'normal',
    borderRadius: '7px',
    bg: 'transparent',
    paddingY: '1em',
    _hover: {
      _disabled: {
        bg: 'initial',
      },
    },
  };
}

const solid: SystemStyleFunction = () => {
  return {
    color: 'white',
    bg: '#FFA06E',
    _hover: {
      color: 'white',
      bg: '#FFA06E',
    },
    _disabled: {
      bg: '#CFCFCF',
      _hover: {
        bg: '#CFCFCF',
      },
    },
  };
}

export const Button: ComponentStyleConfig = {
  baseStyle,
  variants: {
    solid
  },
  defaultProps: {
    colorScheme: '#FFA06E',
    variant: 'solid'
  }
}