import { FileObj, exampleFile } from "@/tables/file/main";

export interface StarObj {
  id: string;
  constellationId: string;
  name: string;
  x: number;
  y: number;
  file: FileObj;
}

export const starSchema = `
type StarObj {
  id: String!
  name: String!
  x: Float!
  y: Float!
  file: FileObj!
}
`;

export const exampleStar: StarObj = {
  id: "0",
  constellationId: "0",
  name: "Star 1",
  x: 120,
  y: 120,
  file: exampleFile,
};

export const exampleStars: StarObj[] = [
  {
    id: "0",
    constellationId: "0",
    name: "Star 0",
    x: 120,
    y: 120,
    file: exampleFile,
  },
  {
    id: "1",
    constellationId: "0",
    name: "Star 1",
    x: 240,
    y: 120,
    file: exampleFile,
  },
  {
    id: "2",
    constellationId: "0",
    name: "Star 2",
    x: 360,
    y: 120,
    file: exampleFile,
  },
];
