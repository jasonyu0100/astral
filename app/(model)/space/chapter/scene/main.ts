import { createContext } from 'react';

export interface ChapterSceneObj {
  id: string;
  chapterId: string;
  title: string;
  description: string;
  created: string;
}

export const chapterSceneGql = `
type ChapterSceneObj {
  id: String!
  chapterId: String!
  title: String!
  description: String!
  created: String!
}`;

export const ContextForChapterSceneObj = createContext<ChapterSceneObj>(
  {} as ChapterSceneObj,
);

export const exampleChapterScene: ChapterSceneObj = {
  id: '0',
  chapterId: '0',
  title: 'Idea Scene',
  description: 'Scene Description',
  created: new Date().toISOString(),
};

export const exampleChapterScenes: ChapterSceneObj[] = [
  {
    id: '0',
    chapterId: '0',
    title: 'Idea Scene 1',
    description: 'Scene Description',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    chapterId: '0',
    title: 'Idea Scene 2',
    description: 'Scene Description',
    created: new Date().toISOString(),
  },
  {
    id: '2',
    chapterId: '0',
    title: 'Idea Scene 3',
    description: 'Scene Description',
    created: new Date().toISOString(),
  },
];
