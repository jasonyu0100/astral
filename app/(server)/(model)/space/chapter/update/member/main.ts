import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface ChapterUpdateMemberObj {
  id: string;
  updateId: string;
  userId: string;
  created: string;
}

export const chapterUpdateMemberGql = `
type ChapterUpdateMemberObj {
  id: String!
  updateId: String!
  userId: String!
  created: String!
}
`;

export const ContextForChapterUpdateMemberObj =
  createContext<ChapterUpdateMemberObj>({} as ChapterUpdateMemberObj);

export const exampleChapterUpdateMember: ChapterUpdateMemberObj = {
  id: '0',
  updateId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleChapterUpdateMembers: ChapterUpdateMemberObj[] = [
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

export const chapterUpdateMemberModel: ModelInterface<ChapterUpdateMemberObj> =
  {
    name: 'update',
    gql: chapterUpdateMemberGql,
    example: exampleChapterUpdateMember,
    examples: exampleChapterUpdateMembers,
    parentKey: 'updateId',
    children: [],
  };
