import { Text, Container, keyframes, Box } from '@chakra-ui/react';
import { PageLayoutNoNavbar } from 'src/layout';
import { motion } from 'framer-motion';

const animationKeyframes = keyframes`
  0% { transform: scale(0.5) translateX(0) rotate(0); border-radius: 50%; }
  25% { transform: scale(2) translateX(-50px) rotate(-180deg); border-radius: 20%; }
  50% { transform: scale(2) translateX(0) rotate(0); border-radius: 20%; }
  75% { transform: scale(2) translateX(50px) rotate(180deg); border-radius: 20%; }
  100% { transform: scale(0.5) translateX(0) rotate(0); border-radius: 50%; }
`;

const animation = `${animationKeyframes} 3s ease-in-out infinite`;

export const Loading = () => {
  return (
    <PageLayoutNoNavbar title='Loading'>
      <Container display='flex' alignItems='center' justifyContent='center' minH='90vh' flexDirection='column'>
        <Box
          as={motion.div}
          animation={animation}
          padding="2"
          bg="#FFA06E"
          width="12"
          height="12"
          display="flex"
        />
        <Box
          display='flex'
          flexDirection='row'
          fontSize="3xl"
          fontFamily='Heading'
          mt={12}
        >
          {textAnimation("Lodin.....")}
        </Box>
      </Container>
    </PageLayoutNoNavbar>
  )
};

const textAnimation = (text: string) => {
  const splitted = text.split('');
  return (
    splitted.map((letter, index) => {
      return (
        <motion.div
          key={index}
          animate={{
            color: ['#000000', '#FFA06E', '#000000']
          }}
          transition={{
            duration: 2.5,
            delay: index * 0.15,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          {letter === '.' ? '\xa0.' : letter}
        </motion.div>
      )
    })
  )
}