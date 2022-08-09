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
    color: 'red',
  },
  {
    id: 2,
    label: 'Unit B',
    color: 'blue',
  },
  {
    id: 3,
    label: 'Unit C',
    color: 'green',
  },
  {
    id: 4,
    label: 'Unit D',
    color: 'magenta',
  },
  {
    id: 5,
    label: 'Unit E',
    color: 'orchid',
  },
];

const Carousel = () => {
  const [position, setPosition] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Box pt="5em">
      <Swiper
        breakpoints={{
          1024: {
            allowTouchMove: false,
          },
        }}
        slidesPerView={5}
        centeredSlides={true}
      >
        {slide.map((s, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <Card
                label={s.label}
                isActive={isActive}
                isInView={isInView}
                color={s.color}
              />
            )}
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
              color={s.color}
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
