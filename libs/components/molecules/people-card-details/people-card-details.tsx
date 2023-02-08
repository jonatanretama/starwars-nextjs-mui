/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from '@mui/material';
import { FC, useState, useEffect } from 'react';
import { useGetPlanetsById, useGetPeopleById } from 'libs/hooks';
import { TPeopleAttrs } from 'libs/models';
import Image from 'next/image';
import { PeopleContent } from '@atoms/PeopleContent/people-content';

import { capitalizedKeysArr, getSwapiId } from 'libs/utils';

export type TPeopleCardDetailsProps = {
  details: TPeopleAttrs;
};

export type TPeopleDetailsArr = {
  keyName: string;
  value?: string | string[];
};

export const PeopleCardDetails: FC = () => {
  const [planetId, setPlanetId] = useState<string>('');
  const [planetName, setPlanetName] = useState<string>(null);

  const [peopleDetails, setPeopleDetails] = useState<TPeopleAttrs>();

  // Get /people/:id
  const { isSuccess } = useGetPeopleById({
    // Static id is just for testing
    // TODO: Send id as prop
    id: 1,
    options: {
      onSuccess: result => {
        setPeopleDetails(result.data);
      },
    },
  });

  // Get /planets/:id
  useGetPlanetsById({
    id: planetId,
    options: {
      onSuccess: result => {
        setPlanetName(result.data.name);
      },
      enabled: !!planetId,
    },
  });

  useEffect(() => {
    if (!isSuccess) return;

    setPlanetId(getSwapiId(peopleDetails?.homeworld));
  }, [isSuccess]);

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
          {/* TODO: Set dynamic image */}
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
          {isSuccess &&
            peopleDetails &&
            capitalizedKeysArr(peopleDetails as any)?.map(
              (detail: TPeopleDetailsArr, index: number) => {
                if (index > 0 && index < 9) {
                  return (
                    <PeopleContent
                      {...detail}
                      key={index}
                      planetId={planetId}
                      planetName={planetName}
                    />
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
        {/* TODO: Update font styles */}
        {isSuccess && peopleDetails && (
          <Typography variant="h6">{peopleDetails.name}</Typography>
        )}
      </Box>
    </Box>
  );
};
