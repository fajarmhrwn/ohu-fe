import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text
} from '@chakra-ui/react';
import { RundownDetail } from './RundownDetail';

export const Rundown = () => (
  <Accordion allowToggle allowMultiple>
    <AccordionItem>
      <Text fontFamily="Subheading">
        <AccordionButton
          _hover={{ opacity: 0.7 }}
          _expanded={{ color: 'white', bg: '#FF7D4C' }}
        >
          <Box flex="1" textAlign="left" fontSize="xl">
            Test
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Text>
      <AccordionPanel pb={4}>
        <RundownDetail />
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);
