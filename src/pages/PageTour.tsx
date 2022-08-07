import { Text, theme } from '@chakra-ui/react';
import { Legend } from '@components/common';
import { LegendData } from '@components/map-tour/Legend';
import MapTourMap, {MapData, mapDataInitState} from '@components/map-tour/Map';
import { useEffect, useState } from 'react';

const DUMMY_MAP: MapData = {
  centerPosition: [-6.889871, 107.610327],
  markers: [
    {
      position: [-6.889871, 107.612327],
      linkTo: '/',
    },
    {
      position: [-6.88836480365328, 107.60846698935434],
      linkTo: '/',
    },
    {
      position: [-6.888641905321302, 107.6120546576714],
      linkTo: '/',
    },
  ],
};

const DUMMY_LEGEND = [
  {
      text: 'Gerbang Utama',
      src: 'https://bit.ly/dan-abramov'
  },
  {
      text: 'Gerbang Utama',
      src: 'https://bit.ly/dan-abramov'
  },
  {
      text: 'Gerbang Utama',
      src: 'https://bit.ly/dan-abramov'
  },
  {
      text: 'Gerbang Utama',
      src: 'https://bit.ly/dan-abramov'
  },
  {
      text: 'Gerbang Utama',
      src: 'https://bit.ly/dan-abramov'
  },
  {
      text: 'Gerbang Utama',
      src: 'https://bit.ly/dan-abramov'
  },
  {
      text: 'Gerbang Utama',
      src: 'https://bit.ly/dan-abramov'
  },
  {
      text: 'Gerbang Utama',
      src: 'https://bit.ly/dan-abramov'
  },
  {
      text: 'Gerbang Utama',
      src: 'https://bit.ly/dan-abramov'
  },
  {
      text: 'Gerbang Utama',
      src: 'https://bit.ly/dan-abramov'
  },
]

export const Tour = () => {
  const [mapData,setMapData] = useState<MapData>(mapDataInitState)
  const [legendData, setLegendData] = useState<LegendData>([])
  const [isLoading,setIsLoading] =  useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setMapData(DUMMY_MAP)
      setIsLoading(false)
      setLegendData(DUMMY_LEGEND)
    },1000)
  })

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
      <MapTourMap mapData={mapData} isLoading={isLoading}/>
      <Legend data={legendData} isLoading={isLoading}/>
    </>
  );
};
