import { spaceChapterDbWrapper } from '@/(server)/client/space/chapter/main';
import { spaceDbWrapper } from '@/(server)/client/space/main';
import { spaceMemberDbWrapper } from '@/(server)/client/space/member/main';
import { spaceChapterModel } from '@/(server)/model/space/chapter/main';
import { spaceModel } from '@/(server)/model/space/main';
import { spaceMemberModel } from '@/(server)/model/space/member/main';
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
