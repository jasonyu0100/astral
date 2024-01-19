import { TableDescriptor } from '../tables';
import { exampleJourney, exampleJourneys, journeySchema } from './journey/main';

export const journeyTable: TableDescriptor = {
  example: exampleJourney,
  examples: exampleJourneys,
  schema: journeySchema,
};
