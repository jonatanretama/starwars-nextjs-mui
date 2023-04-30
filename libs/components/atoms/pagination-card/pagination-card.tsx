import { Box, Pagination, Stack } from '@mui/material';
import { FC } from 'react';

export type TPaginationCardProps = {
  getLengthForPagination: () => number;
  page: number;
  handleChange?: (event: React.ChangeEvent<unknown>, value: number) => void;
};

export const PaginationCard: FC<TPaginationCardProps> = ({
  getLengthForPagination,
  page,
  handleChange,
}) => (
  <Box>
    <Stack spacing={2}>
      <Pagination
        count={getLengthForPagination()}
        page={page}
        onChange={handleChange}
        sx={{
          '.MuiPaginationItem-root': { color: '#fff!important' },
          '.MuiButtonBase-root': { color: '#fff!important' },
        }}
        variant="outlined"
        color="primary"
      />
    </Stack>
  </Box>
);
