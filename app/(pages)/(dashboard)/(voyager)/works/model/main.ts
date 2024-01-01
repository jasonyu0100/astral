import { exampleWorks } from "./works/main";
import { Work, exampleWork } from "./works/work/main";

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
