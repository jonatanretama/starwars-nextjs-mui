import { Button } from '@mui/material';
import type { FC } from 'react';

export const ButtonStyled: FC = () => {
  const obj = {
    data: { name: 'Jonatan' },
  };
  return <Button variant="outlined">{obj.data.name}</Button>;
};
