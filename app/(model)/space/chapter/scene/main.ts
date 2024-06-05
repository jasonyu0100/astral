import { createContext } from 'react';

export enum ChapterSceneVariant {
  VISUAL = 'VISUAL',
  AUDIO = 'AUDIO',
  MEMO = 'MEMO',
  LINK = 'LINK',
}

export interface ChapterSceneObj {
  id: string;
  chapterId: string;
  title: string;
  description: string;
  variant: string;
}

export const chapterSceneGql = `
type ChapterSceneObj {
  id: String!
  chapterId: String!
  title: String!
  description: String!
  variant: String!
}`

export const exampleChapterScene: ChapterSceneObj = {
  id: '0',
  chapterId: '0',
  title: 'Idea Scene',
  description: 'Scene Description',
  variant: ChapterSceneVariant.VISUAL,
};

export const ChapterSceneContext = createContext<ChapterSceneObj>({} as ChapterSceneObj);

export const exampleChapterScenes: ChapterSceneObj[] = [
  {
    id: '0',
    chapterId: '0',
    title: 'Idea Scene 1',
    description: 'Scene Description',
    variant: ChapterSceneVariant.VISUAL,
  },
  {
    id: '1',
    chapterId: '0',
    title: 'Idea Scene 2',
    description: 'Scene Description',
    variant: ChapterSceneVariant.VISUAL,
  },
  {
    id: '2',
    chapterId: '0',
    title: 'Idea Scene 3',
    description: 'Scene Description',
    variant: ChapterSceneVariant.VISUAL,
  },
];
