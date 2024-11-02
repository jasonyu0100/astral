import { taskDbWrapper } from '@/architecture/client/task/main';
import { taskMemberDbWrapper } from '@/architecture/client/task/member/main';
import { taskModel } from '@/architecture/model/task/main';
import { taskMemberModel } from '@/architecture/model/task/member/main';

export const taskMap = {
  model: taskModel,
  db: taskDbWrapper,
  member: {
    model: taskMemberModel,
    db: taskMemberDbWrapper,
  },
};
