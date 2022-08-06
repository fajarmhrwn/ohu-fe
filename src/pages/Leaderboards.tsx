import { useState } from 'react';
import PaginationIcon from '@components/leaderboards/PaginationIcon';

export const Leaderboards = () => {

    const Konten = () => {
        const [currentPage,setCurrentPage] = useState(1);

        return (
            <div>
                Halaman ke-{currentPage}
                <PaginationIcon pageSize={10} parentPageSetter={setCurrentPage} />
            </div>
        );
    };

    return (
        <Konten />
    );
};