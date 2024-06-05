import { createContext } from 'react';

export enum SpaceSceneVariant {
  VISUAL = 'VISUAL',
  AUDIO = 'AUDIO',
  MEMO = 'MEMO',
  LINK = 'LINK',
}

export interface SpaceSceneObj {
  id: string;
  chapterId: string;
  title: string;
  description: string;
  variant: string;
}

export const exampleSpaceScene: SpaceSceneObj = {
  id: '0',
  chapterId: '0',
  title: 'Idea Scene',
  description: 'Scene Description',
  variant: SpaceSceneVariant.VISUAL,
};

export const SpaceSceneContext = createContext<SpaceSceneObj>({} as SpaceSceneObj);

export const exampleSpaceScenes: SpaceSceneObj[] = [
  {
    id: '0',
    chapterId: '0',
    title: 'Idea Scene 1',
    description: 'Scene Description',
    variant: SpaceSceneVariant.VISUAL,
  },
  {
    id: '1',
    chapterId: '0',
    title: 'Idea Scene 2',
    description: 'Scene Description',
    variant: SpaceSceneVariant.VISUAL,
  },
  {
    id: '2',
    chapterId: '0',
    title: 'Idea Scene 3',
    description: 'Scene Description',
    variant: SpaceSceneVariant.VISUAL,
  },
];
