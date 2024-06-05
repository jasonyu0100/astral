import { SpaceVariant } from '../main';
import { barTemplate } from './bar/main';
import { customTemplate } from './custom/main';
import { ideaTemplate } from './idea/main';
import { songMixTemplate } from './mix/main';
import { songSpaceTemplate } from './song/main';
import { MessageObj } from '@/(model)/space/chapter/chat/conversation/message/main';
import { ChapterObj } from '../chapter/main';
import { IdeaObj } from '../chapter/scene/idea/main';
import { VerseObj } from '../chapter/verse/main';
import { CommentObj } from '../chapter/verse/comment/main';

export type _TemplateChapterObj = Omit<ChapterObj, 'id' | 'spaceId' | 'idx'>;
export interface TemplateChapterObj extends _TemplateChapterObj {
  chatTemplates?: TemplateChatObj;
  sceneTemplates?: TemplateSceneObj;
  verseTemplates?: TemplateSceneObj;
  retroTemplates?: TemplateSceneObj;
}

// CHAT

export type _TemplateChatObj = Omit<ChapterObj, 'id' | 'chapterId' | 'time' >;
export type _TemplateConversationObj = Omit<ChapterObj, 'id' | 'chatId' | 'time' >;
export type _TemplateMessageObj = Omit<MessageObj, 'id' | 'userId' | 'conversationId' | 'time'>;
export interface TemplateChatObj extends _TemplateChatObj {
  title: string;
  summary: string;
  conversations?: TemplateConversationObj[];
}

export interface TemplateConversationObj extends _TemplateConversationObj {
  messages?: TemplateMessageObj[];
}

export interface TemplateMessageObj extends _TemplateMessageObj {

}

// SCENE

export type _TemplateSceneObj = Omit<ChapterObj, 'id' | 'chapterId' >;
export type _TemplateIdeaObj = Omit<IdeaObj, 'id' | 'sceneId' >;

export interface TemplateSceneObj {
  ideas?: _TemplateIdeaObj[];
}

// VERSE

export type _TemplateVerseObj = Omit<VerseObj, 'id' | 'chapterId' >;
export type _TemplateCommentObj = Omit<CommentObj, 'id' | 'userId' | 'verseId' | 'time'>;

export interface TemplateVerseObj extends _TemplateVerseObj {
  comments?: _TemplateCommentObj[];
}

// RETRO

export type _TemplateRetroObj = Omit<ChapterObj, 'id' | 'chapterId' >;
export type _TemplateContributionObj = Omit<ChapterObj, 'id' | 'retroId' | 'time' >;

export interface TemplateRetroObj extends _TemplateRetroObj {
  contributions?: _TemplateContributionObj[];
}

// GETTER

export function getSpaceTemplate(variant: SpaceVariant): TemplateChapterObj[] {
  switch (variant) {
    case SpaceVariant.SONG:
      return songSpaceTemplate;
    case SpaceVariant.MIX:
      return songMixTemplate;
    case SpaceVariant.BAR:
      return barTemplate;
    case SpaceVariant.IDEA:
      return ideaTemplate;
    case SpaceVariant.CUSTOM:
      return customTemplate;
  }
  return customTemplate;
}
