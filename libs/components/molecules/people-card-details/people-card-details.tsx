import { Typography } from '@mui/material';
import { FC, useState, useEffect } from 'react';
import { useGetPlanetsById, useGetPeopleById } from '@hooks';
import { TPeopleAttrs } from '@models';
import { PeopleContent } from '@atoms';
import { capitalizedKeysArr, getSwapiId } from '@utils';
import { BaseCardDetails } from '@atoms';

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

  return !peopleDetails && !isSuccess ? (
    <Typography variant="h2" color="primary.contrastText">
      Loading...
    </Typography>
  ) : (
    <BaseCardDetails data={peopleDetails} actualPage={actualPage}>
      {isSuccess &&
        peopleDetails &&
        capitalizedKeysArr(peopleDetails as TPeopleAttrs)?.map(
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
    </BaseCardDetails>
  );
};
