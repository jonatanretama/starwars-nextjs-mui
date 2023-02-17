import { Button } from '@mui/material';
import type { FC } from 'react';

const obj = {
  data: { name: 'Jonatan' },
};
export const ButtonStyled: FC = () => (
  <Button variant="outlined">{obj.data.name}</Button>
);
