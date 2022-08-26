import { Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Map } from 'leaflet';
import { TourMap } from '@components/map-tour/Map';
import { TourLegend } from '@components/map-tour/Legend';
import 'leaflet/dist/leaflet.css';
import { PageLayout } from 'src/layout';
import { LoadingOnly } from '@components/common/Loading';
import icons from '@assets/map-icons';

export interface MarkerData {
  title: string;
  logo?: string;
  icon: string;
  position: [number, number];
  linkTo?: string;
}

export interface TourData {
  centerPosition: [number, number];
  zoom: number;
  markers: MarkerData[];
}

const initTourData: TourData = {
  centerPosition: [0, 0],
  zoom: 0,
  markers: []
};

const DUMMY_DATA: TourData = {
  centerPosition: [1, 1],
  zoom: 17,
  markers: [
    {
      title: 'Keluarga Mahasiswa Islam (GAMAIS) ITB',
      position: [1.000272385338355, 1.0023759094549334],
      icon: icons.D6
    },
    {
      title: 'Keluarga Mahasiswa Katolik (KMK) ITB',
      position: [1.0001342189327023, 1.0020800408525956],
      icon: icons.D5
    },
    {
      title: 'Keluarga Mahasiswa Buddhis Dhammañano',
      position: [0.999828493673798, 1.0020639431851965],
      icon: icons.D2
    },
    {
      title: 'Keluarga Mahasiswa Hindu Vidya Dharma Putra Ganesha ITB (KMH)',
      position: [0.9995603135986887, 1.0019458936241101],
      icon: icons.D1
    },
    {
      title: 'Persekutuan Mahasiswa Kristen (PMK) ITB',
      position: [0.9997441388971708, 1.0017205262802833],
      icon: icons.D3
    },
    {
      title: 'Keluarga Mahasiswa Islam (Kawai) ITB Cirebon',
      position: [1.000082045769309, 1.0015810131626646],
      icon: icons.D4
    },{
      title: 'Lingkung Seni Sunda (LSS)',
      position: [1.0001522205014104,0.9996271133422853],
      icon: icons.D4
    },{
      title: 'Unit Kesenian Sumatera Utara (UKSU)',
      position: [1.0004311277287867,0.9994554519653321],
      icon: icons.D4
    },{
      title: 'Mahasiswa Bumi Sriwijaya (MUSI)',
      position: [1.0010039602069882,0.9997236728668214],
      icon: icons.D4
    },{
      title: 'Unit Budaya Lampung (UBALA)',
      position: [1.0003925098227755,0.9998524188995362],
      icon: icons.D4
    },{
      title: 'ITB Student Orchestra (ISO)',
      position: [1.0011584318404227,0.9995069503804646],
      icon: icons.D4
    },{
      title: 'Keluarga Paduan Angklung (KPA)',
      position: [1.0012120678310636,1.0002579689046343],
      icon: icons.D4
    },{
      title: 'Paduan Suara Mahasiswa (PSM)',
      position: [1.0009224334711395,1.0002901554128132],
      icon: icons.D4
    },{
      title: 'Unit Rebana ITB (URI)',
      position: [1.000961051411819,1.0000240802764895],
      icon: icons.D4
    },{
      title: 'Korean Culture Club ITB (KCC ITB)',
      position: [0.9999205129570251,1.0003674030303957],
      icon: icons.D4
    },{
      title: 'Unit Kesenian Sulawesi Selatan (UKSS)',
      position: [1.0002316018079913,1.0001957416534426],
      icon: icons.D4
    },{
      title: 'Unit Kebudayaan Irian (UKIR)',
      position: [0.9997274233105599,1.000635623931885],
      icon: icons.D4
    },{
      title: 'Unit Kebudayaan Banten-Debust',
      position: [0.9999634217658071,1.0007750988006594],
      icon: icons.D4
    },{
      title: 'Unit Kebudayaan Tionghoa (UKT)',
      position: [0.9998883313500634,1.0010647773742678],
      icon: icons.D4
    },{
      title: 'ITBJazz',
      position: [1.0001136025921293,1.00125789642334],
      icon: icons.D4
    },{
      title: 'Infinity',
      position: [1.000358182731179,1.001107692718506],
      icon: icons.D4
    },{
      title: 'Studi Teater Mahasiswa (STEMA)',
      position: [1.0003388738187253,1.0008180141448977],
      icon: icons.D4
    },{
      title: 'Unit Kebudayaan Jepang (UKJ)',
      position: [1.0002423290092135,1.0005068778991701],
      icon: icons.D4
    },{
      title: 'Unit Kebudayaan Melayu Riau (UKMR)',
      position: [1.0008258886788028,1.0005712509155276],
      icon: icons.D4
    },{
      title: 'Maha Gotra Ganesha (MGG)',
      position: [1.001061887055045,1.000560522079468],
      icon: icons.D4
    },{
      title: 'Unit Kebudayaan Aceh',
      position: [1.0011906134349167,1.0008287429809573],
      icon: icons.D4
    },{
      title: 'Perkumpulan Seni dan Tari Karawitan Jawa (PSTK)',
      position: [1.00093316067011,1.000860929489136],
      icon: icons.D4
    },{
      title: 'Gajah Ngomik',
      position: [1.0011584318404227,1.001107692718506],
      icon: icons.D4
    },{
      title: 'POCHU Genshiken ITB',
      position: [1.0008473430773417,1.0012042522430422],
      icon: icons.D4
    },{
      title: 'Apres! ITB',
      position: [1.0010833414520317,1.0013759136199953],
      icon: icons.D4
    },{
      title: 'Keluarga Mahasiswa Jambi (KMJ)',
      position: [1.000772252681839,1.0015153884887698],
      icon: icons.D4
    },{
      title: 'Unit Kesenian Minangkabau ITB',
      position: [1.0009867966644403,1.001633405685425],
      icon: icons.D4
    },{
      title: 'Loedroek',
      position: [1.000504072683839,1.001332998275757],
      icon: icons.D4
    }
  ]
};
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
