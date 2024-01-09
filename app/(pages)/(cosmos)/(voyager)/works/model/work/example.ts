import { Work } from "./type";

export const exampleWork: Work = {
  id: "0",
  title: "Hello World",
  type: "Music",
  date: new Date("2023-12-19").toISOString(),
  thumbnail: {
    src: "/voyager/works/1.png",
  },
};

export const exampleWorks: Work[] = [
  {
    id: "0",
    title: "Hello World",
    type: "Music",
    date: new Date("2023-12-19").toISOString(),
    thumbnail: {
      src: "/voyager/works/1.png",
    },
  },
  {
    id: "1",
    title: "Hello World",
    type: "Music",
    date: new Date("2023-12-19").toISOString(),
    thumbnail: {
      src: "/voyager/works/2.png",
    },
  },
  {
    id: "2",
    title: "Hello World",
    type: "Music",
    date: new Date("2023-12-19").toISOString(),
    thumbnail: {
      src: "/voyager/works/3.png",
    },
  },
];

