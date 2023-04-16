import { Box } from '@mui/material';
import type { FC } from 'react';
import { PaginationCard } from '@atoms/pagination-card';
import { ListCards } from '@molecules/list-cards';
import { getLengthForPagination } from '@utils/get-swapi-url-data';
import type { TResultsData } from '@models';
// import { useRouter } from 'next/router';

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
  // const router = useRouter();

  // TODO: Implement router logic to set the page number in the url and also get the page number from the url
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    // router.replace({pathname: })
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
