import { ChapterLogObj } from '@/(server)/model/space/chapter/log/main';
import { SpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { ConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { SceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { ChapterSceneObj } from '@/(server)/model/space/chapter/scene/main';
import { SpotlightCommentObj } from '@/(server)/model/space/chapter/spotlight/comment/main';
import { ChapterSpotlightObj } from '@/(server)/model/space/chapter/spotlight/main';
import { SpaceObj } from '@/(server)/model/space/main';
import { createContext } from 'react';
import { blogPostTemplate } from './templates/blog-post/main';
import { businessPlanTemplate } from './templates/business-plan/main';
import { clientOnboardingTemplate } from './templates/client-onboarding/main';
import { companyTemplate } from './templates/company/main';
import { contentCalendarTemplate } from './templates/content-calendar/main';
import { courseDevelopmentTemplate } from './templates/course-development/main';
import { starterProjectTemplate } from './templates/custom/main';
import { emailCampaignTemplate } from './templates/email-campaign/main';
import { eventPlanningTemplate } from './templates/event-planning/main';
import { productLaunchTemplate } from './templates/product-launch/main';
import { projectManagementTemplate } from './templates/product-management/main';
import { socialMediaPostTemplate } from './templates/social-media-post/main';
import { startupTemplate } from './templates/startup/main';
import { userJourneyMappingTemplate } from './templates/user-journey/main';
import { videoProjectTemplate } from './templates/video/main';

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
  Custom = 'Custom',
  Video = 'Video',
  Startup = 'Startup',
  Business = 'Business',
  MarketingBrand = 'Marketing Brand',
  SocialMediaPost = 'Social Post',
  BlogPost = 'Blog Post',
  ProductLaunch = 'Product Launch',
  EventPlanning = 'Event Planning',
  EmailCampaign = 'Email Campaign',
  ProjectManagement = 'Project Management',
  CourseDevelopment = 'Course Development',
  BusinessPlan = 'Business Plan',
  ClientOnboarding = 'Client Onboarding',
  UserJourney = 'User Journey',
  ContentCalendar = 'Content Calendar',
}

export function getSpaceTemplates(variant: SpaceTemplate): TemplateSpaceObj {
  switch (variant) {
    case SpaceTemplate.Business:
      return companyTemplate;
    case SpaceTemplate.Startup:
      return startupTemplate;
    case SpaceTemplate.Video:
      return videoProjectTemplate;
    case SpaceTemplate.SocialMediaPost:
      return socialMediaPostTemplate;
    case SpaceTemplate.BlogPost:
      return blogPostTemplate;
    case SpaceTemplate.ProductLaunch:
      return productLaunchTemplate;
    case SpaceTemplate.EventPlanning:
      return eventPlanningTemplate;
    case SpaceTemplate.EmailCampaign:
      return emailCampaignTemplate;
    case SpaceTemplate.ProjectManagement:
      return projectManagementTemplate;
    case SpaceTemplate.CourseDevelopment:
      return courseDevelopmentTemplate;
    case SpaceTemplate.BusinessPlan:
      return businessPlanTemplate;
    case SpaceTemplate.ClientOnboarding:
      return clientOnboardingTemplate;
    case SpaceTemplate.UserJourney:
      return userJourneyMappingTemplate;
    case SpaceTemplate.ContentCalendar:
      return contentCalendarTemplate;
    default:
      return starterProjectTemplate;
  }
}
