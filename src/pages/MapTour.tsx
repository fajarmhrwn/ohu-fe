import { Text, theme } from '@chakra-ui/react';
import MapTourMap from '@components/map-tour/MapTourMap';



export const Tour = () => {
  return (
    <>
      <Text
        fontFamily={theme.fonts.heading}
        m="0.5em"
        fontSize="2rem"
        textAlign="center"
      >
        OHU MAP TOUR
      </Text>
      <MapTourMap/>
    </>
  );
};
