import { Box, Link, useMediaQuery } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Map } from 'leaflet';
import { TourData } from '@pages/PageTour';
import { TourPopup } from './Popup';
import L from 'leaflet';

import MarkerIcon from '@assets/marker-icon.png';

export const TourMap = ({ data, setMap } : { data: TourData, setMap: (map: Map) => void | null }) => {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const icon = L.icon({ iconUrl: MarkerIcon });

  return (
    <Box h={isMobile[0] ? '260px' : '560px'} w={isMobile[0] ? '100%' : '92%'} m="auto">
      <MapContainer
        center={data.centerPosition}
        zoom={data.zoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
        ref={setMap}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.markers.map((marker) => (
          <Marker key={marker.title} icon={icon} position={marker.position}>
            <Popup>
              <TourPopup>
                {marker.title} <ExternalLinkIcon />
              </TourPopup>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
}
