import { Box } from '@chakra-ui/react';
import {
  ImageOverlay,
  MapContainer,
  Marker,
  TileLayer,
  useMapEvent
} from 'react-leaflet';
import L, { Map } from 'leaflet';
import { TourData } from '@pages/PageTour';
import MapOhuFull from '@assets/map_ohu_full.png';
import { motion } from 'framer-motion';
import { getTransition } from 'src/util/transition';

interface Props {
  data: TourData;
  // eslint-disable-next-line no-unused-vars
  setMap: (map: Map) => void | null;
}
export const TourMap = ({ data, setMap }: Props) => {

  const MapImage = () => {
    useMapEvent('click', () => {
      // console.log(`[${  ev.latlng.lat  },${  ev.latlng.lng  }]`);
    });
    const imageSize = 0.003; // 0.5*image real width
    const imageRatio = 45 / 35;
    const imageBounds: [[number, number], [number, number]] = [
      [
        data.centerPosition[0] - imageSize,
        data.centerPosition[1] + imageRatio * imageSize
      ],
      [
        data.centerPosition[0] + imageSize,
        data.centerPosition[1] - imageRatio * imageSize
      ]
    ];
    return <ImageOverlay bounds={imageBounds} url={MapOhuFull} />;
  };


  return (
    <motion.div {...getTransition('bottom', { delay: 0.1 })}>
      <Box h={['32em', '34em']} w={['100%', '92%']} m="auto">
        <MapContainer
          center={data.centerPosition}
          zoom={data.zoom}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={false}
          ref={setMap}
          dragging={false}
          zoomControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapImage/>
          {data.markers.map((marker) => (
            <Marker position={marker.position} icon={L.icon({iconUrl: marker.icon})} eventHandlers={{click: () => {
              // console.log(marker.title);
            }}}/>
          ))}
        </MapContainer>
      </Box>
    </motion.div>
  );
};
