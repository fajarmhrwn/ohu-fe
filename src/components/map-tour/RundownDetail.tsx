import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer
} from '@chakra-ui/react';

interface Props {
  nama: string;
  waktu: string;
}

export const RundownDetail = ({ detail }: { detail: Props[] }) => (
  <TableContainer>
    <Table variant="simple" colorScheme="orange">
      <Thead>
        <Tr>
          <Th fontSize="md">Mata Acara</Th>
          <Th fontSize="md">Mulai </Th>
          <Th fontSize="md">Selesai</Th>
        </Tr>
      </Thead>
      <Tbody>
        {detail.map((item) => {
          const splitted = item.waktu.split(',');
          const start = splitted[0];
          const end = splitted[1];
          return (
            <Tr>
              <Td fontSize="sm">{item.nama}</Td>
              <Td fontSize="sm">{start}</Td>
              <Td fontSize="sm">{end}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  </TableContainer>
);
