/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from '@mui/material';
import { FC, useState, useEffect } from 'react';
import { useGetPlanetsById, useGetPeopleById } from '@hooks';
import { TPeopleAttrs } from '@models';
import Image from 'next/image';
import { PeopleContent, BottomTitleCard } from '@atoms';
import { capitalizedKeysArr, getSwapiId } from '@utils';
import { stringToSlug } from '@utils/string-to-slug';

export type TPeopleCardDetailsProps = {
  idToSearch: string;
  actualPage: string;
};

export type TPeopleDetailsArr = {
  keyName: string;
  value?: string | string[];
};

export const PeopleCardDetails: FC<TPeopleCardDetailsProps> = ({
  idToSearch,
  actualPage,
}) => {
  const [planetId, setPlanetId] = useState<string>('');
  const [planetName, setPlanetName] = useState<string>(null);

  const [peopleDetails, setPeopleDetails] = useState<TPeopleAttrs>();

  const { isSuccess } = useGetPeopleById({
    id: idToSearch,
    options: {
      onSuccess: result => {
        setPeopleDetails(result.data);
      },
    },
  });

  // TODO: Get /planets/:id
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
    if (peopleDetails?.homeworld.length) {
      setPlanetId(getSwapiId(peopleDetails.homeworld));
    }
    return;
  }, [peopleDetails]);

  return (
    peopleDetails && (
      <Box sx={{ m: 3 }}>
        <Box
          sx={{
            bgcolor: 'primary.dark',
            display: 'flex',
            borderRadius: { xs: '20px 20px 0 0', sm: '20px 20px 0 20px' },
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
          }}>
          <Box
            sx={{
              filter: 'drop-shadow(1px 0px 10px rgba(200, 200, 200, 0.3))',
            }}>
            <Box
              sx={{
                width: { xs: '100%', md: 350, xl: 500 },
                height: { xs: 350, md: 350, xl: 500 },
                clipPath: {
                  xs: 'polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0)',
                  sm: 'polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 0% 0%)',
                  xl: 'polygon(100% 70%, 98% 60%, 98% 40%, 100% 30%, 100% 0, 0 0, 0 100%, 100% 100%)',
                },
              }}>
              {/* TODO: Set dynamic image with dynamic alt */}
              <Image
                priority
                src={`/images/${actualPage}/${stringToSlug(
                  peopleDetails.name
                )}.jpg`}
                alt={`picture of ${peopleDetails.name}`}
                quality={50}
                width={600}
                height={600}
                blurDataURL={`/images/${actualPage}/${stringToSlug(
                  peopleDetails.name
                )}.jpg`}
                sizes="(max-width: 768px) 100vw,
              (min-width: 1200px) 50vw,
              33vw"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  borderRadius: '20px 20px 0 20px',
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: { xs: 'center', sm: 'flex-start' },
              pl: { xs: 0, sm: 2 },
              py: { xs: 2, sm: 0 },
            }}>
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

        {isSuccess && peopleDetails && (
          <BottomTitleCard name={peopleDetails?.name} />
        )}
      </Box>
    )
  );
};
