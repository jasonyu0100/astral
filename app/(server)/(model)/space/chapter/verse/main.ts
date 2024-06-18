import { FileElem } from '@/(server)/(model)/elements/file/main';
import { ElementVariant } from '@/(server)/(model)/elements/main';
import { TextElem } from '@/(server)/(model)/elements/text/main';
import { UrlElem } from '@/(server)/(model)/elements/url/main';
import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface ChapterVerseObj {
  id: string;
  userId: string;
  chapterId: string;
  title: string;
  description: string;
  created: string;
  variant: string;
  fileElem?: FileElem;
  textElem?: TextElem;
  urlElem?: UrlElem;
}

export const chapterVerseGql = `
type ChapterVerseObj {
  id: String!
  userId: String!
  chapterId: String!
  title: String!
  description: String!
  created: String!
  variant: String!
  fileElem: FileElem
  textElem: TextElem
  urlElem: UrlElem
}
`;

export const ContextForChapterVerseObj = createContext<ChapterVerseObj>(
  {} as ChapterVerseObj,
);

export const exampleChapterVerse: ChapterVerseObj = {
  id: '0',
  userId: '0',
  chapterId: '0',
  title: 'Verse Example',
  description: 'Verse Description',
  created: new Date().toISOString(),
  variant: ElementVariant.FILE,
};

export const exampleChapterVerses: ChapterVerseObj[] = [
  {
    id: '0',
    userId: '0',
    chapterId: '0',
    title: 'Verse Example',
    description: 'Verse Description',
    created: new Date().toISOString(),
    variant: ElementVariant.FILE,
  },
  {
    id: '1',
    userId: '0',
    chapterId: '0',
    title: 'Verse Example',
    description: 'Verse Description',
    created: new Date().toISOString(),
    variant: ElementVariant.FILE,
  },
  {
    id: '2',
    userId: '0',
    chapterId: '0',
    title: 'Verse Example',
    description: 'Verse Description',
    created: new Date().toISOString(),
    variant: ElementVariant.FILE,
  },
];

export const chapterVerseModel: ModelInterface<ChapterVerseObj> = {
  name: 'verse',
  parentKey: 'chapterId',
  example: exampleChapterVerse,
  examples: exampleChapterVerses,
  gql: chapterVerseGql,
  children: ['comment', 'member'],
};
