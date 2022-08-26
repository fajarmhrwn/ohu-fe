import { useState, useRef, useEffect } from 'react';
import { getUnits } from 'src/service/unit';
import { Box, Flex } from '@chakra-ui/react';
import { useInView, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { TourPopup } from '@components/map-tour/Popup';
import { getTransition } from 'src/util/transition';
import SwiperButton from './_SwiperButton';

const Carousel = () => {
  const [position, setPosition] = useState(0);
  const [units, setUnits] = useState<any[]>([]);

  useEffect(() => {
    const getUnitRecommendation = async () => {
      const data = await getUnits('/units/recommendation');
      setUnits(data);
    };

    getUnitRecommendation();
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Box pt={8} pb={6}>
      <Swiper slidesPerView={5} centeredSlides>
        {units.map((unit, index) => (
          <SwiperSlide key={unit.ext_id}>
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
                    img={unit.logo}
                    label={unit.name}
                    isActive={isActive}
                    isInView={isInView}
                    isFull={unit.isFullImg}
                    imgFull={unit.fullImage}
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
          {units.map((unit, index) => (
            <SwiperButton
              index={index}
              label={unit.name}
              position={position}
              setPosition={setPosition}
              key={unit.ext_id}
            />
          ))}
        </Flex>
      </Swiper>
    </Box>
  );
};

export default Carousel;
