import { spaceChapterDbWrapper } from '@/(server)/client/space/chapter/main';
import { sceneIdeaDbWrapper } from '@/(server)/client/space/chapter/scene/idea/main';
import { chapterSceneDbWrapper } from '@/(server)/client/space/chapter/scene/main';
import { wayLinkDbWrapper } from '@/(server)/client/space/chapter/way/link/main';
import { chapterWayDbWrapper } from '@/(server)/client/space/chapter/way/main';
import { wayMemberDbWrapper } from '@/(server)/client/space/chapter/way/member/main';
import { spaceDbWrapper } from '@/(server)/client/space/main';
import { spaceMemberDbWrapper } from '@/(server)/client/space/member/main';
import { spaceMemberTermsDbWrapper } from '@/(server)/client/space/member/terms/main';
import { spaceIdeaRelationshipDbWrapper } from '@/(server)/client/space/relationship/main';
import { spaceChapterModel } from '@/(server)/model/space/chapter/main';
import { sceneIdeaModel } from '@/(server)/model/space/chapter/scene/idea/main';
import { chapterSceneModel } from '@/(server)/model/space/chapter/scene/main';
import { wayLinkModel } from '@/(server)/model/space/chapter/way/link/main';
import { chapterWayModel } from '@/(server)/model/space/chapter/way/main';
import { wayMemberModel } from '@/(server)/model/space/chapter/way/member/main';
import { spaceModel } from '@/(server)/model/space/main';
import { spaceMemberModel } from '@/(server)/model/space/member/main';
import { spaceMemberTermsModel } from '@/(server)/model/space/member/terms/main';
import { spaceIdeaRelationshipModel } from '@/(server)/model/space/relationship/main';

export const spaceMap = {
  model: spaceModel,
  db: spaceDbWrapper,
  member: {
    model: spaceMemberModel,
    db: spaceMemberDbWrapper,
    terms: {
      model: spaceMemberTermsModel,
      db: spaceMemberTermsDbWrapper,
    },
  },
  relationship: {
    model: spaceIdeaRelationshipModel,
    db: spaceIdeaRelationshipDbWrapper,
  },
  chapter: {
    db: spaceChapterDbWrapper,
    model: spaceChapterModel,
    scene: {
      model: chapterSceneModel,
      db: chapterSceneDbWrapper,
      idea: {
        model: sceneIdeaModel,
        db: sceneIdeaDbWrapper,
      },
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
