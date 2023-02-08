import type { FC } from 'react';
import { Typography } from '@mui/material';
import Link from 'next/link';
import type { TPeopleDetailsArr } from '@molecules/people-card-details';

export type TPeopleContentProps = {
  planetName?: string;
  planetId?: string;
} & TPeopleDetailsArr;

export const PeopleContent: FC<TPeopleContentProps> = ({
  planetName,
  keyName,
  value,
  planetId,
}) => {
  if (keyName === 'Homeworld' && planetName && planetId)
    return (
      <Typography
        component="div"
        variant="body1"
        sx={{ fontWeight: 'bold', display: 'flex', gap: 1 }}>
        {keyName}:&nbsp;
        <Link href={`/planets/${planetId}`}>
          <Typography variant="body1">{planetName}</Typography>
        </Link>
      </Typography>
    );
  return (
    <Typography
      component="div"
      variant="body1"
      sx={{ fontWeight: 'bold', display: 'flex', gap: 1 }}>
      {keyName}:&nbsp;
      <Typography variant="body1">{value}</Typography>
    </Typography>
  );
};
