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
import { freelancingTaskTemplate } from './templates/freelancingTaskTemplate';
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
  BlankSpace = '🟡 Blank Space',
  Ideation = '💡 Ideation',
  Minutes = '📝 Minutes',
  Storyboarding = '📖 Storyboarding',
  UserTesting = '👥 User Testing',
  DesignJam = '🎨 Design Jam',
  EventPlanning = '🎉 Event Planning',
  Website = '🌐 Website',
  VideoProduction = '🎥 Video Production',
  LongForm = '🎥 Long Form Video',
  ShortForm = '🎬 Short Form Video',
  MusicProduction = '🎶 Music Production',
  FreelancingProject = '💼 Freelancing Task',
  MarketingCampaign = '📢 Marketing Campaign',
  Prototype = '🔧 Prototype',
  Startup = '🚀 Startup',
  CollaborationSpace = '🤝 Collaboration Space',
  WorkProject = '💼 Work Project',
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SpaceTemplateMap: Record<SpaceTemplate, TemplateSpaceObj> = {
  [SpaceTemplate.BlankSpace]: blankSpaceTemplate,
  [SpaceTemplate.Ideation]: ideationTemplate,
  [SpaceTemplate.Minutes]: meetingTemplate,
  [SpaceTemplate.FreelancingProject]: freelancingTaskTemplate,
  [SpaceTemplate.WorkProject]: workProjectTemplate,
  [SpaceTemplate.Startup]: startupTemplate,
  [SpaceTemplate.CollaborationSpace]: collaborationHubTemplate,
  [SpaceTemplate.MarketingCampaign]: creativeCampaignTemplate,
  [SpaceTemplate.Prototype]: prototypeDevelopmentTemplate,
  [SpaceTemplate.VideoProduction]: videoProductionTemplate,
  [SpaceTemplate.DesignJam]: uxUiDesignTemplate,
  [SpaceTemplate.Website]: websiteTemplate,
  [SpaceTemplate.MusicProduction]: musicAndAudioProductionTemplate,
  [SpaceTemplate.Storyboarding]: storyboardTemplate,
  [SpaceTemplate.UserTesting]: userTestingTemplate,
  [SpaceTemplate.EventPlanning]: eventPlanningTemplate,
  [SpaceTemplate.LongForm]: longFormVideoTemplate,
  [SpaceTemplate.ShortForm]: shortFormVideoTemplate,
};

export { SpaceTemplate as SpaceTemplate, SpaceTemplateMap as SpaceTemplateMap };
