import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface ChapterSessionUpdateMemberObj {
  id: string;
  updateId: string;
  userId: string;
  created: string;
}

export const ChapterSessionUpdateMemberGql = `
type ChapterSessionUpdateMemberObj {
  id: String!
  updateId: String!
  userId: String!
  created: String!
}
`;

export const ContextForChapterSessionUpdateMemberObj =
  createContext<ChapterSessionUpdateMemberObj>(
    {} as ChapterSessionUpdateMemberObj,
  );

export const exampleChapterSessionUpdateMember: ChapterSessionUpdateMemberObj =
  {
    id: '0',
    updateId: '0',
    userId: '0',
    created: new Date().toISOString(),
  };

export const exampleChapterSessionUpdateMembers: ChapterSessionUpdateMemberObj[] =
  [
    {
      id: '0',
      updateId: '0',
      userId: '0',
      created: new Date().toISOString(),
    },
    {
      id: '0',
      updateId: '0',
      userId: '0',
      created: new Date().toISOString(),
    },
    {
      id: '0',
      updateId: '0',
      userId: '0',
      created: new Date().toISOString(),
    },
  ];

export const ChapterSessionMemberItemModel: ModelInterface<ChapterSessionUpdateMemberObj> =
  {
    name: 'member',
    gql: ChapterSessionUpdateMemberGql,
    example: exampleChapterSessionUpdateMember,
    examples: exampleChapterSessionUpdateMembers,
    parentKey: 'updateId',
    children: [],
  };
