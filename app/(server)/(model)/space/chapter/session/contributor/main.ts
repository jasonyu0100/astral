import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface ChapterSessionContributorObj {
  id: string;
  sessionId: string;
  userId: string;
  created: string;
}

export const ChapterSessionContributorGql = `
type ChapterSessionContributorObj {
  id: String!
  sessionId: String!
  userId: String!
  created: String!
}
`;

export const ContextForChapterSessionContributorObj =
  createContext<ChapterSessionContributorObj>(
    {} as ChapterSessionContributorObj,
  );

export const exampleChapterSessionContributor: ChapterSessionContributorObj = {
  id: '0',
  sessionId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleChapterSessionContributors: ChapterSessionContributorObj[] =
  [
    {
      id: '0',
      sessionId: '0',
      userId: '0',
      created: new Date().toISOString(),
    },
    {
      id: '0',
      sessionId: '0',
      userId: '0',
      created: new Date().toISOString(),
    },
    {
      id: '0',
      sessionId: '0',
      userId: '0',
      created: new Date().toISOString(),
    },
  ];

export const ChapterSessionContributorModel: ModelInterface<ChapterSessionContributorObj> =
  {
    name: 'contributor',
    gql: ChapterSessionContributorGql,
    example: exampleChapterSessionContributor,
    examples: exampleChapterSessionContributors,
    parentKey: 'updateId',
    children: [],
  };
