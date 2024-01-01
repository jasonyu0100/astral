import { DraftMediaObj } from "./media/main";

export interface DraftContextObj {
  library: DraftMediaObj[];
}

export const exampleDraftLibrary: DraftMediaObj[] = [
  {
    src: "/apollo/draft/elements/1.png",
    name: "Sunset",
    description: "A brilliant sunset",
  },
  {
    src: "/apollo/draft/elements/2.png",
    name: "Valley",
    description: "A brilliant valley",
  },
  {
    src: "/apollo/draft/elements/3.png",
    name: "Field",
    description: "A brilliant field",
  },
  {
    src: "/apollo/draft/elements/4.png",
    name: "Lake",
    description: "A brilliant lake",
  },
  {
    src: "/apollo/draft/elements/5.png",
    name: "Ocean",
    description: "A brilliant ocean",
  },
  {
    src: "/apollo/draft/elements/6.png",
    name: "Morning",
    description: "A brilliant morning",
  },
];

