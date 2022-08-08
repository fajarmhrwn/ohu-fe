import { useState } from 'react';
import PaginationIcon from '@components/leaderboards/PaginationIcon';
import { PageLayout } from 'src/layout';

export const Leaderboards = () => {
  const [currentPage,setCurrentPage] = useState(1);

  return (
    <PageLayout>
        Halaman ke-{currentPage}
        <PaginationIcon pageSize={500} parentPageSetter={setCurrentPage} />
    </PageLayout>
  );
};