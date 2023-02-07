import { Box } from '@mui/material';
import { FC, useState } from 'react';
import { useGetPeople } from 'libs/hooks';
import { TPeopleAttrs } from 'libs/models';

export const PeopleCard: FC = () => {
  const [people, setPeople] = useState<TPeopleAttrs[]>([]);
  const { isSuccess } = useGetPeople({
    options: {
      onSuccess: result => {
        setPeople(result.data.results);
      },
    },
  });

  if (!isSuccess && !people.length) return <Box>nada</Box>;

  return (
    <>
      {people?.map(item => (
        <Box>
          {item?.name}
          {item?.homeworld}
        </Box>
      ))}
    </>
  );
};
