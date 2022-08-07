import { Box, Center, Spinner, Text, theme, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap, Marker, useMapEvents } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

interface MapData {
  centerPosition: [number, number];
  markers: {
    position: [number, number];
    linkTo: string;
  }[];
}

const DUMMY_DATA: MapData = {
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

function MapMarker({position, linkTo}: {position: [number,number], linkTo: string}) {
  const navigate = useNavigate()
  const map = useMapEvents({
    click() {
      navigate(linkTo)
    }
  })

  return <Marker position={position}/>
}

export default function MapTourMap() {
  const [isLoading, setIsLoading] = useState(true);
  const [mapData, setMapData] = useState(DUMMY_DATA);
  const isMobile = useMediaQuery('(max-width: 640px)')

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setMapData(DUMMY_DATA);
    }, 1000);
  }, [mapData]);

  return (
    <Box h={isMobile[0] ? '260px' : '560px'} w={isMobile[0] ? '100%' : '92%'} m="auto">
      {isLoading ? (
        <Box
          h="100%"
          w="100%"
          bgColor="grey"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner height="10%" width="10%" color='white' fontWeight={800}/>
        </Box>
      ) : (
        <MapContainer
          center={mapData.centerPosition}
          zoom={17}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {mapData.markers.map((item) => (
            <MapMarker {...item}/>
          ))}
        </MapContainer>
      )}
    </Box>
  );
}
