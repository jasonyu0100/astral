export interface JourneyObj {
  id: string;
  seaId: string;
}

export const journeySchema = `
type JourneyObj {
  id: String!
  seaId: String!
}`;

export const exampleJourney = {
  id: "0",
  seaId: "0",
};

export const exampleJourneys = [
  {
    id: "0",
    seaId: "0",
  },
  {
    id: "1",
    seaId: "0",
  },
];
