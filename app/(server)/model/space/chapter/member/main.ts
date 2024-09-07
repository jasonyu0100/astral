import { createContext } from 'react';
import { ModelInterface } from '../../../main';

export interface SpaceChapterMemberObj {
  id: string;
  spaceId: string;
  chapterId: string;
  userId: string;
  created: string;
  termsId: string;
}

export const spaceChapterMemberGql = `
type SpaceChapterMemberObj {
  id: String!
  spaceId: String!
  userId: String!
  created: String!
  termsId: String!
}
`;

export const ContextForSpaceChapterMemberObj =
  createContext<SpaceChapterMemberObj>({} as SpaceChapterMemberObj);

export const exampleSpaceChapterMember: SpaceChapterMemberObj = {
  id: '0',
  spaceId: '0',
  chapterId: '0',
  userId: '0',
  created: new Date().toISOString(),
  termsId: '0',
};

export const exampleSpaceChapterMembers: SpaceChapterMemberObj[] = [
  {
    id: '0',
    spaceId: '0',
    chapterId: '0',
    userId: '0',
    created: new Date().toISOString(),
    termsId: '0',
  },
  {
    id: '0',
    spaceId: '0',
    chapterId: '0',
    userId: '0',
    created: new Date().toISOString(),
    termsId: '0',
  },
  {
    id: '0',
    spaceId: '0',
    chapterId: '0',
    userId: '0',
    created: new Date().toISOString(),
    termsId: '0',
  },
];

export const spaceChapterMemberModel: ModelInterface<SpaceChapterMemberObj> = {
  name: 'member',
  gql: spaceChapterMemberGql,
  example: exampleSpaceChapterMember,
  examples: exampleSpaceChapterMembers,
  parentKey: 'chapterId',
  children: [],
};
