import { spaceChapterDbWrapper } from '@/(server)/client/space/chapter/main';
import { chapterSceneDbWrapper } from '@/(server)/client/space/chapter/scene/main';
import { wayLinkDbWrapper } from '@/(server)/client/space/chapter/way/link/main';
import { chapterWayDbWrapper } from '@/(server)/client/space/chapter/way/main';
import { wayMemberDbWrapper } from '@/(server)/client/space/chapter/way/member/main';
import { spaceDbWrapper } from '@/(server)/client/space/main';
import { spaceMemberDbWrapper } from '@/(server)/client/space/member/main';
import { spaceChapterModel } from '@/(server)/model/space/chapter/main';
import { chapterSceneModel } from '@/(server)/model/space/chapter/scene/main';
import { wayLinkModel } from '@/(server)/model/space/chapter/way/link/main';
import { chapterWayModel } from '@/(server)/model/space/chapter/way/main';
import { wayMemberModel } from '@/(server)/model/space/chapter/way/member/main';
import { spaceModel } from '@/(server)/model/space/main';
import { spaceMemberModel } from '@/(server)/model/space/member/main';

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
    scene: {
      model: chapterSceneModel,
      db: chapterSceneDbWrapper,
    },
    way: {
      model: chapterWayModel,
      db: chapterWayDbWrapper,
      link: {
        mode: wayLinkModel,
        db: wayLinkDbWrapper,
      },
      member: {
        model: wayMemberModel,
        db: wayMemberDbWrapper,
      },
    },
  },
};
