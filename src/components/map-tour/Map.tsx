import { Box, Link, Spinner, useMediaQuery } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Map } from 'leaflet';
import { TourData } from '@pages/PageTour';

export const TourMap = ({ data, setMap, isLoading } : { data: TourData, setMap: (map: Map) => void | null, isLoading: boolean }) => {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <Box h={isMobile[0] ? '260px' : '560px'} w={isMobile[0] ? '100%' : '92%'} m="auto">
      { isLoading ? (
        <Box
          h="100%"
          w="100%"
          bgColor="grey"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner height="10%" width="10%" color="white" fontWeight={800} />
        </Box>
      ) : (
        <MapContainer
          center={data.centerPosition}
          zoom={data.zoom}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={false}
          ref={setMap}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {data.markers.map((marker) => (
            <Marker position={marker.position}>
              <Popup>
                <Link href={marker.linkTo} isExternal>
                  Visit Site <ExternalLinkIcon />
                </Link>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </Box>
  );
}
