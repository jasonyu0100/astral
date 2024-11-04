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
import { meetingTemplate } from './templates/meetingTemplate';
import { musicAndAudioProductionTemplate } from './templates/musicAndAudioProductionTemplate';
import { prototypeDevelopmentTemplate } from './templates/prototypeDevelopmentTemplate';
import { startupTemplate } from './templates/startupTemplate';
import { storyboardTemplate } from './templates/storyboardingTemplate';
import { tutorialSpaceTemplate } from './templates/tutorialSpaceTemplate';
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
  'id' | 'spaceId' | 'idx' | 'created' | 'userId'
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
  'id' | 'chapterId' | 'userId' | 'created' | 'taskStatus'
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
enum NewSpaceTemplate {
  BlankSpace = '🟡 Blank Space',
  TutorialSpace = '📚 Tutorial Space',
  Ideation = '💡 Ideation',
  Minutes = '📝 Minutes',
  Storyboarding = '📖 Storyboarding',
  UserTesting = '👥 User Testing',
  DesignJam = '🎨 Design Jam',
  EventPlanning = '🎉 Event Planning',
  Website = '🌐 Website',
  VideoProduction = '🎥 Video Production',
  MusicProduction = '🎶 Music Production',
  FreelancingProject = '💼 Freelancing Task',
  MarketingCampaign = '📢 Marketing Campaign',
  Prototype = '🔧 Prototype',
  Startup = '🚀 Startup',
  CollaborationSpace = '🤝 Collaboration Space',
  WorkProject = '💼 Work Project',
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NewSpaceTemplateMap: Record<NewSpaceTemplate, TemplateSpaceObj> = {
  [NewSpaceTemplate.BlankSpace]: blankSpaceTemplate,
  [NewSpaceTemplate.TutorialSpace]: tutorialSpaceTemplate,
  [NewSpaceTemplate.Ideation]: ideationTemplate,
  [NewSpaceTemplate.Minutes]: meetingTemplate,
  [NewSpaceTemplate.FreelancingProject]: freelancingTaskTemplate,
  [NewSpaceTemplate.WorkProject]: workProjectTemplate,
  [NewSpaceTemplate.Startup]: startupTemplate,
  [NewSpaceTemplate.CollaborationSpace]: collaborationHubTemplate,
  [NewSpaceTemplate.MarketingCampaign]: creativeCampaignTemplate,
  [NewSpaceTemplate.Prototype]: prototypeDevelopmentTemplate,
  [NewSpaceTemplate.VideoProduction]: videoProductionTemplate,
  [NewSpaceTemplate.DesignJam]: uxUiDesignTemplate,
  [NewSpaceTemplate.Website]: websiteTemplate,
  [NewSpaceTemplate.MusicProduction]: musicAndAudioProductionTemplate,
  [NewSpaceTemplate.Storyboarding]: storyboardTemplate,
  [NewSpaceTemplate.UserTesting]: userTestingTemplate,
  [NewSpaceTemplate.EventPlanning]: eventPlanningTemplate,
};

export {
  NewSpaceTemplate as SpaceTemplate,
  NewSpaceTemplateMap as SpaceTemplateMap,
};
