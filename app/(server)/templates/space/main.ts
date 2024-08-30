import { ChapterLogObj } from '@/(server)/model/space/chapter/log/main';
import { SpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { ConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { SceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { ChapterSceneObj } from '@/(server)/model/space/chapter/scene/main';
import { SpotlightCommentObj } from '@/(server)/model/space/chapter/spotlight/comment/main';
import { ChapterSpotlightObj } from '@/(server)/model/space/chapter/spotlight/main';
import { SpaceObj } from '@/(server)/model/space/main';
import { createContext } from 'react';
import { defaultTemplate } from './general/custom/main';
import { ideaTemplate } from './general/idea/main';
import { barTemplate } from './music/bar/main';
import { songMixTemplate } from './music/mix/main';
import { songSpaceTemplate } from './music/song/main';

// SPACE

export type _TemplateSpaceObj = Omit<
  SpaceObj,
  | 'id'
  | 'userId'
  | 'created'
  | 'thumbnail'
  | 'galleryId'
  | 'hours'
  | 'target'
  | 'starred'
  | 'completed'
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
  sceneTemplates: TemplateSceneObj[];
  logTemplates: TemplateLogObj[];
  spotlightTemplates: TemplateSpotlightObj[];
}

export const ContextForTemplateChapter = createContext(
  {} as TemplateChapterObj,
);

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
export type _TemplateLogObj = Omit<ChapterLogObj, 'id' | 'chapterId'>;

export interface TemplateSceneObj extends _TemplateSceneObj {
  ideas?: _TemplateIdeaObj[];
}

// VERSE
export interface TemplateLogObj extends _TemplateLogObj {}

export type _TemplateSpotlightObj = Omit<
  ChapterSpotlightObj,
  'id' | 'chapterId'
>;
export type _TemplateCommentObj = Omit<
  SpotlightCommentObj,
  'id' | 'userId' | 'spotlightId' | 'time'
>;

export interface TemplateSpotlightObj extends _TemplateSpotlightObj {
  comments?: _TemplateCommentObj[];
}

// TEMPLATES

export enum SpaceTemplate {
  Mix = 'Mix',
  Melody = 'Melody',
  Song = 'Song',
  Brainstorm = 'Brainstorm',
  Project = 'Project',
}

export function getSpaceTemplates(variant: SpaceTemplate): TemplateSpaceObj {
  switch (variant) {
    case SpaceTemplate.Melody:
      return songSpaceTemplate;
    case SpaceTemplate.Mix:
      return songMixTemplate;
    case SpaceTemplate.Song:
      return barTemplate;
    case SpaceTemplate.Brainstorm:
      return ideaTemplate;
    case SpaceTemplate.Project:
      return defaultTemplate;
  }
  return defaultTemplate;
}
