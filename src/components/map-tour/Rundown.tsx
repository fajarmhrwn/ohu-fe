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

interface DetailProps {
  nama: string;
  waktu: string;
}

export const Rundown = ({
  nama,
  hari,
  start,
  end,
  detail
}: {
  nama: string;
  hari: string;
  start: string;
  end: string;
  detail: DetailProps[];
}) => {
  if (detail.length === 0) {
    return (
      <Text fontFamily="Body">
        <Box flex="1" textAlign="left" fontSize="xl">
          {nama}
          <br />
          {hari} ({start} - {end})
        </Box>
      </Text>
    );
  }
  return (
    <Accordion allowToggle allowMultiple>
      <AccordionItem>
        <Text fontFamily="Body">
          <AccordionButton
            _hover={{ opacity: 0.7 }}
            _expanded={{ color: 'white', bg: '#FF7D4C' }}
          >
            <Box flex="1" textAlign="left" fontSize="xl">
              {nama}
              <br />
              {hari} ({start} - {end})
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel pb={4}>
          <RundownDetail detail={detail} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
