import { Box } from '@chakra-ui/react';
import {
  ImageOverlay,
  MapContainer,
  Popup,
  TileLayer,
  Marker
} from 'react-leaflet';
import L, { Map } from 'leaflet';

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
  const MapMarker = ({ id, position, name, coloredIcon }: MarkerData) => {
    const Icon = L.icon({
      iconUrl: coloredIcon,
      iconSize: [45, 45]
    });
    return (
      <Marker icon={Icon} position={position}>
        <Popup>
          <TourPopup id={id}>{name}</TourPopup>
        </Popup>
      </Marker>
    );
  };

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
          maxZoom={100}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={false}
          ref={setMap}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapImage />
          {data.markers.map((marker, index) => (
            <MapMarker {...marker} key={index} />
          ))}
        </MapContainer>
      </Box>
    </motion.div>
  );
};
