import { horizonDbWrapper } from '@/(server)/client/horizon/main';
import { horizonModel } from '@/(server)/model/horizon/main';

export const horizonMap = {
  model: horizonModel,
  db: horizonDbWrapper,
};
