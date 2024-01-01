export interface Work {
  title: string;
  type: string;
  date: Date;
  thumbnail: {
    src: string;
  };
}

export const exampleWork = {
  title: "Hello World",
  type: "Music",
  date: new Date("2023-12-19"),
  thumbnail: {
    src: "/voyager/works/1.png",
  },
};

export const exampleWorks: Work[] = [exampleWork];
