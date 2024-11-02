import { spaceChapterDbWrapper } from '@/architecture/client/space/chapter/main';
import { spaceDbWrapper } from '@/architecture/client/space/main';
import { spaceMemberDbWrapper } from '@/architecture/client/space/member/main';
import { spaceChapterModel } from '@/architecture/model/space/chapter/main';
import { spaceModel } from '@/architecture/model/space/main';
import { spaceMemberModel } from '@/architecture/model/space/member/main';
import { conversationMap } from '../conversation';
import { postMap } from '../post';
import { sceneMap } from '../scene';
import { taskMap } from '../way';

export const spaceMap = {
  model: spaceModel,
  db: spaceDbWrapper,
  member: {
    model: spaceMemberModel,
    db: spaceMemberDbWrapper,
  },
  chapter: {
    db: spaceChapterDbWrapper,
    model: spaceChapterModel,
    task: taskMap,
    scene: sceneMap,
    post: postMap,
    conversation: conversationMap,
  },
};
