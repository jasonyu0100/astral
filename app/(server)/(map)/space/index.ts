import { chatConversationDbWrapper } from '@/(server)/(db)/space/chapter/chat/conversation/main';
import { conversationMessageDbWrapper } from '@/(server)/(db)/space/chapter/chat/conversation/message/main';
import { chapterChatDbWrapper } from '@/(server)/(db)/space/chapter/chat/main';
import { chatMemberDbWrapper } from '@/(server)/(db)/space/chapter/chat/member/main';
import { spaceChapterDbWrapper } from '@/(server)/(db)/space/chapter/main';
import { ideaLinkDbWrapper } from '@/(server)/(db)/space/chapter/scene/idea/link/main';
import { sceneIdeaDbWrapper } from '@/(server)/(db)/space/chapter/scene/idea/main';
import { chapterSceneDbWrapper } from '@/(server)/(db)/space/chapter/scene/main';
import { sceneStackDbWrapper } from '@/(server)/(db)/space/chapter/scene/stack/main';
import { chapterUpdateItemDbWrapper } from '@/(server)/(db)/space/chapter/update/item/main';
import { chapterUpdateMemberDbWrapper } from '@/(server)/(db)/space/chapter/update/item/member/main';
import { chapterUpdateDbWrapper } from '@/(server)/(db)/space/chapter/update/main';
import { verseCommentDbWrapper } from '@/(server)/(db)/space/chapter/verse/comment/main';
import { chapterVerseDbWrapper } from '@/(server)/(db)/space/chapter/verse/main';
import { spaceDbWrapper } from '@/(server)/(db)/space/main';
import { spaceMemberDbWrapper } from '@/(server)/(db)/space/member/main';
import { chatMemberModel } from '@/(server)/(model)/space/chapter/chat/member/main';
import { ideaLinkModel } from '@/(server)/(model)/space/chapter/scene/idea/link/main';
import { sceneStackGql } from '@/(server)/(model)/space/chapter/scene/stack/main';
import { chapterUpdateItemModel } from '@/(server)/(model)/space/chapter/update/item/main';
import { chapterUpdateMemberItemModel } from '@/(server)/(model)/space/chapter/update/item/member/main';
import {
  verseMemberGql,
  verseMemberModel,
} from '@/(server)/(model)/space/chapter/verse/member/main';
import { spaceMemberModel } from '@/(server)/(model)/space/member/main';
import { chatConversationModel } from '../../(model)/space/chapter/chat/conversation/main';
import { conversationMessageModel } from '../../(model)/space/chapter/chat/conversation/message/main';
import { chapterChatModel } from '../../(model)/space/chapter/chat/main';
import { spaceChapterModel } from '../../(model)/space/chapter/main';
import { sceneIdeaModel } from '../../(model)/space/chapter/scene/idea/main';
import { chapterSceneModel } from '../../(model)/space/chapter/scene/main';
import { chapterUpdateModel } from '../../(model)/space/chapter/update/main';
import { verseCommentModel } from '../../(model)/space/chapter/verse/comment/main';
import { chapterVerseModel } from '../../(model)/space/chapter/verse/main';
import { spaceModel } from '../../(model)/space/main';

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
    update: {
      model: chapterUpdateModel,
      db: chapterUpdateDbWrapper,
      member: {
        model: chapterUpdateMemberItemModel,
        db: chapterUpdateMemberDbWrapper,
      },
      item: {
        model: chapterUpdateItemModel,
        db: chapterUpdateItemDbWrapper,
      },
    },
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
