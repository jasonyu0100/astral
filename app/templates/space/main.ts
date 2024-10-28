import { ConversationMessageObj } from '@/server/model/conversation/message/main';
import { IdeaObj } from '@/server/model/idea/main';
import { PostCommentObj } from '@/server/model/post/comment/main';
import { UserPostObj } from '@/server/model/post/main';
import { IdeaSceneObj } from '@/server/model/scene/main';
import { SpaceChapterObj } from '@/server/model/space/chapter/main';
import { SpaceObj } from '@/server/model/space/main';
import { TaskObj } from '@/server/model/task/main';
import { createContext } from 'react';
import { blankSpaceTemplate } from './new-templates/blankSpaceTemplate';
import { collaborationHubTemplate } from './new-templates/collaborationHubTemplate';
import { creativeCampaignTemplate } from './new-templates/creativeCampaignTemplate';
import { eventPlanningTemplate } from './new-templates/eventPlanningTemplate';
import { freelancingTaskTemplate } from './new-templates/freelancingTaskTemplate';
import { ideationTemplate } from './new-templates/ideationTemplate';
import { meetingTemplate } from './new-templates/meetingTemplate';
import { musicAndAudioProductionTemplate } from './new-templates/musicAndAudioProductionTemplate';
import { prototypeDevelopmentTemplate } from './new-templates/prototypeDevelopmentTemplate';
import { startupTemplate } from './new-templates/startupTemplate';
import { storyboardTemplate } from './new-templates/storyboardingTemplate';
import { userTestingTemplate } from './new-templates/userTestingTemplate';
import { uxUiDesignTemplate } from './new-templates/uxUiDesignTemplate';
import { videoProductionTemplate } from './new-templates/videoMediaProductionTemplate';

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
  Ideation = '💡 Ideation',
  Minutes = '📝 Minutes',
  Storyboarding = '📖 Storyboarding',
  UserTesting = '👥 User Testing',
  DesignJam = '🎨 Design Jam',
  EventPlanning = '🎉 Event Planning',
  VideoProduction = '🎥 Video Production',
  MusicProduction = '🎶 Music Production',
  FreelancingProject = '💼 Freelancing Task',
  MarketingCampaign = '📢 Marketing Campaign',
  Prototype = '🔧 Prototype',
  Startup = '🚀 Startup',
  Collaboration = '🤝 Collaboration Hub',
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NewSpaceTemplateMap: Record<NewSpaceTemplate, TemplateSpaceObj> = {
  [NewSpaceTemplate.BlankSpace]: blankSpaceTemplate,
  [NewSpaceTemplate.Minutes]: meetingTemplate,
  [NewSpaceTemplate.FreelancingProject]: freelancingTaskTemplate,
  [NewSpaceTemplate.Ideation]: ideationTemplate,
  [NewSpaceTemplate.Startup]: startupTemplate,
  [NewSpaceTemplate.Collaboration]: collaborationHubTemplate,
  [NewSpaceTemplate.MarketingCampaign]: creativeCampaignTemplate,
  [NewSpaceTemplate.Prototype]: prototypeDevelopmentTemplate,
  [NewSpaceTemplate.VideoProduction]: videoProductionTemplate,
  [NewSpaceTemplate.DesignJam]: uxUiDesignTemplate,
  [NewSpaceTemplate.MusicProduction]: musicAndAudioProductionTemplate,
  [NewSpaceTemplate.Storyboarding]: storyboardTemplate,
  [NewSpaceTemplate.UserTesting]: userTestingTemplate,
  [NewSpaceTemplate.EventPlanning]: eventPlanningTemplate,
};

export {
  NewSpaceTemplate as SpaceTemplate,
  NewSpaceTemplateMap as SpaceTemplateMap,
};
