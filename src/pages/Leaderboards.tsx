import { useState } from 'react';
import PaginationIcon from '@components/leaderboards/PaginationIcon';
import { PageLayout } from 'src/layout';
import { Heading, Flex, Image, Show, Center, transform, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Card from '@components/leaderboards/Card';

import Image1 from '../assets/leaderboard_blue.svg'
import Image2 from '../assets/leaderboard_yellow.svg';
import Search from '@components/leaderboards/Search';

const cardAnimation = {
  initialLeft: {
    opacity: 0,
    transform: 'translateX(-300px)'
  },
  initialRight: {
    opacity: 0,
    transform: 'translateX(300px)'
  },
  animate: {
    opacity: 1,
    transform: 'translateX(0px)'
  },
  exitLeft: {
    opacity: 0,
    transform: 'translateX(-300px)'
  },
  exitRight: {
    opacity: 0,
    transform: 'translateX(300px)'
  },
};

const nyemangatinAnimation = {
  initialTop: {
    opacity: 0, 
    transform: 'translateY(-50px)'
  },
  initialBottom: {
    opacity: 0, 
    transform: 'translateY(50px)'
  },
  view: {
    opacity: 1, 
    transform: 'translateY(0px)', 
    transition: {
      duration: 0.7, 
      delay: 0.35
    }
  }
}

const pageButtonAnimation = {
  initial: {
    opacity: 0,
    transform: 'translateY(50px)'
  },
  animate: {
    opacity: 1,
    transform: 'translateY(0px)',
    transition: {
      duration: 0.5,
      delay: 1.32,
      type: 'spring'
    }
  }
}

export const Leaderboards = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dummyData = [
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
    },
    {
      nim: 'xxx22010',
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
        <Heading py={6} fontSize={{ base: '4xl', lg: '6xl' }} textAlign='center'>
          Laerboad
        </Heading>
        <Search />
        <Flex flexDirection='row' justifyContent='space-evenly' w='100%'>
          <Show above='lg'>
            <Box
              objectFit='contain'
              alignSelf='flex-end'
              mb={5}
              w='20%'
              h='20%'
              maxW='50ch'
              maxH='50ch'
            >
              <motion.section
                variants={nyemangatinAnimation}
                initial='initialBottom'
                whileInView='view'
              >
                <Image
                  src={Image2}
                  alt='Nyemangatin2' 
                />
              </motion.section>
            </Box>
          </Show>
          <Flex flexDirection='column' gap={2} w='100%' alignContent='center' maxW='80ch'>
            {dummyData.map((item, idx) => {
              return (
                <motion.div
                  key={item.nim}
                  variants={cardAnimation}
                  initial={idx % 2 === 0 ? 'initialLeft' : 'initialRight'}
                  animate='animate'
                  exit={idx % 2 === 0 ? 'exitLeft' : 'exitRight'}
                  transition={{
                    duration: 0.35, 
                    delay: idx*0.12 
                  }}
                >
                  <Card key={item.nim} rank={idx+1} {...item} />
                </motion.div>
              )
            })}
          </Flex>
          <Show above='lg'>
            <Box
              objectFit='contain'
              alignSelf='flex-start'
              mb={5}
              w='20%'
              h='20%'
              maxW='50ch'
              maxH='50ch'
            >
              <motion.section
                variants={nyemangatinAnimation}
                initial='initialTop'
                whileInView='view'
              >
                <Image
                  src={Image1}
                  alt='Nyemangatin1'
                />
              </motion.section>
            </Box>
          </Show>
        </Flex>
        <Center mt={6} mb={5}>
          <motion.section
            variants={pageButtonAnimation}
            initial='initial'
            animate='animate'
          >
            <PaginationIcon pageSize={500} parentPageSetter={setCurrentPage} />
          </motion.section>
        </Center>
      </Flex>
    </PageLayout>
  );
};