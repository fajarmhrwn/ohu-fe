import { Box, Center, Spinner, Text, theme, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap, Marker, useMapEvents } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

export interface MapData {
  centerPosition: [number, number];
  markers: {
    position: [number, number];
    linkTo: string;
  }[];
}

export const mapDataInitState: MapData = {
  centerPosition : [0,0],
  markers: []
}

function MapMarker({position, linkTo}: {position: [number,number], linkTo: string}) {
  const navigate = useNavigate()
  const map = useMapEvents({
    click() {
      navigate(linkTo)
    }
  })

  return <Marker position={position}/>
}

export default function MapTourMap({mapData, isLoading} : {mapData:MapData, isLoading: boolean}) {
  const isMobile = useMediaQuery('(max-width: 640px)')

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
