import { TableDescriptor } from "../tables";
import { exampleJourney, exampleJourneys, journeySchema } from "./journey/main";
import { exampleSea, exampleSeas, seaSchema } from "./main";

export const seaTable : TableDescriptor = {
  example: exampleSea,
  examples: exampleSeas,
  schema: seaSchema,
};

export const journeyTable : TableDescriptor = {
  example: exampleJourney,
  examples: exampleJourneys,
  schema: journeySchema,
};
