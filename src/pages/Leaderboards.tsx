import { useState } from 'react';
import PaginationIcon from '@components/leaderboards/PaginationIcon';
import { PageLayout } from 'src/layout';
import { Heading, Flex, Container, Image, Show, Center } from '@chakra-ui/react';
import Card from '@components/leaderboards/Card';

import Image1 from '../assets/leaderboard_blue.svg'
import Image2 from '../assets/leaderboard_yellow.svg';

export const Leaderboards = () => {
  const [currentPage,setCurrentPage] = useState(1);

  const dummyData = [
    {
      nim: 'xxx22000',
      name: 'Peserta OHU 1',
      score: 100
    },
    {
      nim: 'xxx22001',
      name: 'Peserta OHU 2',
      score: 100
    },
    {
      nim: 'xxx22002',
      name: 'Peserta OHU 32246567',
      score: 10000
    },
    {
      nim: 'xxx22003',
      name: 'Peserta OHU 4',
      score: 100
    },
    {
      nim: 'xxx22004',
      name: 'Peserta OHU 5',
      score: 100
    }
  ]

  return (
    <PageLayout>
      <Flex
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Heading
          py={6}
          fontSize='5xl'
          textAlign='center'
          mb={4}
        >
          Leaderboard
        </Heading>
        {/* <Search /> */}
        {/* <Flex flexDirection='row' justifyContent='space-between' w='100%'> */}
          {/* <Show above='lg'>
            <Image
              src={Image2}
              alt='Nyemangatin2' 
              objectFit='contain'
              mt={20} 
            />
          </Show> */}
          {/* <Flex flexDirection='column' gap={2} w='100%'>
            {dummyData.map((item, idx) => {
              return (
                <Card key={item.nim} rank={idx + 1} {...item} />
              )
            })}
          </Flex> */}
          {/* <Show above='lg'>
            <Image
              src={Image1}
              alt='Nyemangatin1'
              objectFit='contain'
              mb={40}   
            />
          </Show> */}
        {/* </Flex> */}
        <Center mt={6}>
          <PaginationIcon pageSize={500} parentPageSetter={setCurrentPage} />
        </Center>
      </Flex>
    </PageLayout>
  );
};