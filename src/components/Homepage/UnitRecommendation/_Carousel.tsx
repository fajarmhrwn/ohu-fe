import React, { useState, useRef } from 'react';
import { Box, Text, Flex, Container } from '@chakra-ui/react';
import { useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import SwiperButton from './_SwiperButton';
import Card from './_Card';

const slide = [
  {
    id: 1,
    label: 'Unit A',
  },
  {
    id: 2,
    label: 'Unit B',
  },
  {
    id: 3,
    label: 'Unit C',
  },
  {
    id: 4,
    label: 'Unit D',
  },
  {
    id: 5,
    label: 'Unit E',
  },
];

const Carousel = () => {
  const [position, setPosition] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Box pt="5em">
      <Swiper slidesPerView={5} centeredSlides={true}>
        {slide.map((s, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => {
              if (isActive) {
                setPosition(index);
              }
              return (
                <Card label={s.label} isActive={isActive} isInView={isInView} />
              );
            }}
          </SwiperSlide>
        ))}
        <Flex
          justifyContent="center"
          pt={14}
          pb={8}
          gap={20}
          display={{
            base: 'none',
            lg: 'flex',
          }}
          ref={ref}
        >
          {slide.map((s, index) => (
            <SwiperButton
              index={index}
              label={s.label}
              position={position}
              setPosition={setPosition}
              key={index}
            />
          ))}
        </Flex>
      </Swiper>
    </Box>
  );
};

export default Carousel;
