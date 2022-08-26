import { useState } from 'react';
import { Text, Flex, Box } from '@chakra-ui/react';
import { useSwiper } from 'swiper/react';

interface SwiperButtonProps {
  index: number;
  label: string;
  position: number;
  /* eslint-disable-next-line no-unused-vars */
  setPosition: (i: number) => void;
}

const SwiperButton = ({
  index,
  label,
  position,
  setPosition
}: SwiperButtonProps) => {
  const [hover, setHover] = useState(false);
  const swiper = useSwiper();

  const handleClick = (i: number) => {
    swiper.slideTo(i);
    setPosition(i);
  };

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => handleClick(index)}
      cursor="pointer"
    >
      <Text
        fontSize="sm"
        fontWeight={hover || position === index ? 'bold' : ''}
        position="relative"
      >
        {label}
      </Text>
      <Box
        h="4px"
        w="40%"
        bg="#37662F"
        borderRadius="13px"
        transition="200ms"
        transform={hover || position === index ? 'scaleX(1)' : 'scaleX(0)'}
        transformOrigin="center"
        mt="-3px"
      />
    </Flex>
  );
};

export default SwiperButton;
