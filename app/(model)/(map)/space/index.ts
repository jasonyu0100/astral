import { reservationDbWrapper } from '@/(model)/(db)/user/reservation/main';
import { chatConversationGql } from '../../space/chapter/chat/conversation/main';
import { conversationMessageGql } from '../../space/chapter/chat/conversation/message/main';
import { chapterChatGql } from '../../space/chapter/chat/main';
import { spaceChapterGql } from '../../space/chapter/main';
import { retroContributionGql } from '../../space/chapter/retro/contribution/main';
import { chapterRetroGql } from '../../space/chapter/retro/main';
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
import { chapterRetroDbWrapper } from '@/(model)/(db)/space/chapter/retro/main';
import { retroContributionDbWrapper } from '@/(model)/(db)/space/chapter/retro/contribution/main';
import { chapterSceneDbWrapper } from '@/(model)/(db)/space/chapter/scene/main';
import { sceneideaDbWrapper } from '@/(model)/(db)/space/chapter/scene/idea/main';
import { chapterVerseDbWrapper } from '@/(model)/(db)/space/chapter/verse/main';
import { verseCommentDbWrapper } from '@/(model)/(db)/space/chapter/verse/comment/main';
import { chatMemberGql } from '@/(model)/space/chapter/chat/member/main';
import { chatMemberDbWrapper } from '@/(model)/(db)/space/chapter/chat/member/main';
import { spaceMemberGql } from '@/(model)/space/member/main';
import { verseMemberGql } from '@/(model)/space/chapter/verse/member/main';
import { verseMemberDbWrapper } from '@/(model)/(db)/space/chapter/verse/member/main';
import { retroMemberGql } from '@/(model)/space/chapter/retro/member/main';
import { retroMemberDbWrapper } from '@/(model)/(db)/space/chapter/retro/member/main';

export const spaceMap = {
  children: ['chapter', 'member'],
  gql: spaceGql,
  db: spaceDbWrapper,
  member: {
    children: [],
    gql: spaceMemberGql,
    db: null
  },
  chapter: {
    gql: spaceChapterGql,
    db: spaceChapterDbWrapper,
    children: ['chat', 'retro', 'scene', 'verse'],
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
    retro: {
      gql: chapterRetroGql,
      db: chapterRetroDbWrapper,
      children: ['contribution', 'member'],
      member: {
        children: [],
        db: retroMemberDbWrapper,
        gql: retroMemberGql,
      },
      contribution: {
        children: [],
        db: retroContributionDbWrapper,
        gql: retroContributionGql,
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
