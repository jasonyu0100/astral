import { SeaContextObj } from "./context/main";
import { SeaPointObj } from "./point/main";

export const seaModal: {
  context: {
    example: SeaContextObj;
  };
  points: {
    point: {
      example: SeaPointObj;
    };
    example: SeaPointObj[];
  };
} = {
  context: {
    example: {},
  },
  points: {
    point: {
      example: {},
    },
    example: [],
  },
};
