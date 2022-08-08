import { useState } from 'react';
import PaginationIcon from '@components/leaderboards/PaginationIcon';
import { PageLayout } from 'src/layout';
import { Heading, Flex, Image, Show, Center } from '@chakra-ui/react';
import Card from '@components/leaderboards/Card';

import Image1 from '../assets/leaderboard_blue.svg'
import Image2 from '../assets/leaderboard_yellow.svg';

export const Leaderboards = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dummyData = [
    {
      nim: 'xxx22000',
      name: '? ? ? ? ?',
      score: 100
    },
    {
      nim: 'xxx22001',
      name: '? ? ? ? ?',
      score: 100
    },
    {
      nim: 'xxx22002',
      name: '? ? ? ? ?',
      score: 100
    },
    {
      nim: 'xxx22003',
      name: '? ? ? ? ?',
      score: 100
    },
    {
      nim: 'xxx22004',
      name: '? ? ? ? ?',
      score: 100
    },
    {
      nim: 'xxx22005',
      name: '? ? ? ? ?',
      score: 100
    },
    {
      nim: 'xxx22006',
      name: '? ? ? ? ?',
      score: 100
    },
    {
      nim: 'xxx22007',
      name: '? ? ? ? ?',
      score: 100
    },
    {
      nim: 'xxx22008',
      name: '? ? ? ? ?',
      score: 100
    },
    {
      nim: 'xxx22009',
      name: '? ? ? ? ?',
      score: 100
    }
  ]

  return (
    <PageLayout title='Leaderboard'>
      <Flex
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        px={5}
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
        <Flex flexDirection='row' justifyContent='space-evenly' w='100%'>
          <Show above='lg'>
            <Image
              src={Image2}
              alt='Nyemangatin2' 
              objectFit='contain'
              alignSelf='flex-end'
              mb={5}
              w='20%'
              h='20%'
            />
          </Show>
          <Flex flexDirection='column' gap={2} w='100%' alignContent='center' maxW='80ch'>
            {dummyData.map((item, idx) => {
              return (
                <Card key={item.nim} rank={idx+1} {...item} />
              )
            })}
          </Flex>
          <Show above='lg'>
            <Image
              src={Image1}
              alt='Nyemangatin1'
              objectFit='contain'
              alignSelf='flex-start'
              mt={5}
              w='20%'
              h='20%'
            />
          </Show>
        </Flex>
      </Flex>
      <Center mt={6} mb={5}>
        <PaginationIcon pageSize={500} parentPageSetter={setCurrentPage} />
      </Center>
    </PageLayout>
  );
};