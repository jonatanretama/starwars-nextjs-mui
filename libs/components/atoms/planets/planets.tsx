import { Box } from '@mui/material';
import { FC } from 'react';
import { PlanetContainer } from './planets.styles';

export const Planets: FC = () => {
  return (
    <PlanetContainer className="container">
      <Box className="sun"></Box>
      <Box className="index" id="index1">
        <Box className="planet-container" id="planet-c1">
          <Box className="root" id="root1">
            <Box className="planet" id="planet1"></Box>
          </Box>
        </Box>
      </Box>
      <Box className="index" id="index2">
        <Box className="planet-container" id="planet-c2">
          <Box className="root" id="root2">
            <Box className="planet" id="planet2"></Box>
          </Box>
        </Box>
      </Box>
      <Box className="index" id="index3">
        <Box className="planet-container" id="planet-c3">
          <Box className="root" id="root3">
            <Box className="planet" id="planet3"></Box>
          </Box>
        </Box>
      </Box>
    </PlanetContainer>
  );
};
