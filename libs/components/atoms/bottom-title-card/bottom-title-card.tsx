/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from '@mui/material';
import type { FC } from 'react';

export type TBottomTitleCardProps = {
  name: string;
};

export const BottomTitleCard: FC<TBottomTitleCardProps> = ({ name }) => (
  <Box
    sx={{
      bgcolor: 'primary.dark',
      height: 45,
      pr: { sm: 4 },
      clipPath: {
        xs: 'polygon(0 0, 100% 0, 94% 100%, 6% 100%)',
        sm: 'polygon(40% 0, 100% 0, 97% 100%, 43% 100%)',
        // lg: 'polygon(5% 0, 95% 0, 100% 100%, 0% 100%)',
      },
      display: 'flex',
      justifyContent: { xs: 'center', sm: 'flex-end' },
      alignItems: 'center',
    }}>
    <Typography
      variant="h3"
      sx={{
        color: '#fff',
        textShadow: '0 0 1px #fff,0 0 3px #fff,0 0 5px #fff',
      }}>
      {name}
    </Typography>
  </Box>
);
