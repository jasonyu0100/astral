export interface Work {
  id: string;
  title: string;
  type: string;
  date: Date;
  thumbnail: {
    src: string;
  };
}

export const exampleWork = {
  id: "0",
  title: "Hello World",
  type: "Music",
  date: new Date("2023-12-19"),
  thumbnail: {
    src: "/voyager/works/1.png",
  },
};

export const exampleWorks: Work[] = [
  {
    id: "0",
    title: "Hello World",
    type: "Music",
    date: new Date("2023-12-19"),
    thumbnail: {
      src: "/voyager/works/1.png",
    },
  },
  {
    id: "1",
    title: "Hello World",
    type: "Music",
    date: new Date("2023-12-19"),
    thumbnail: {
      src: "/voyager/works/2.png",
    },
  },
  {
    id: "2",
    title: "Hello World",
    type: "Music",
    date: new Date("2023-12-19"),
    thumbnail: {
      src: "/voyager/works/3.png",
    },
  },
];
