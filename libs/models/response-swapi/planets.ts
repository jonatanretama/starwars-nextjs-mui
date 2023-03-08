import type { TSwapiData } from '../swapi';

export type TPlanetsAttrs = {
  name: string;
  rotation_period?: string;
  orbital_period?: string;
  diameter?: string;
  climate?: string;
  gravity?: string;
  terrain?: string;
  surface_water?: string;
  population?: string;
  residents?: string[];
  films?: string[];
  created: string;
  edited?: string;
  url: string;
};

export type TPlanetsData = {
  results: TPlanetsAttrs[];
} & TSwapiData;
