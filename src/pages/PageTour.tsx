import { Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Map } from 'leaflet';
import { TourMap } from '@components/map-tour/Map';
import { TourLegend } from '@components/map-tour/Legend';
import 'leaflet/dist/leaflet.css';
import { PageLayout } from 'src/layout';
import { LoadingOnly } from '@components/common/Loading';
import icons from '@assets/map-icons';

export interface TourData {
  centerPosition: [number, number];
  zoom: number;
  markers: {
    title: string;
    logo?: string;
    icon: string;
    position: [number, number];
    linkTo?: string;
  }[];
}

const initTourData: TourData = {
  centerPosition: [0, 0],
  zoom: 0,
  markers: []
};

const DUMMY_DATA: TourData = { centerPosition: [1, 1], zoom: 17, 
  markers: [
    {
      title: 'Keluarga Mahasiswa Islam (GAMAIS) ITB',
      position: [1.000272385338355,1.0023759094549334],
      icon: icons.D6
    }, {
      title: 'Keluarga Mahasiswa Katolik (KMK) ITB',
      position: [1.0001342189327023,1.0020800408525956],
      icon: icons.D5
    }, {
      title: 'Keluarga Mahasiswa Buddhis Dhammañano',
      position: [0.999828493673798,1.0020639431851965],
      icon: icons.D2
    },
    {
      title: 'Keluarga Mahasiswa Hindu Vidya Dharma Putra Ganesha ITB (KMH)',
      position: [0.9995603135986887,1.0019458936241101],
      icon: icons.D1
    }, {
      title: 'Persekutuan Mahasiswa Kristen (PMK) ITB',
      position:[0.9997441388971708,1.0017205262802833],
      icon: icons.D3
    },
    {
      title: 'Keluarga Mahasiswa Islam (Kawai) ITB Cirebon',
      position: [1.000082045769309,1.0015810131626646],
      icon: icons.D4
    },
  ] };
// {
//   centerPosition: [-6.889871, 107.610327],
//   zoom: 17,
//   markers: [
//     {
//       title: 'Gerbang Utama',
//       logo: 'https://dti.itb.ac.id/wp-content/uploads/2020/11/logo_itb_1024_bw.png',
//       position: [-6.889871, 107.612327],
//       linkTo: '/'
//     },
//     {
//       title: 'Gerbang Kiri',
//       logo: 'https://dti.itb.ac.id/wp-content/uploads/2020/11/logo_itb_1024_bw.png',
//       position: [-6.88836480365328, 107.60846698935434],
//       linkTo: '/'
//     },
//     {
//       title: 'Gerbang Kanan',
//       logo: 'https://dti.itb.ac.id/wp-content/uploads/2020/11/logo_itb_1024_bw.png',
//       position: [-6.888641905321302, 107.6120546576714],
//       linkTo: '/'
//     }
//   ]
// };

export const Tour = () => {
  const [data, setData] = useState<TourData>(initTourData);
  const [map, setMap] = useState<Map | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setData(DUMMY_DATA);
      setIsLoading(false);
    }, 1000);
  }, [data]);

  return (
    <PageLayout title="Map Tour">
      <Heading py={6} fontSize={{ base: '4xl', lg: '6xl' }} textAlign="center">
        H ap our
      </Heading>
      {isLoading ? (
        <LoadingOnly />
      ) : (
        <>
          <TourMap data={data} setMap={setMap} />
          <TourLegend data={data} map={map} />
        </>
      )}
    </PageLayout>
  );
};
