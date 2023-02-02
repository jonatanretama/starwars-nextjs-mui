import type { TSwapiData } from '../api';

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

export type PlanetsData = {
  results: TPlanetsAttrs[];
} & TSwapiData;
