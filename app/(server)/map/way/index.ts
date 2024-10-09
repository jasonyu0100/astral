import { taskLinkDbWrapper } from '@/(server)/client/task/link/main';
import { taskDbWrapper } from '@/(server)/client/task/main';
import { taskMemberDbWrapper } from '@/(server)/client/task/member/main';
import { taskLinkModel } from '@/(server)/model/task/link/main';
import { taskModel } from '@/(server)/model/task/main';
import { taskMemberModel } from '@/(server)/model/task/member/main';

export const taskMap = {
  model: taskModel,
  db: taskDbWrapper,
  link: {
    mode: taskLinkModel,
    db: taskLinkDbWrapper,
  },
  member: {
    model: taskMemberModel,
    db: taskMemberDbWrapper,
  },
};
