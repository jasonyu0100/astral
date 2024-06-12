import { userReservationDbWrapper } from '@/(server)/(db)/user/reservation/main';
import { chatConversationGql } from '../../(model)/space/chapter/chat/conversation/main';
import { conversationMessageGql } from '../../(model)/space/chapter/chat/conversation/message/main';
import { chapterChatGql } from '../../(model)/space/chapter/chat/main';
import { spaceChapterGql } from '../../(model)/space/chapter/main';
import { spaceUpdateGql } from '../../(model)/space/update/main';
import { sceneIdeaGql } from '../../(model)/space/chapter/scene/idea/main';
import { chapterSceneGql } from '../../(model)/space/chapter/scene/main';
import { verseCommentGql } from '../../(model)/space/chapter/verse/comment/main';
import { chapterVerseGql } from '../../(model)/space/chapter/verse/main';
import { spaceGql } from '../../(model)/space/main';
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
import { chatMemberGql } from '@/(server)/(model)/space/chapter/chat/member/main';
import { chatMemberDbWrapper } from '@/(server)/(db)/space/chapter/chat/member/main';
import { spaceMemberGql } from '@/(server)/(model)/space/member/main';
import { verseMemberGql } from '@/(server)/(model)/space/chapter/verse/member/main';
import { verseMemberDbWrapper } from '@/(server)/(db)/space/chapter/verse/member/main';
import { spaceUpdateMemberGql } from '@/(server)/(model)/space/update/member/main';
import { spaceUpdateMemberDbWrapper } from '@/(server)/(db)/space/update/member/main';
import { spaceUpdateAddGql } from '@/(server)/(model)/space/update/add/main';
import { spaceMemberDbWrapper } from '@/(server)/(db)/space/member/main';
import { sceneStackGql } from '@/(server)/(model)/space/chapter/scene/stack/main';
import { ideaLinkGql } from '@/(server)/(model)/space/chapter/scene/idea/link/main';
import { sceneStackDbWrapper } from '@/(server)/(db)/space/chapter/scene/stack/main';
import { ideaLinkDbWrapper } from '@/(server)/(db)/space/chapter/scene/idea/link/main';

export const spaceMap = {
  children: ['chapter', 'member', 'update'],
  gql: spaceGql,
  db: spaceDbWrapper,
  member: {
    children: [],
    gql: spaceMemberGql,
    db: spaceMemberDbWrapper,
  },
  update: {
    gql: spaceUpdateGql,
    db: spaceUpdateDbWrapper,
    children: ['add', 'member'],
    member: {
      children: [],
      db: spaceUpdateMemberDbWrapper,
      gql: spaceUpdateMemberGql,
    },
    add: {
      children: [],
      db: spaceUpdateAddDbWrapper,
      gql: spaceUpdateAddGql,
    },
  },
  chapter: {
    gql: spaceChapterGql,
    db: spaceChapterDbWrapper,
    children: ['chat', 'scene', 'verse'],
    chat: {
      gql: chapterChatGql,
      db: chapterChatDbWrapper,
      children: ['conversation', 'member'],
      member: {
        children: [],
        db: chatMemberDbWrapper,
        gql: chatMemberGql,
      },
      conversation: {
        gql: chatConversationGql,
        db: chatConversationDbWrapper,
        children: ['message'],
        message: {
          children: [],
          gql: conversationMessageGql,
          db: conversationMessageDbWrapper,
        },
      },
    },
    scene: {
      gql: chapterSceneGql,
      db: chapterSceneDbWrapper,
      children: ['idea'],
      idea: {
        children: ['link'],
        gql: sceneIdeaGql,
        db: sceneIdeaDbWrapper,
        link: {
          children: [],
          gql: ideaLinkGql,
          db: ideaLinkDbWrapper,
        }
      },
      stack: {
        children: [],
        gql: sceneStackGql,
        db: sceneStackDbWrapper,
      }
    },
    verse: {
      gql: chapterVerseGql,
      db: chapterVerseDbWrapper,
      children: ['comment', 'member'],
      member: {
        children: [],
        db: verseMemberGql,
        gql: verseMemberDbWrapper,
      },
      comment: {
        children: [],
        db: verseCommentDbWrapper,
        gql: verseCommentGql,
      },
    },
  },
};
