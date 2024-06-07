import { barTemplate } from './music/bar/main';
import { customTemplate } from './general/custom/main';
import { ideaTemplate } from './general/idea/main';
import { songMixTemplate } from './music/mix/main';
import { songSpaceTemplate } from './music/song/main';
import { ConversationMessageObj } from '@/(model)/space/chapter/chat/conversation/message/main';
import { SpaceChapterObj } from '../../space/chapter/main';
import { SceneIdeaObj } from '../../space/chapter/scene/idea/main';
import { ChapterVerseObj } from '../../space/chapter/verse/main';
import { VerseCommentObj } from '../../space/chapter/verse/comment/main';
import { SpaceObj } from '@/(model)/space/main';

// SPACE

export type _TemplateSpaceObj = Omit<SpaceObj, 'id' | 'userId' | 'created' | 'thumbnail'>;

export interface TemplateSpaceObj extends _TemplateSpaceObj{
  title: string;
  description: string;
  category: string;
  chapters: TemplateChapterObj[];
}

// CHAPTER

export type _TemplateChapterObj = Omit<SpaceChapterObj, 'id' | 'spaceId' | 'idx' | 'created'>;
export interface TemplateChapterObj extends _TemplateChapterObj {
  chatTemplates: TemplateChatObj[];
  sceneTemplates: TemplateSceneObj[];
  verseTemplates: TemplateVerseObj[];
  retroTemplates: TemplateRetroObj[];
}

// CHAT

export type _TemplateChatObj = Omit<SpaceChapterObj, 'id' | 'chapterId' | 'created' >;
export type _TemplateConversationObj = Omit<SpaceChapterObj, 'id' | 'chatId' | 'created' >;
export type _TemplateMessageObj = Omit<ConversationMessageObj, 'id' | 'userId' | 'conversationId' | 'created'>;
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

export type _TemplateSceneObj = Omit<SpaceChapterObj, 'id' | 'chapterId' >;
export type _TemplateIdeaObj = Omit<SceneIdeaObj, 'id' | 'sceneId' >;

export interface TemplateSceneObj {
  ideas?: _TemplateIdeaObj[];
}

// VERSE

export type _TemplateVerseObj = Omit<ChapterVerseObj, 'id' | 'chapterId' >;
export type _TemplateCommentObj = Omit<VerseCommentObj, 'id' | 'userId' | 'verseId' | 'time'>;

export interface TemplateVerseObj extends _TemplateVerseObj {
  comments?: _TemplateCommentObj[];
}

// RETRO

export type _TemplateRetroObj = Omit<SpaceChapterObj, 'id' | 'chapterId' >;
export type _TemplateContributionObj = Omit<SpaceChapterObj, 'id' | 'retroId' | 'time' >;

export interface TemplateRetroObj extends _TemplateRetroObj {
  contributions?: _TemplateContributionObj[];
}

// TEMPLATES

export enum SpaceTemplate {
  MIX = 'MIX',
  SONG = 'SONG',
  BAR = 'BAR',
  IDEA = 'IDEA',
  CUSTOM = 'CUSTOM',
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
    case SpaceTemplate.CUSTOM:
      return customTemplate;
  }
  return customTemplate;
}
