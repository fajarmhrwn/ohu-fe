import { Container, Flex, Input, IconButton } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { Help } from '@components/leaderboards/Help';
import { TagList } from './Tag';

interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  keyword: string;
  handleSubmit: any;
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

const Search = ({
  onChange,
  keyword,
  handleSubmit,
  filter,
  setFilter
}: Props) => (
  <Container maxW="80ch" mb={4} px={0}>
    <Flex
      alignItems="center"
      gap={2}
      flexDirection={{ base: 'column', lg: 'row' }}
    >
      <Flex w="100%" alignItems="center" flexDirection="row">
        <Input
          type="search"
          placeholder="Search..."
          bg="white"
          borderWidth="2px"
          borderColor="#FFA06F"
          focusBorderColor="#FFA06F"
          onKeyUp={(e) => {
            if (e.key === 'Enter' && keyword !== '') {
              handleSubmit();
            }
          }}
          _hover={{ borderColor: '#FFA06F' }}
          value={keyword}
          onChange={onChange}
        />
        <IconButton
          ml={2}
          icon={<Search2Icon />}
          aria-label="Search button"
          onClick={handleSubmit}
          _hover={{ backgroundColor: '#FFB08D' }}
        />
      </Flex>
      <Help />
    </Flex>
    <TagList fakultas={filter} setFakultas={setFilter} />
  </Container>
);

export default Search;
