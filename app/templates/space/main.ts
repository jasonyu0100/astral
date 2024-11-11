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
import { creativeCampaignTemplate } from './templates/creativeCampaignTemplate';
import { eventPlanningTemplate } from './templates/eventPlanningTemplate';
import { ideationTemplate } from './templates/ideationTemplate';
import { longFormVideoTemplate } from './templates/longFormTemplate';
import { meetingTemplate } from './templates/meetingTemplate';
import { musicAndAudioProductionTemplate } from './templates/musicAndAudioProductionTemplate';
import { shortFormVideoTemplate } from './templates/shortFormTemplate';
import { socialMediaPostTemplate } from './templates/socialPostTemplate';
import { startupTemplate } from './templates/startupTemplate';
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
  Minutes = 'Minutes',
  Blank = 'Blank',
  ShortForm = 'Short Form Video',
  LongForm = 'Long Form Video',
  VideoProduction = 'Film Production',
  MusicProduction = 'Music Production',
  Event = 'Event',
  Website = 'Website',
  Marketing = 'Marketing',
  Project = 'Project',
  Startup = 'Startup',
  SocialPost = 'Social Post',
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SpaceTemplateMap: Record<SpaceTemplate, TemplateSpaceObj> = {
  [SpaceTemplate.Ideation]: ideationTemplate,
  [SpaceTemplate.LongForm]: longFormVideoTemplate,
  [SpaceTemplate.MusicProduction]: musicAndAudioProductionTemplate,
  [SpaceTemplate.SocialPost]: socialMediaPostTemplate,
  [SpaceTemplate.Minutes]: meetingTemplate,
  [SpaceTemplate.ShortForm]: shortFormVideoTemplate,
  [SpaceTemplate.Project]: workProjectTemplate,
  [SpaceTemplate.Marketing]: creativeCampaignTemplate,
  [SpaceTemplate.VideoProduction]: videoProductionTemplate,
  [SpaceTemplate.Event]: eventPlanningTemplate,
  [SpaceTemplate.Blank]: blankSpaceTemplate,
  [SpaceTemplate.Website]: websiteTemplate,
  [SpaceTemplate.Startup]: startupTemplate,
};

export { SpaceTemplate as SpaceTemplate, SpaceTemplateMap as SpaceTemplateMap };
