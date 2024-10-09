import { ConversationMessageObj } from '@/(server)/model/conversation/message/main';
import { IdeaObj } from '@/(server)/model/idea/main';
import { PostCommentObj } from '@/(server)/model/post/comment/main';
import { UserPostObj } from '@/(server)/model/post/main';
import { SpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { ChapterSceneObj } from '@/(server)/model/space/chapter/scene/main';
import { ChapterWayObj } from '@/(server)/model/space/chapter/way/main';
import { SpaceObj } from '@/(server)/model/space/main';
import { createContext } from 'react';
import { brandCreationTemplate } from './templates/brand-creation';
import { designSprintTemplate } from './templates/design-sprint';
import { eventPlanningTemplate } from './templates/event-planning';
import { gameDevelopmentTemplate } from './templates/game-deverlopment';
import { marketingCampaignTemplate } from './templates/marketing-campaign';
import { productLaunchTemplate } from './templates/product-launch';
import { projectManagementTemplate } from './templates/project-management';
import { softwareDevelopmentTemplate } from './templates/software-development';
import { starterTemplate } from './templates/starter-project';
import { startupOrganizationTemplate } from './templates/startup-organization';
import { videoProductionTemplate } from './templates/video-production';

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
export interface TemplateChapterObj extends _TemplateChapterObj {}

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
export type _TemplateIdeaObj = Omit<IdeaObj, 'id' | 'sceneId'>;
export type _TemplateLogObj = Omit<ChapterWayObj, 'id' | 'chapterId'>;

export interface TemplateSceneObj extends _TemplateSceneObj {
  ideas?: _TemplateIdeaObj[];
}

// VERSE
export interface TemplateLogObj extends _TemplateLogObj {}

export type _TemplatePostObj = Omit<UserPostObj, 'id' | 'chapterId'>;
export type _TemplateCommentObj = Omit<
  PostCommentObj,
  'id' | 'userId' | 'postId' | 'time'
>;

export interface TemplatePostObj extends _TemplatePostObj {
  comments?: _TemplateCommentObj[];
}

// TEMPLATES

export enum SpaceTemplate {
  StarterProject = 'Starter Project',
  ProjectManagement = 'Project Management',
  GameDevelopment = 'Game Development',
  SoftwareDevelopment = 'Software Development',
  MarketingCampaign = 'Marketing Campaign',
  ProductLaunch = 'Product Launch',
  StartupOrganization = 'Startup Organization',
  VideoProduction = 'Video Production',
  DesignSprint = 'Design Sprint',
  EventPlanning = 'Event Planning',
  BrandCreation = 'Brand Creation',
  // Execute order 66, when we and I and us and they are ready
  // Video Production
  // Music Production
  // Marketing Campaign
  // Film Production
}

export const SpaceTemplateMap: Record<SpaceTemplate, TemplateSpaceObj> = {
  [SpaceTemplate.ProjectManagement]: projectManagementTemplate,
  [SpaceTemplate.StarterProject]: starterTemplate,
  [SpaceTemplate.GameDevelopment]: gameDevelopmentTemplate,
  [SpaceTemplate.SoftwareDevelopment]: softwareDevelopmentTemplate,
  [SpaceTemplate.MarketingCampaign]: marketingCampaignTemplate,
  [SpaceTemplate.ProductLaunch]: productLaunchTemplate,
  [SpaceTemplate.StartupOrganization]: startupOrganizationTemplate,
  [SpaceTemplate.VideoProduction]: videoProductionTemplate,
  [SpaceTemplate.DesignSprint]: designSprintTemplate,
  [SpaceTemplate.EventPlanning]: eventPlanningTemplate,
  [SpaceTemplate.BrandCreation]: brandCreationTemplate,
};
