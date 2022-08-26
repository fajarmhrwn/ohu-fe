import { useState, useRef } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useInView, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactSVG from '@assets/react.svg';
import Genshiken from '@assets/unitrec/genshiken.jpg';
import PSM from '@assets/unitrec/psm.png';
import 'swiper/css';

import { TourPopup } from '@components/map-tour/Popup';
import { getTransition } from 'src/util/transition';
import SwiperButton from './_SwiperButton';

const slide = [
  {
    id: 1,
    img: ReactSVG,
    label: 'Unit A',
    isFull: true,
    imgFull: Genshiken
  },
  {
    id: 2,
    img: ReactSVG,
    label: 'Unit B',
    isFull: true,
    imgFull: PSM
  },
  {
    id: 3,
    img: ReactSVG,
    label: 'Unit C',
    isFull: false,
    imgFull: ReactSVG
  },
  {
    id: 4,
    img: ReactSVG,
    label: 'Unit D',
    isFull: false,
    imgFull: ReactSVG
  },
  {
    id: 5,
    img: ReactSVG,
    label: 'Unit E',
    isFull: false,
    imgFull: ReactSVG
  }
];

const Carousel = () => {
  const [position, setPosition] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Box pt={8} pb={6}>
      <Swiper slidesPerView={5} centeredSlides>
        {slide.map((s, index) => (
          <SwiperSlide key={s.id}>
            {({ isActive }) => {
              if (isActive) {
                setPosition(index);
              }
              return (
                <motion.div
                  {...getTransition('right', {
                    delay: index < 3 ? index * 0.35 : 0,
                    duration: 1
                  })}
                >
                  <TourPopup
                    isRec
                    img={s.img}
                    label={s.label}
                    isActive={isActive}
                    isInView={isInView}
                    isFull={s.isFull}
                    imgFull={s.imgFull}
                  />
                </motion.div>
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
            lg: 'flex'
          }}
          ref={ref}
        >
          {slide.map((s, index) => (
            <SwiperButton
              index={index}
              label={s.label}
              position={position}
              setPosition={setPosition}
              key={s.id}
            />
          ))}
        </Flex>
      </Swiper>
    </Box>
  );
};

export default Carousel;
