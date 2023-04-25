import { peopleHappyHandler } from './people-handler';
import { planetsHappyHandler } from './planets-handler';
import { filmsHappyHandler } from './films-handler';
import { speciesHappyHandler } from './species-handler';
import { vehiclesHappyHandler } from './vehicles-handler';
import { starshipsHappyHandler } from './starships-handler';

export * from './people-handler';
export * from './planets-handler';
export * from './films-handler';
export * from './species-handler';
export * from './vehicles-handler';
export * from './starships-handler';

export const swappiHappyHandler = [
  ...peopleHappyHandler,
  ...planetsHappyHandler,
  ...filmsHappyHandler,
  ...speciesHappyHandler,
  ...vehiclesHappyHandler,
  ...starshipsHappyHandler,
];
