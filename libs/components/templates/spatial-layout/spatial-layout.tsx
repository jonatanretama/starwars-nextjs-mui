import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';
import {
  SpaceGalaxyBackground,
  SpaceGalaxyContainer,
} from './spatial-layout.styles';

export type TSpatialLayoutProps = {
  children: ReactNode;
};

export const SpatialLayout: FC<TSpatialLayoutProps> = ({ children }) => {
  return (
    <Box>
      <SpaceGalaxyContainer>
        <SpaceGalaxyBackground>
          <Box className="layer" />
          <Box className="layer" />
          <Box className="layer" />
          <Box className="layer" />
        </SpaceGalaxyBackground>
      </SpaceGalaxyContainer>
      {children}
    </Box>
  );
};
