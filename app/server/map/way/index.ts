import { taskDbWrapper } from '@/server/client/task/main';
import { taskMemberDbWrapper } from '@/server/client/task/member/main';
import { taskModel } from '@/server/model/task/main';
import { taskMemberModel } from '@/server/model/task/member/main';

export const taskMap = {
  model: taskModel,
  db: taskDbWrapper,
  member: {
    model: taskMemberModel,
    db: taskMemberDbWrapper,
  },
};
