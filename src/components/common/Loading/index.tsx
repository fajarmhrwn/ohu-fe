import { Text, Container, keyframes, Box } from '@chakra-ui/react';
import { PageLayoutNoNavbar } from 'src/layout';
import { motion } from 'framer-motion';

const animationKeyframes = keyframes`
  0% { transform: scale(1) translateX(0) rotate(270deg); border-radius: 20%; }
  25% { transform: scale(2) translateX(-50px)  rotate(0); border-radius: 20%; }
  50% { transform: scale(2) translateX(0)  rotate(270); border-radius: 20%; }
  75% { transform: scale(2) translateX(50px)  rotate(270deg); border-radius: 20%; }
  100% { transform: scale(1) translateX(0)  rotate(-90deg); border-radius: 20%; }
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
        <Text fontSize="3xl" fontFamily='Heading' mt={12}>Lodin...</Text>
      </Container>
    </PageLayoutNoNavbar>
  )
};