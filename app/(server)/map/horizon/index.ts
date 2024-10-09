import { horizonDbWrapper } from '@/(server)/client/horizon/main';
import { horizonModel } from '@/(server)/model/horizon/main';

export const horizonMap = {
  model: horizonModel,
  db: horizonDbWrapper,
  arc: {
    tab: {
      page: {
        element: {},
      },
    },
    task: {
      link: {},
      member: {},
    },
  },
  decision: {
    quadrant: {
      member: {},
    },
  },
  member: {
    space: {},
    user: {},
  },
  relationship: {},
};
