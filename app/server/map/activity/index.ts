import { userActivityDbWrapper } from '@/server/client/activity/main';
import { userActivityModel } from '@/server/model/activity/main';

export const userActivityMap = {
  model: userActivityModel,
  db: userActivityDbWrapper,
};
