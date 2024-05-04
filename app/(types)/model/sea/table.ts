import { TableDescriptor } from '../tables';
import { exampleUpdate, exampleUpdates } from './update/main';

export const journeyTable: TableDescriptor = {
  example: exampleUpdate,
  examples: exampleUpdates,
};
