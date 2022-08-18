import { useState } from 'react';
import {
  Container,
  Flex,
  Button,
  Input,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverHeader,
  PopoverCloseButton
} from '@chakra-ui/react';
import { Search2Icon, QuestionIcon } from '@chakra-ui/icons';

const Search = () => {
  // TODO: implement search + fakultas?
  const [keyword, setKeyword] = useState('');

  return (
    <Container maxW="80ch" mb={8} px={0}>
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
            // onKeyUp={(e) => {
            // if (e.key === 'Enter' && keyword !== '') {
            // }
            // }}
            _hover={{ borderColor: '#FFA06F' }}
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
          <IconButton
            ml={2}
            icon={<Search2Icon />}
            type="submit"
            aria-label="Search button"
            _hover={{ backgroundColor: '#FFB08D' }}
          />
        </Flex>
        <Popover placement="bottom" closeOnBlur>
          <PopoverTrigger>
            <Button
              w={{ base: '100%', lg: 'inherit' }}
              bg="#FFA06F"
              color="white"
              leftIcon={<QuestionIcon />}
              _hover={{ backgroundColor: '#FFB08D' }}
            >
              Help
            </Button>
          </PopoverTrigger>
          <PopoverContent bg="#FFA06F" color="white">
            <PopoverHeader pt={3} fontFamily="Heading" fontSize="xl" border="0">
              Search Help
            </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody fontFamily="Body">
              <b>Halo!!</b>
              <br />
              Sulit menemukan teman atau dirimu? Yuk cari di sini!! Dengan
              search ini kamu bisa mencari data kamu atau temanmu berdasarkan{' '}
              <b>NIM</b> atau <b>Nama</b>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Container>
  );
};

export default Search;
