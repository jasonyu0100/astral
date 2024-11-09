import { ConversationMessageObj } from '@/architecture/model/conversation/message/main';
import { IdeaObj } from '@/architecture/model/idea/main';
import { PostCommentObj } from '@/architecture/model/post/comment/main';
import { UserPostObj } from '@/architecture/model/post/main';
import { IdeaSceneObj } from '@/architecture/model/scene/main';
import { SpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { SpaceObj } from '@/architecture/model/space/main';
import { TaskObj } from '@/architecture/model/task/main';
import { createContext } from 'react';
import { blankSpaceTemplate } from './templates/blankSpaceTemplate';
import { collaborationHubTemplate } from './templates/collaborationHubTemplate';
import { creativeCampaignTemplate } from './templates/creativeCampaignTemplate';
import { eventPlanningTemplate } from './templates/eventPlanningTemplate';
import { ideationTemplate } from './templates/ideationTemplate';
import { longFormVideoTemplate } from './templates/longFormTemplate';
import { meetingTemplate } from './templates/meetingTemplate';
import { musicAndAudioProductionTemplate } from './templates/musicAndAudioProductionTemplate';
import { prototypeDevelopmentTemplate } from './templates/prototypeDevelopmentTemplate';
import { shortFormVideoTemplate } from './templates/shortFormTemplate';
import { startupTemplate } from './templates/startupTemplate';
import { storyboardTemplate } from './templates/storyboardingTemplate';
import { userTestingTemplate } from './templates/userTestingTemplate';
import { uxUiDesignTemplate } from './templates/uxUiDesignTemplate';
import { videoProductionTemplate } from './templates/videoMediaProductionTemplate';
import { websiteTemplate } from './templates/websiteTemplate';
import { workProjectTemplate } from './templates/workProjectTemplate';

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
  | 'visibility'
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
  'id' | 'spaceId' | 'idx' | 'created' | 'userId' | 'context'
>;
export interface TemplateChapterObj extends _TemplateChapterObj {
  tasks: TemplateTaskObj[];
}

export const ContextForTemplateChapter = createContext(
  {} as TemplateChapterObj,
);

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
  IdeaSceneObj,
  'id' | 'chapterId' | 'userId' | 'created'
>;
export type _TemplateIdeaObj = Omit<IdeaObj, 'id' | 'sceneId'>;
export type _TemplateTaskObj = Omit<
  TaskObj,
  'id' | 'chapterId' | 'userId' | 'created' | 'taskStatus' | 'spaceId'
>;

export interface TemplateSceneObj extends _TemplateSceneObj {
  ideas?: _TemplateIdeaObj[];
}

// VERSE
export interface TemplateTaskObj extends _TemplateTaskObj {}

export type _TemplatePostObj = Omit<UserPostObj, 'id' | 'chapterId'>;
export type _TemplateCommentObj = Omit<
  PostCommentObj,
  'id' | 'userId' | 'postId' | 'time'
>;

export interface TemplatePostObj extends _TemplatePostObj {
  comments?: _TemplateCommentObj[];
}

// TEMPLATES
enum SpaceTemplate {
  Ideation = 'Ideation',
  Storyboarding = 'Story Boarding',
  Minutes = 'Minutes',
  Blank = 'Blank',
  ShortForm = 'Short Form Video',
  LongForm = 'Long Form Video',
  VideoProduction = 'Film Production',
  MusicProduction = 'Music Production',
  Event = 'Event',
  Website = 'Website',
  MarketingCampaign = '📢 Marketing Campaign',
  Project = 'Project',
  Design = 'Design',
  Prototype = 'Prototype',
  Collaboration = 'Collaboration',
  Startup = 'Startup',
  UserTesting = 'User Testing',
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SpaceTemplateMap: Record<SpaceTemplate, TemplateSpaceObj> = {
  [SpaceTemplate.Ideation]: ideationTemplate,
  [SpaceTemplate.LongForm]: longFormVideoTemplate,
  [SpaceTemplate.MusicProduction]: musicAndAudioProductionTemplate,
  [SpaceTemplate.Minutes]: meetingTemplate,
  [SpaceTemplate.ShortForm]: shortFormVideoTemplate,
  [SpaceTemplate.Startup]: startupTemplate,
  [SpaceTemplate.Project]: workProjectTemplate,
  [SpaceTemplate.MarketingCampaign]: creativeCampaignTemplate,
  [SpaceTemplate.Prototype]: prototypeDevelopmentTemplate,
  [SpaceTemplate.Collaboration]: collaborationHubTemplate,
  [SpaceTemplate.Design]: uxUiDesignTemplate,
  [SpaceTemplate.VideoProduction]: videoProductionTemplate,
  [SpaceTemplate.Website]: websiteTemplate,
  [SpaceTemplate.Storyboarding]: storyboardTemplate,
  [SpaceTemplate.UserTesting]: userTestingTemplate,
  [SpaceTemplate.Event]: eventPlanningTemplate,
  [SpaceTemplate.Blank]: blankSpaceTemplate,
};

export { SpaceTemplate as SpaceTemplate, SpaceTemplateMap as SpaceTemplateMap };
