import { Box } from '@mui/material';
import { useState, FC } from 'react';
import { useGetPeople } from '@hooks';
import { PaginationCard } from '@atoms/pagination-card';
import { ListCards } from '@molecules/list-cards';
import { getLengthForPagination } from '@utils/get-swapi-url-data';
// import { useRouter } from 'next/router';

export const PeopleOrquestator: FC = () => {
  // const router = useRouter();
  const [page, setPage] = useState(1);
  const [countTotalItems, setCountTotalItems] = useState<number>();

  const { data, isSuccess } = useGetPeople({
    filters: {
      page: page,
    },
    options: {
      onSuccess: res => {
        if (!countTotalItems) {
          setCountTotalItems(res.data.count);
        }
      },
    },
  });

  // TODO: Implement router logic to set the page number in the url and also get the page number from the url
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    // router.replace({pathname: })
  };

  return (
    <Box>
      {isSuccess && <ListCards results={data.data.results} />}
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
