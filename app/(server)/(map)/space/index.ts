import { userReservationDbWrapper } from '@/(server)/(db)/user/reservation/main';
import { chatConversationGql, chatConversationModel } from '../../(model)/space/chapter/chat/conversation/main';
import { conversationMessageGql, conversationMessageModel } from '../../(model)/space/chapter/chat/conversation/message/main';
import { chapterChatGql, chapterChatModel } from '../../(model)/space/chapter/chat/main';
import { spaceChapterGql, spaceChapterModel } from '../../(model)/space/chapter/main';
import { spaceUpdateGql, spaceUpdateModel } from '../../(model)/space/update/main';
import { sceneIdeaGql, sceneIdeaModel } from '../../(model)/space/chapter/scene/idea/main';
import { chapterSceneGql, chapterSceneModel } from '../../(model)/space/chapter/scene/main';
import { verseCommentGql, verseCommentModel } from '../../(model)/space/chapter/verse/comment/main';
import { chapterVerseGql, chapterVerseModel } from '../../(model)/space/chapter/verse/main';
import { spaceGql, spaceModel } from '../../(model)/space/main';
import { spaceDbWrapper } from '@/(server)/(db)/space/main';
import { spaceChapterDbWrapper } from '@/(server)/(db)/space/chapter/main';
import { chapterChatDbWrapper } from '@/(server)/(db)/space/chapter/chat/main';
import { chatConversationDbWrapper } from '@/(server)/(db)/space/chapter/chat/conversation/main';
import { conversationMessageDbWrapper } from '@/(server)/(db)/space/chapter/chat/conversation/message/main';
import { spaceUpdateDbWrapper } from '@/(server)/(db)/space/update/main';
import { spaceUpdateAddDbWrapper } from '@/(server)/(db)/space/update/add/main';
import { chapterSceneDbWrapper } from '@/(server)/(db)/space/chapter/scene/main';
import { sceneIdeaDbWrapper } from '@/(server)/(db)/space/chapter/scene/idea/main';
import { chapterVerseDbWrapper } from '@/(server)/(db)/space/chapter/verse/main';
import { verseCommentDbWrapper } from '@/(server)/(db)/space/chapter/verse/comment/main';
import { chatMemberGql, chatMemberModel } from '@/(server)/(model)/space/chapter/chat/member/main';
import { chatMemberDbWrapper } from '@/(server)/(db)/space/chapter/chat/member/main';
import { spaceMemberGql, spaceMemberModel } from '@/(server)/(model)/space/member/main';
import { verseMemberGql, verseMemberModel } from '@/(server)/(model)/space/chapter/verse/member/main';
import { verseMemberDbWrapper } from '@/(server)/(db)/space/chapter/verse/member/main';
import { spaceUpdateMemberGql, spaceUpdateMemberModel } from '@/(server)/(model)/space/update/member/main';
import { spaceUpdateMemberDbWrapper } from '@/(server)/(db)/space/update/member/main';
import { spaceUpdateAddGql, spaceUpdateAddModel } from '@/(server)/(model)/space/update/add/main';
import { spaceMemberDbWrapper } from '@/(server)/(db)/space/member/main';
import { sceneStackGql } from '@/(server)/(model)/space/chapter/scene/stack/main';
import { ideaLinkGql, ideaLinkModel } from '@/(server)/(model)/space/chapter/scene/idea/link/main';
import { sceneStackDbWrapper } from '@/(server)/(db)/space/chapter/scene/stack/main';
import { ideaLinkDbWrapper } from '@/(server)/(db)/space/chapter/scene/idea/link/main';

export const spaceMap = {
  model: spaceModel,
  db: spaceDbWrapper,
  member: {
    model: spaceMemberModel,
    db: spaceMemberDbWrapper,
  },
  update: {
    model: spaceUpdateModel,
    db: spaceUpdateDbWrapper,
    member: {
      model: spaceUpdateMemberModel,
      db: spaceUpdateMemberDbWrapper,
    },
    add: {
      model: spaceUpdateAddModel,
      db: spaceUpdateAddDbWrapper,
    },
  },
  chapter: {
    db: spaceChapterDbWrapper,
    model: spaceChapterModel,
    chat: {
      db: chapterChatDbWrapper,
      model: chapterChatModel,
      member: {
        model: chatMemberModel,
        db: chatMemberDbWrapper,
      },
      conversation: {
        db: chatConversationDbWrapper,
        model: chatConversationModel,
        message: {
          model: conversationMessageModel,
          db: conversationMessageDbWrapper,
        },
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
      stack: {
        model: sceneStackGql,
        db: sceneStackDbWrapper,
      },
    },
    verse: {
      db: chapterVerseDbWrapper,
      model: chapterVerseModel,
      member: {
        db: verseMemberGql,
        model: verseMemberModel,
      },
      comment: {
        model: verseCommentModel,
        db: verseCommentDbWrapper,
      },
    },
  },
};
