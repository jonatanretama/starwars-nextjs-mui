import { Box } from '@mui/material';
import { ResumeCard } from '@molecules';
import { getSwapiId } from '@utils/get-swapi-url-data';
import type { FC } from 'react';

import type { TPeopleAttrs } from '@models';

export type TListCardsProps = {
  results: TPeopleAttrs[];
};

export const ListCards: FC<TListCardsProps> = ({ results }) => {
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
          key={`${item.name}-${item.height}`}
          name={item.name}
          id={getSwapiId(item.url)}
        />
      ))}
    </Box>
  );
};
