/* eslint-disable */
// errornya: react/destructuring-assignment. mager benerin wkwkwk
import { useState } from 'react';
import { Stack, Box } from '@chakra-ui/react';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';

interface PaginationIconProps {
  pageSize: number;
  parentPageSetter: Function;
}

interface PageProps {
  page: number;
}

const PaginationIcon = (props: PaginationIconProps) => {
  const { pageSize } = props;
  const [currentPage, setCurrentPage] = useState(1);

  function changePage(destination: number) {
    props.parentPageSetter(destination);
    setCurrentPage(destination);
  }

  const ButtonIcon = ({
    icon,
    pageChange
  }: {
    icon: React.ReactNode;
    pageChange: React.MouseEventHandler;
  }) => (
    <Box
      borderRadius="10px"
      background="#FFA06F"
      onClick={pageChange}
      w={10}
      h={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      cursor="pointer"
      transition="all 0.15s ease-in-out"
      _hover={{ background: '#FFB08D' }}
    >
      {icon}
    </Box>
  );

  const ExtremeIcon = ({
    icon,
    pageChange
  }: {
    icon: React.ReactNode;
    pageChange: React.MouseEventHandler;
  }) => (
    <Box
      borderRadius="10px"
      background="transparent"
      onClick={pageChange}
      color="black"
      w={10}
      h={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      transition="all 0.15s ease-in-out"
      _hover={{ bg: '#FFA06F', color: '#FFFFFF' }}
    >
      {icon}
    </Box>
  );

  const PageButton = (props: PageProps) => (
    <Box
      borderRadius="10px"
      background={props.page === currentPage ? '#FFA06F' : 'transparent'}
      onClick={() =>
        props.page !== currentPage ? changePage(props.page) : null
      }
      color={props.page === currentPage ? '#FFFFFF' : '#000000'}
      fontSize="xl"
      w={10}
      h={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      transition="all 0.15s ease-in-out"
      _hover={{ bg: '#FFA06F', color: '#FFFFFF' }}
    >
      {props.page}
    </Box>
  );

  const Buttons = () => {
    const buttonsToRender: number[] = [];

    let firstDisplayedPage = Math.max(
      1,
      Math.min(currentPage - 2, pageSize - 5)
    );
    if (firstDisplayedPage === 2) firstDisplayedPage--;
    const displayFirst: boolean = firstDisplayedPage > 1 && pageSize > 7;
    let displayLast: boolean = false;
    let count = displayFirst ? 1 : 0;
    for (let i = firstDisplayedPage; i <= pageSize; i++) {
      if (count === 6 && i !== pageSize) {
        displayLast = true;
        break;
      }
      buttonsToRender.push(i);
      count++;
    }

    return (
      <Stack
        direction="row"
        spacing="1"
        fontFamily="Body"
        justify="center"
        userSelect="none"
        w={{ base: '70%', lg: 'fit-content' }}
      >
        <ButtonIcon
          icon={<ChevronLeftIcon w={6} h={6} />}
          pageChange={() =>
            changePage(currentPage - 1 < 1 ? 1 : currentPage - 1)
          }
        />
        {displayFirst ? (
          <ExtremeIcon icon="..." pageChange={() => changePage(1)} />
        ) : null}
        {buttonsToRender.map((pageNumber) => (
          <PageButton key={pageNumber} page={pageNumber} />
        ))}
        {displayLast ? (
          <ExtremeIcon icon="..." pageChange={() => changePage(pageSize)} />
        ) : null}
        <ButtonIcon
          icon={<ChevronRightIcon w={6} h={6} />}
          pageChange={() =>
            changePage(currentPage + 1 > pageSize ? pageSize : currentPage + 1)
          }
        />
      </Stack>
    );
  };

  return <Buttons />;
};

export default PaginationIcon;
