import { Button } from '@mui/material';
import type { FC } from 'react';

const obj = {
  data: { name: 'Jonatan' },
};
export const ButtonStyledExample: FC = () => (
  <Button variant="outlined">{obj.data.name}</Button>
);
