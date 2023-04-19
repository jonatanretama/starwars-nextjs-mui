import { Box } from '@mui/material';
import type { FC } from 'react';
import { PaginationCard } from '@atoms/pagination-card';
import { ListCards } from '@molecules/list-cards';
import { getLengthForPagination } from '@utils/get-swapi-url-data';
import type { TResultsData } from '@models';

export type TCardOrquestatorProps = {
  setPage: (page: number) => void;
  countTotalItems: number;
  page: number;
} & TResultsData;

export const CardsOrquestator: FC<TCardOrquestatorProps> = ({
  setPage,
  countTotalItems,
  results,
  page,
}) => {
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box>
      {results && <ListCards results={results} />}
      {countTotalItems > 0 && (
        <Box sx={{ mt: 4 }}>
          <PaginationCard
            getLengthForPagination={() =>
              getLengthForPagination(countTotalItems)
            }
            page={page}
            handleChange={handleChange}
          />
        </Box>
      )}
    </Box>
  );
};
