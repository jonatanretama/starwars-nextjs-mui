/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from '@mui/material';
import { FC, useState, useEffect } from 'react';
import { useGetPeople } from 'libs/hooks';
import { TPeopleAttrs } from 'libs/models';
import Image from 'next/image';

import { capitalizedKeysArr } from 'libs/utils';

export type TPeopleCardDetailsProps = {
  details: TPeopleAttrs;
};

export type TPeopleDetailsArr = {
  key: string;
  value?: string | string[];
};

export const PeopleCardDetails: FC = () => {
  const [detailsArr, setDetailsArr] = useState<TPeopleDetailsArr[]>([]);
  // const [people, setPeople] = useState<TPeopleAttrs[]>([]);
  // const { isSuccess } = useGetPeople({
  //   options: {
  //     onSuccess: result => {
  //       setPeople(result.data.results);
  //     },
  //   },
  // });

  // if (!isSuccess && !people.length) return <Box>nada</Box>;

  const details: TPeopleAttrs = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/',
    ],
    species: [],
    vehicles: [
      'https://swapi.dev/api/vehicles/14/',
      'https://swapi.dev/api/vehicles/30/',
    ],
    starships: [
      'https://swapi.dev/api/starships/12/',
      'https://swapi.dev/api/starships/22/',
    ],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.dev/api/people/1/',
  };

  return (
    <Box sx={{ m: 3 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { sx: 'column', md: 'row' },
          gap: 2,
          boxShadow: 3,
        }}>
        <Box
          sx={{
            width: { xs: '100%', md: 400, xl: 500 },
            height: { xs: 'auto', md: 300, xl: 400 },
            clipPath: {
              xs: 'circle(45% at 50% 50%)',
              md: 'none',
            },
          }}>
          <Image
            priority
            src="/images/anakin-sky-walker.webp"
            alt="Imagen de Anakin Skywalker"
            width={600}
            height={600}
            blurDataURL={'/images/anakin-sky-walker.webp'}
            sizes="(max-width: 768px) 100vw,
              (min-width: 1200px) 50vw,
              33vw"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box>
          {capitalizedKeysArr(details as any)?.map(
            (detail: TPeopleDetailsArr, index: number) => {
              if (index > 0 && index < 9) {
                return (
                  <Typography
                    component="div"
                    variant="body1"
                    key={index}
                    sx={{ fontWeight: 'bold', display: 'flex', gap: 1 }}>
                    {detail.key}:
                    <Typography variant="body1">{detail.value}</Typography>
                  </Typography>
                );
              }
              return null;
            }
          )}
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: 'tomato',
          height: 40,
          clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        Anakin Skywalker
      </Box>
    </Box>
  );
};
