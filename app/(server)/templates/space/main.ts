import { ConversationMessageObj } from '@/(server)/model/space/chapter/conversation/message/main';
import { SpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { SceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { ChapterSceneObj } from '@/(server)/model/space/chapter/scene/main';
import { SpotlightCommentObj } from '@/(server)/model/space/chapter/spotlight/comment/main';
import { ChapterSpotlightObj } from '@/(server)/model/space/chapter/spotlight/main';
import { ChapterWayObj } from '@/(server)/model/space/chapter/way/main';
import { SpaceObj } from '@/(server)/model/space/main';
import { createContext } from 'react';
import { projectManagementTemplate } from './templates/project-management';

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
  | 'collectionId'
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
  objective: string;
  conversations?: TemplateConversationObj[];
}

export interface TemplateConversationObj extends _TemplateConversationObj {
  messages?: TemplateMessageObj[];
}

export interface TemplateMessageObj extends _TemplateMessageObj {}

// SCENE

export type _TemplateSceneObj = Omit<
  ChapterSceneObj,
  'id' | 'chapterId' | 'userId' | 'created'
>;
export type _TemplateIdeaObj = Omit<SceneIdeaObj, 'id' | 'sceneId'>;
export type _TemplateLogObj = Omit<ChapterWayObj, 'id' | 'chapterId'>;

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
  Custom = 'Custom',
  ProjectManagement = 'Project Management',
}

export const SpaceTemplateMap: Record<SpaceTemplate, TemplateSpaceObj> = {
  [SpaceTemplate.ProjectManagement]: projectManagementTemplate,
  [SpaceTemplate.Custom]: {
    title: 'Project Management',
    description:
      'A structured template for managing projects efficiently, from initiation to completion.',
    summary:
      'Organize, plan, and execute projects with clear timelines, milestones, and task ownership.',
    category: 'Management',
    chapters: [
      {
        title: 'Project Planning',
        description: 'Define project scope, objectives, and deliverables.',
        sceneTemplates: [],
        logTemplates: [],
        spotlightTemplates: [],
        objective: '',
        summary: '',
      },
    ],
    objective:
      'Manage your project efficiently with clear goals, tasks, and milestones.',
  },
};
