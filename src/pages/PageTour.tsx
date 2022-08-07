import { Text, theme } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Map } from 'leaflet';
import { TourMap } from '@components/map-tour/Map';
import { TourLegend } from '@components/map-tour/Legend';
import 'leaflet/dist/leaflet.css';

export interface TourData {
  centerPosition: [number, number];
  zoom: number;
  markers: {
    title: string;
    logo: string;
    position: [number, number];
    linkTo: string;
  }[];
}

const initTourData: TourData = {
  centerPosition : [0, 0],
  zoom: 0,
  markers: [],
};

const DUMMY_DATA: TourData = {
  centerPosition: [-6.889871, 107.610327],
  zoom: 17,
  markers: [
    {
      title: 'Gerbang Utama',
      logo: 'https://dti.itb.ac.id/wp-content/uploads/2020/11/logo_itb_1024_bw.png',
      position: [-6.889871, 107.612327],
      linkTo: '/',
    },
    {
      title: 'Gerbang Kiri',
      logo: 'https://dti.itb.ac.id/wp-content/uploads/2020/11/logo_itb_1024_bw.png',
      position: [-6.88836480365328, 107.60846698935434],
      linkTo: '/',
    },
    {
      title: 'Gerbang Kanan',
      logo: 'https://dti.itb.ac.id/wp-content/uploads/2020/11/logo_itb_1024_bw.png',
      position: [-6.888641905321302, 107.6120546576714],
      linkTo: '/',
    },
  ],
};

export const Tour = () => {
  const [data, setData] = useState<TourData>(initTourData);
  const [map, setMap]: [Map | null, (map: Map) => void | null] = useState<Map | null>(null);
  const [isLoading, setIsLoading] =  useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setData(DUMMY_DATA);
      setIsLoading(false);
    }, 1000)
  }, [data]);

  return (
    <>
      <Text
        fontFamily={theme.fonts.heading}
        m="0.5em"
        fontSize="2rem"
        textAlign="center"
        fontWeight={700}
      >
        OHU MAP TOUR
      </Text>
      <TourMap data={data} setMap={setMap} isLoading={isLoading}/>
      <TourLegend data={data} map={map} isLoading={isLoading}/>
    </>
  );
};
