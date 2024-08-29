import { spaceChapterDbWrapper } from '@/(server)/client/space/chapter/main';
import { reviewCommentDbWrapper } from '@/(server)/client/space/chapter/review/comment/main';
import { chapterReviewDbWrapper } from '@/(server)/client/space/chapter/review/main';
import { sceneConversationDbWrapper } from '@/(server)/client/space/chapter/scene/conversation/main';
import { conversationMessageDbWrapper } from '@/(server)/client/space/chapter/scene/conversation/message/main';
import { ideaLinkDbWrapper } from '@/(server)/client/space/chapter/scene/idea/link/main';
import { sceneIdeaDbWrapper } from '@/(server)/client/space/chapter/scene/idea/main';
import { chapterSceneDbWrapper } from '@/(server)/client/space/chapter/scene/main';
import { sceneMemberDbWrapper } from '@/(server)/client/space/chapter/scene/member/main';
import { ChapterSessionContributorDbWrapper } from '@/(server)/client/space/chapter/session/contributor/main';
import { ChapterSessionDbWrapper } from '@/(server)/client/space/chapter/session/main';
import { chapterSessionUpdateDbWrapper } from '@/(server)/client/space/chapter/session/update/main';
import { spaceDbWrapper } from '@/(server)/client/space/main';
import { spaceMemberDbWrapper } from '@/(server)/client/space/member/main';
import { spaceMemberTermsDbWrapper } from '@/(server)/client/space/member/terms/main';
import { spaceChapterModel } from '@/(server)/model/space/chapter/main';
import { reviewAttachmentModel } from '@/(server)/model/space/chapter/review/attachment/main';
import { reviewCommentModel } from '@/(server)/model/space/chapter/review/comment/main';
import { chapterReviewModel } from '@/(server)/model/space/chapter/review/main';
import {
  reviewMemberGql,
  reviewMemberModel,
} from '@/(server)/model/space/chapter/review/member/main';
import { sceneConversationModel } from '@/(server)/model/space/chapter/scene/conversation/main';
import { conversationMessageModel } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { ideaLinkModel } from '@/(server)/model/space/chapter/scene/idea/link/main';
import { sceneIdeaModel } from '@/(server)/model/space/chapter/scene/idea/main';
import { chapterSceneModel } from '@/(server)/model/space/chapter/scene/main';
import { sceneMemberModel } from '@/(server)/model/space/chapter/scene/member/main';
import { ChapterSessionContributorModel } from '@/(server)/model/space/chapter/session/contributor/main';
import { chapterSessionModel } from '@/(server)/model/space/chapter/session/main';
import { chapterSessionUpdateModel } from '@/(server)/model/space/chapter/session/update/main';
import { spaceModel } from '@/(server)/model/space/main';
import { spaceMemberModel } from '@/(server)/model/space/member/main';
import { spaceMemberTermsModel } from '@/(server)/model/space/member/terms/main';

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
  chapter: {
    db: spaceChapterDbWrapper,
    model: spaceChapterModel,
    session: {
      model: chapterSessionModel,
      db: ChapterSessionDbWrapper,
      update: {
        model: chapterSessionUpdateModel,
        db: chapterSessionUpdateDbWrapper,
      },
      contributor: {
        model: ChapterSessionContributorModel,
        db: ChapterSessionContributorDbWrapper,
      },
    },
    scene: {
      model: chapterSceneModel,
      db: chapterSceneDbWrapper,
      idea: {
        model: sceneIdeaModel,
        db: sceneIdeaDbWrapper,
        link: {
          model: ideaLinkModel,
          db: ideaLinkDbWrapper,
        },
      },
      member: {
        model: sceneMemberModel,
        db: sceneMemberDbWrapper,
      },
      conversation: {
        db: sceneConversationDbWrapper,
        model: sceneConversationModel,
        message: {
          model: conversationMessageModel,
          db: conversationMessageDbWrapper,
        },
      },
    },
    review: {
      db: chapterReviewDbWrapper,
      model: chapterReviewModel,
      member: {
        db: reviewMemberGql,
        model: reviewMemberModel,
      },
      comment: {
        model: reviewCommentModel,
        db: reviewCommentDbWrapper,
      },
      attachment: {
        model: reviewAttachmentModel,
        db: null,
      },
    },
  },
};
