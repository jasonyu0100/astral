import { ConversationMessageObj } from '@/(server)/model/conversation/message/main';
import { IdeaObj } from '@/(server)/model/idea/main';
import { PostCommentObj } from '@/(server)/model/post/comment/main';
import { UserPostObj } from '@/(server)/model/post/main';
import { IdeaSceneObj } from '@/(server)/model/scene/main';
import { SpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { SpaceObj } from '@/(server)/model/space/main';
import { TaskObj } from '@/(server)/model/task/main';
import { createContext } from 'react';
import { animationTemplate } from './new-templates/animationTemplate';
import { blankSpaceTemplate } from './new-templates/blankSpaceTemplate';
import { collaborationHubTemplate } from './new-templates/collaborationHubTemplate';
import { contentCreationTemplate } from './new-templates/contentCreationTemplate';
import { creativeCampaignTemplate } from './new-templates/creativeCampaignTemplate';
import { freelancingTaskTemplate } from './new-templates/freelancingTaskTemplate';
import { hackathonProjectTemplate } from './new-templates/hackathonProjectTemplate';
import { ideationTemplate } from './new-templates/ideationTemplate';
import { musicAndAudioProductionTemplate } from './new-templates/musicAndAudioProductionTemplate';
import { photographyAndArtTemplate } from './new-templates/photographyAndArtTemplate';
import { prototypeDevelopmentTemplate } from './new-templates/prototypeDevelopmentTemplate';
import { sprintChallengeTemplate } from './new-templates/sprintChallengeTemplate';
import { newStarterProjectTemplate } from './new-templates/starterTemplate';
import { uxUiDesignTemplate } from './new-templates/uxUiDesignTemplate';
import { writingProjectTemplate } from './new-templates/writingProjectTemplate';
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
  IdeaSceneObj,
  'id' | 'chapterId' | 'userId' | 'created'
>;
export type _TemplateIdeaObj = Omit<IdeaObj, 'id' | 'sceneId'>;
export type _TemplateLogObj = Omit<TaskObj, 'id' | 'chapterId'>;

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
enum NewSpaceTemplate {
  BlankSpace = 'Blank Space',
  StarterProject = 'Starter Project',
  FreelancingTask = 'Freelancing Task',
  Ideation = 'Ideation',
  SprintChallenge = 'Sprint Challenge',
  HackathonProject = 'Hackathon Project',
  CollaborationHub = 'Collaboration Hub',
  CreativeCampaign = 'Creative Campaign',
  PrototypeDevelopment = 'Prototype Development',
  VideoMediaProduction = 'Video/Media Production',
  ContentCreation = 'Content Creation', // Covers writing, blogging, and podcasting
  PhotographyAndArtProject = 'Photography & Art Project', // Combines photography and illustration
  UXUIDesign = 'UX/UI Design', // Specialized template for interface and user experience designers
  MusicAndAudioProduction = 'Music & Audio Production', // Combines music and sound design
  WritingProject = 'Writing Project', // Dedicated for written works (e.g., novels, scripts)
  Animation = 'Animation Project', // For animators and motion graphics
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NewSpaceTemplateMap: Record<NewSpaceTemplate, TemplateSpaceObj> = {
  [NewSpaceTemplate.BlankSpace]: blankSpaceTemplate,
  [NewSpaceTemplate.StarterProject]: newStarterProjectTemplate,
  [NewSpaceTemplate.FreelancingTask]: freelancingTaskTemplate,
  [NewSpaceTemplate.Ideation]: ideationTemplate,
  [NewSpaceTemplate.SprintChallenge]: sprintChallengeTemplate,
  [NewSpaceTemplate.HackathonProject]: hackathonProjectTemplate,
  [NewSpaceTemplate.CollaborationHub]: collaborationHubTemplate,
  [NewSpaceTemplate.CreativeCampaign]: creativeCampaignTemplate,
  [NewSpaceTemplate.PrototypeDevelopment]: prototypeDevelopmentTemplate,
  [NewSpaceTemplate.VideoMediaProduction]: videoProductionTemplate,
  [NewSpaceTemplate.ContentCreation]: contentCreationTemplate,
  [NewSpaceTemplate.PhotographyAndArtProject]: photographyAndArtTemplate,
  [NewSpaceTemplate.UXUIDesign]: uxUiDesignTemplate,
  [NewSpaceTemplate.MusicAndAudioProduction]: musicAndAudioProductionTemplate,
  [NewSpaceTemplate.WritingProject]: writingProjectTemplate,
  [NewSpaceTemplate.Animation]: animationTemplate,
};

export {
  NewSpaceTemplate as SpaceTemplate,
  NewSpaceTemplateMap as SpaceTemplateMap,
};
