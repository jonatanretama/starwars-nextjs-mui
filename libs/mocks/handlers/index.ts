import { peopleHappyHandler } from './people-handler';
import { planetsHappyHandler } from './planets-handler';

export * from './people-handler';
export * from './planets-handler';

export const swappiHappyHandler = [
  ...peopleHappyHandler,
  ...planetsHappyHandler,
];
