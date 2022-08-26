import { Box } from '@chakra-ui/react';
import {
  Circle,
  ImageOverlay,
  MapContainer,
  Popup,
  TileLayer
} from 'react-leaflet';
import { Map } from 'leaflet';
import { TourData, MarkerData } from '@pages/PageTour';
import MapOhuFull from '@assets/map_ohu_full.png';
import { motion } from 'framer-motion';
import { getTransition } from 'src/util/transition';
import { TourPopup } from './Popup';

interface Props {
  data: TourData;
  // eslint-disable-next-line no-unused-vars
  setMap: (map: Map) => void | null;
}
export const TourMap = ({ data, setMap }: Props) => {
  const MapMarker = ({ position, name }: MarkerData) => (
    <Circle
      center={position}
      radius={11}
      pathOptions={{ color: 'transparent', fillColor: 'transparent' }}
    >
      <Popup>
        <TourPopup id="c7043ac6-5291-4991-91e4-6851efa35022">{name}</TourPopup>
      </Popup>
    </Circle>
  );

  const MapImage = () => {
    const imageSize = 0.003; // 0.5*image real width
    const imageRatio = 45 / 35;
    const imageBounds: [[number, number], [number, number]] = [
      [
        data.centerPosition[1] - imageSize,
        data.centerPosition[0] + imageRatio * imageSize
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
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapImage />
          {data.markers.map((marker) => (
            <MapMarker {...marker} />
          ))}
        </MapContainer>
      </Box>
    </motion.div>
  );
};
