import { exampleConstellations } from "./constellation/main";

export interface DraftObj {
  id: string;
  constellationIds: string[];
}

export const draftSchema = `
type DraftObj {
  id: String!
  constellationIds: [String!]!
}
`

export const exampleDraft: DraftObj = {
  id: "0",
  constellationIds: exampleConstellations.map(
    (constellation) => constellation.id
  ),
};

export const exampleDrafts: DraftObj[] = [
  {
    id: "0",
    constellationIds: exampleConstellations.map(
      (constellation) => constellation.id
    ),
  },
  {
    id: "0",
    constellationIds: exampleConstellations.map(
      (constellation) => constellation.id
    ),
  },
];
