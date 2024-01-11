import { StarObj, exampleStars } from "./star/main";

export interface ConstellationObj {
  id: string;
  title: string;
  description: string;
  stars: StarObj[];
}

export const exampleConstellation = {
  id: "0",
  title: "Idea Constellation",
  description: "Constellation Description",
  stars: exampleStars,
};

export const exampleConstellations = [
  {
    id: "0",
    title: "Idea Constellation 1",
    description: "Constellation Description",
    stars: exampleStars,
  },
  {
    id: "1",
    title: "Idea Constellation 2",
    description: "Constellation Description",
    stars: exampleStars,
  },
  {
    id: "2",
    title: "Idea Constellation 3",
    description: "Constellation Description",
    stars: exampleStars,
  },
];
