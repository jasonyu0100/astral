import { chapterConversationDbWrapper } from '@/(server)/client/space/chapter/conversation/main';
import { conversationMessageDbWrapper } from '@/(server)/client/space/chapter/conversation/message/main';
import { spaceChapterDbWrapper } from '@/(server)/client/space/chapter/main';
import { sceneIdeaDbWrapper } from '@/(server)/client/space/chapter/scene/idea/main';
import { chapterSceneDbWrapper } from '@/(server)/client/space/chapter/scene/main';
import { spotlightAttachmentDbWrapper } from '@/(server)/client/space/chapter/spotlight/attachment/main';
import { commentKarmaDbWrapper } from '@/(server)/client/space/chapter/spotlight/comment/karma/main';
import { spotlightCommentDbWrapper } from '@/(server)/client/space/chapter/spotlight/comment/main';
import { spotlightKarmaDbWrapper } from '@/(server)/client/space/chapter/spotlight/karma/main';
import { spotlightLinkDbWrapper } from '@/(server)/client/space/chapter/spotlight/link/main';
import { chapterSpotlightDbWrapper } from '@/(server)/client/space/chapter/spotlight/main';
import { wayLinkDbWrapper } from '@/(server)/client/space/chapter/way/link/main';
import { chapterWayDbWrapper } from '@/(server)/client/space/chapter/way/main';
import { wayMemberDbWrapper } from '@/(server)/client/space/chapter/way/member/main';
import { spaceDbWrapper } from '@/(server)/client/space/main';
import { spaceMemberDbWrapper } from '@/(server)/client/space/member/main';
import { spaceMemberTermsDbWrapper } from '@/(server)/client/space/member/terms/main';
import { spaceIdeaRelationshipDbWrapper } from '@/(server)/client/space/relationship/main';
import { chapterConversationModel } from '@/(server)/model/space/chapter/conversation/main';
import { conversationMessageModel } from '@/(server)/model/space/chapter/conversation/message/main';
import { spaceChapterModel } from '@/(server)/model/space/chapter/main';
import { sceneIdeaModel } from '@/(server)/model/space/chapter/scene/idea/main';
import { chapterSceneModel } from '@/(server)/model/space/chapter/scene/main';
import { spotlightAttachmentModel } from '@/(server)/model/space/chapter/spotlight/attachment/main';
import { commentKarmaModel } from '@/(server)/model/space/chapter/spotlight/comment/karma/main';
import { spotlightCommentModel } from '@/(server)/model/space/chapter/spotlight/comment/main';
import { spotlightKarmaModel } from '@/(server)/model/space/chapter/spotlight/karma/main';
import { spotlightLinkModel } from '@/(server)/model/space/chapter/spotlight/link/main';
import { chapterSpotlightModel } from '@/(server)/model/space/chapter/spotlight/main';
import {
  spotlightMemberGql,
  spotlightMemberModel,
} from '@/(server)/model/space/chapter/spotlight/member/main';
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
    conversation: {
      db: chapterConversationDbWrapper,
      model: chapterConversationModel,
      message: {
        model: conversationMessageModel,
        db: conversationMessageDbWrapper,
      },
    },
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
    spotlight: {
      db: chapterSpotlightDbWrapper,
      model: chapterSpotlightModel,
      member: {
        db: spotlightMemberGql,
        model: spotlightMemberModel,
      },
      comment: {
        model: spotlightCommentModel,
        db: spotlightCommentDbWrapper,
        karma: {
          model: commentKarmaModel,
          db: commentKarmaDbWrapper,
        },
      },
      attachment: {
        model: spotlightAttachmentModel,
        db: spotlightAttachmentDbWrapper,
      },
      link: {
        model: spotlightLinkModel,
        db: spotlightLinkDbWrapper,
      },
      karma: {
        model: spotlightKarmaModel,
        db: spotlightKarmaDbWrapper,
      },
    },
  },
};
