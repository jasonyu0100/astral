import { userActivityDbWrapper } from '@/architecture/client/activity/main';
import { userActivityModel } from '@/architecture/model/activity/main';

export const userActivityMap = {
  model: userActivityModel,
  db: userActivityDbWrapper,
};
