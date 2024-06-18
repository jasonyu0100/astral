import { ConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { ChapterSceneObj } from '@/(server)/(model)/space/chapter/scene/main';
import { SpaceObj } from '@/(server)/(model)/space/main';
import { SpaceChapterObj } from '../../(model)/space/chapter/main';
import { SceneIdeaObj } from '../../(model)/space/chapter/scene/idea/main';
import { VerseCommentObj } from '../../(model)/space/chapter/verse/comment/main';
import { ChapterVerseObj } from '../../(model)/space/chapter/verse/main';
import { defaultTemplate } from './general/custom/main';
import { ideaTemplate } from './general/idea/main';
import { barTemplate } from './music/bar/main';
import { songMixTemplate } from './music/mix/main';
import { songSpaceTemplate } from './music/song/main';

// SPACE

export type _TemplateSpaceObj = Omit<
  SpaceObj,
  'id' | 'userId' | 'created' | 'thumbnail' | 'galleryId' | 'hours' | 'target'
>;

export interface TemplateSpaceObj extends _TemplateSpaceObj {
  title: string;
  description: string;
  category: string;
  chapters: TemplateChapterObj[];
}

// CHAPTER

export type _TemplateChapterObj = Omit<
  SpaceChapterObj,
  'id' | 'spaceId' | 'idx' | 'created' | 'userId'
>;
export interface TemplateChapterObj extends _TemplateChapterObj {
  chatTemplates: TemplateChatObj[];
  sceneTemplates: TemplateSceneObj[];
  verseTemplates: TemplateVerseObj[];
}

// CHAT

export type _TemplateChatObj = Omit<
  SpaceChapterObj,
  'id' | 'chapterId' | 'created'
>;
export type _TemplateConversationObj = Omit<
  SpaceChapterObj,
  'id' | 'chatId' | 'created'
>;
export type _TemplateMessageObj = Omit<
  ConversationMessageObj,
  'id' | 'userId' | 'conversationId' | 'created'
>;
export interface TemplateChatObj extends _TemplateChatObj {
  title: string;
  description: string;
  conversations?: TemplateConversationObj[];
}

export interface TemplateConversationObj extends _TemplateConversationObj {
  messages?: TemplateMessageObj[];
}

export interface TemplateMessageObj extends _TemplateMessageObj {}

// SCENE

export type _TemplateSceneObj = Omit<ChapterSceneObj, 'id' | 'chapterId'>;
export type _TemplateIdeaObj = Omit<SceneIdeaObj, 'id' | 'sceneId'>;

export interface TemplateSceneObj extends _TemplateSceneObj {
  ideas?: _TemplateIdeaObj[];
}

// VERSE

export type _TemplateVerseObj = Omit<ChapterVerseObj, 'id' | 'chapterId'>;
export type _TemplateCommentObj = Omit<
  VerseCommentObj,
  'id' | 'userId' | 'verseId' | 'time'
>;

export interface TemplateVerseObj extends _TemplateVerseObj {
  comments?: _TemplateCommentObj[];
}

// TEMPLATES

export enum SpaceTemplate {
  MIX = 'MIX',
  SONG = 'SONG',
  BAR = 'BAR',
  IDEA = 'IDEA',
  DEFAULT = 'DEFAULT',
}

export function getSpaceTemplates(variant: SpaceTemplate): TemplateSpaceObj {
  switch (variant) {
    case SpaceTemplate.SONG:
      return songSpaceTemplate;
    case SpaceTemplate.MIX:
      return songMixTemplate;
    case SpaceTemplate.BAR:
      return barTemplate;
    case SpaceTemplate.IDEA:
      return ideaTemplate;
    case SpaceTemplate.DEFAULT:
      return defaultTemplate;
  }
  return defaultTemplate;
}
