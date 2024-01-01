import { Work, exampleWork, exampleWorks } from "./work/main";

export const worksModel: {
  works: {
    work: {
      example: Work;
    };
    example: Work[];
  };
} = {
  works: {
    work: {
      example: exampleWork,
    },
    example: exampleWorks,
  },
};
