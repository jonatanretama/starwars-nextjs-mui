import { Box } from '@mui/material';
import { FC } from 'react';
import { ResumeCard } from '../resume-card';

export const ContentType: FC = () => {
  const contentTypes = [
    { title: 'Personajes', path: 'people' },
    { title: 'Planetas', path: 'planets' },
    { title: 'Peliculas', path: 'films' },
    { title: 'Especies', path: 'species' },
    { title: 'Vehiculos', path: 'vehicles' },
    { title: 'Naves', path: 'starships' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {contentTypes.map(item => (
        <ResumeCard key={item.path} nameOrPath={item.path} title={item.title} />
      ))}
    </Box>
  );
};
