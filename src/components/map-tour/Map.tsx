import { Box} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L, { Map } from 'leaflet';
import { TourData } from '@pages/PageTour';

import MarkerIcon from '@assets/marker-icon.png';
import { motion } from 'framer-motion';
import { getTransition } from 'src/util/transition';
import { TourPopup } from './Popup';

interface Props {
  data: TourData;
  // eslint-disable-next-line no-unused-vars
  setMap: (map: Map) => void | null;
}
<TileLayer/>
export const TourMap = ({ data, setMap }: Props) => {
  const icon = L.icon({ iconUrl: MarkerIcon });

  return (
    <motion.div {...getTransition('bottom', { delay: 0.1 })}>
      <Box
        h={['20em','30em']}
        w={['100%','92%']}
        m="auto"
      >
        <MapContainer
          center={data.centerPosition}
          zoom={data.zoom}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={false}
          ref={setMap}
          dragging={false}
        >
  
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
    </motion.div>
  );
};
