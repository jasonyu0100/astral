import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface ChapterUpdateItemMemberObj {
  id: string;
  itemId: string;
  userId: string;
  created: string;
}

export const chapterUpdateItemMemberGql = `
type ChapterUpdateItemMemberObj {
  id: String!
  itemId: String!
  userId: String!
  created: String!
}
`;

export const ContextForChapterUpdateItemMemberObj =
  createContext<ChapterUpdateItemMemberObj>({} as ChapterUpdateItemMemberObj);

export const exampleChapterUpdateItemMember: ChapterUpdateItemMemberObj = {
  id: '0',
  itemId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleChapterUpdateItemMembers: ChapterUpdateItemMemberObj[] = [
  {
    id: '0',
    itemId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    itemId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    itemId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];

export const chapterUpdateMemberItemModel: ModelInterface<ChapterUpdateItemMemberObj> =
  {
    name: 'member',
    gql: chapterUpdateItemMemberGql,
    example: exampleChapterUpdateItemMember,
    examples: exampleChapterUpdateItemMembers,
    parentKey: 'itemId',
    children: [],
  };
