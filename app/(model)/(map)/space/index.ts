import { reservationDbWrapper } from '@/(model)/(db)/user/reservation/main';
import { chatConversationGql } from '../../space/chapter/chat/conversation/main';
import { conversationMessageGql } from '../../space/chapter/chat/conversation/message/main';
import { chapterChatGql } from '../../space/chapter/chat/main';
import { spaceChapterGql } from '../../space/chapter/main';
import { spaceUpdateGql } from '../../space/update/main';
import { sceneIdeaGql } from '../../space/chapter/scene/idea/main';
import { chapterSceneGql } from '../../space/chapter/scene/main';
import { verseCommentGql } from '../../space/chapter/verse/comment/main';
import { chapterVerseGql } from '../../space/chapter/verse/main';
import { spaceGql } from '../../space/main';
import { spaceDbWrapper } from '@/(model)/(db)/space/main';
import { spaceChapterDbWrapper } from '@/(model)/(db)/space/chapter/main';
import { chapterChatDbWrapper } from '@/(model)/(db)/space/chapter/chat/main';
import { chatConversationDbWrapper } from '@/(model)/(db)/space/chapter/chat/conversation/main';
import { conversationMessageDbWrapper } from '@/(model)/(db)/space/chapter/chat/conversation/message/main';
import { spaceUpdateDbWrapper } from '@/(model)/(db)/space/update/main';
import { spaceUpdateAddDbWrapper } from '@/(model)/(db)/space/update/add/main';
import { chapterSceneDbWrapper } from '@/(model)/(db)/space/chapter/scene/main';
import { sceneideaDbWrapper } from '@/(model)/(db)/space/chapter/scene/idea/main';
import { chapterVerseDbWrapper } from '@/(model)/(db)/space/chapter/verse/main';
import { verseCommentDbWrapper } from '@/(model)/(db)/space/chapter/verse/comment/main';
import { chatMemberGql } from '@/(model)/space/chapter/chat/member/main';
import { chatMemberDbWrapper } from '@/(model)/(db)/space/chapter/chat/member/main';
import { spaceMemberGql } from '@/(model)/space/member/main';
import { verseMemberGql } from '@/(model)/space/chapter/verse/member/main';
import { verseMemberDbWrapper } from '@/(model)/(db)/space/chapter/verse/member/main';
import { spaceUpdateMemberGql } from '@/(model)/space/update/member/main';
import { spaceUpdateMemberDbWrapper } from '@/(model)/(db)/space/update/member/main';
import { spaceUpdateAddGql } from '@/(model)/space/update/add/main';
import { spaceMemberDbWrapper } from '@/(model)/(db)/space/member/main';

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
        children: [],
        gql: sceneIdeaGql,
        db: sceneideaDbWrapper,
      },
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
