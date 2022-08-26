import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer
} from '@chakra-ui/react';

export const RundownDetail = () => (
  <TableContainer>
    <Table variant="simple" colorScheme="orange">
      <Thead>
        <Tr>
          <Th fontSize="sm">Mata Acara</Th>
          <Th fontSize="sm">Mulai </Th>
          <Th fontSize="sm">Selesai</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Test</Td>
          <Td>10:00</Td>
          <Td>12:00</Td>
        </Tr>
        <Tr>
          <Td>Test</Td>
          <Td>10:00</Td>
          <Td>12:00</Td>
        </Tr>
      </Tbody>
    </Table>
  </TableContainer>
);
