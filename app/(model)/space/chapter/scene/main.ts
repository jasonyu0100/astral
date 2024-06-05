import { createContext } from 'react';

export enum SceneVariant {
  VISUAL = 'VISUAL',
  AUDIO = 'AUDIO',
  MEMO = 'MEMO',
  LINK = 'LINK',
}

export interface SceneObj {
  id: string;
  chapterId: string;
  title: string;
  description: string;
  variant: string;
}

export const exampleScene: SceneObj = {
  id: '0',
  chapterId: '0',
  title: 'Idea Scene',
  description: 'Scene Description',
  variant: SceneVariant.VISUAL,
};

export const SceneContext = createContext<SceneObj>({} as SceneObj);

export const exampleScenes: SceneObj[] = [
  {
    id: '0',
    chapterId: '0',
    title: 'Idea Scene 1',
    description: 'Scene Description',
    variant: SceneVariant.VISUAL,
  },
  {
    id: '1',
    chapterId: '0',
    title: 'Idea Scene 2',
    description: 'Scene Description',
    variant: SceneVariant.VISUAL,
  },
  {
    id: '2',
    chapterId: '0',
    title: 'Idea Scene 3',
    description: 'Scene Description',
    variant: SceneVariant.VISUAL,
  },
];
