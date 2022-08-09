import { ChakraProvider, Box, Text, Flex, theme } from '@chakra-ui/react';
 import { ColorModeSwitcher } from './ColorModeSwitcher';
 import Search from './components/Search';

 function App() {
   return (
     <ChakraProvider theme={theme}>
       <Box textAlign="center" fontSize="xl">
         <Flex
           p={5}
           justifyContent={{ base: 'center', sm: 'space-between' }}
           alignItems="center"
           flexWrap="wrap"
         >
           <Text mb={{ base: 4, sm: 0 }} fontSize="3xl" fontWeight="bold">
             Search-Leaderboard
           </Text>
           <Search />
           <ColorModeSwitcher />
         </Flex>
       </Box>
     </ChakraProvider>
   );
 }

 export default App;