import { Box } from '@mui/material';
import { ResumeCard } from '@molecules';
import { getSwapiId } from '@utils/get-swapi-url-data';
import type { FC } from 'react';

import type { TResultsData } from '@models';

export const ListCards: FC<TResultsData> = ({ results }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        rowGap: 8,
        columnGap: 4,
      }}>
      {results.map(item => (
        <ResumeCard
          key={item.url}
          nameOrPath={'name' in item ? item.name : item.title}
          id={getSwapiId(item.url)}
        />
      ))}
    </Box>
  );
};
