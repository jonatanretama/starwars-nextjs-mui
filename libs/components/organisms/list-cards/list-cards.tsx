import { Box } from '@mui/material';
import { useGetPeople } from '@hooks';
import { ResumeCard } from '@molecules';
import { getSwapiId } from '@utils/get-swapi-id';

export const ListCards = () => {
  const { data, isSuccess } = useGetPeople({});
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        rowGap: 8,
        columnGap: 4,
      }}>
      {isSuccess &&
        data.data.results.map(item => (
          <ResumeCard
            key={`${item.name}-${item.height}`}
            name={item.name}
            id={getSwapiId(item.url)}
          />
        ))}
    </Box>
  );
};
