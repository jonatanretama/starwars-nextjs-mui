/* eslint-disable prettier/prettier */
import type {
  TPeopleAttrs,
  TFilmsAttrs,
  TPlanetsAttrs,
  TSpeciesAttrs,
  TStarshipsAttrs,
  TVehiclesAttrs,
} from './';


export type TResultsData = {
  results:
  | TPeopleAttrs[]
  | TFilmsAttrs[]
  | TPlanetsAttrs[]
  | TSpeciesAttrs[]
  | TStarshipsAttrs[]
  | TVehiclesAttrs[];
};
