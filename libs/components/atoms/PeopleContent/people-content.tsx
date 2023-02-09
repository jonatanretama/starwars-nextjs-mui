import type { FC } from 'react';
import { Typography } from '@mui/material';
import Link from 'next/link';
import type { TPeopleDetailsArr } from '@molecules/people-card-details';

export type TPeopleContentProps = {
  planetName?: string;
  planetId?: string;
} & TPeopleDetailsArr;

/* TODO: Update font styles */
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
        color="text.secondary"
        variant="body1"
        sx={{ fontWeight: 'bold', display: 'flex', gap: 1 }}>
        {keyName}:&nbsp;
        <Link
          href={`/planets/${encodeURIComponent(planetId)}`}
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}>
          <Typography variant="body1" color="#2897A0" fontWeight="bold">
            {planetName}
          </Typography>
        </Link>
      </Typography>
    );
  return (
    <Typography
      component="div"
      variant="body1"
      color="text.secondary"
      sx={{ fontWeight: 'bold', display: 'flex', gap: 1 }}>
      {keyName}:&nbsp;
      <Typography variant="body1" color="text.secondary">
        {value}
      </Typography>
    </Typography>
  );
};
