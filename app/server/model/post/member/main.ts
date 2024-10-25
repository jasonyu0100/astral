import { ModelInterface } from '@/server/model/main';
import { createContext } from 'react';

export interface PostMemberObj {
  id: string;
  postId: string;
  userId: string;
  created: string;
}

export const postMemberGql = `
type PostMemberObj {
  id: String!
  postId: String!
  userId: String!
  created: String!
}
`;

export const ContextForPostMemberObj = createContext<PostMemberObj>(
  {} as PostMemberObj,
);

export const examplePostMember: PostMemberObj = {
  id: '0',
  postId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const examplePostMembers: PostMemberObj[] = [
  {
    id: '0',
    postId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    postId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    postId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];

export const postMemberModel: ModelInterface<PostMemberObj> = {
  name: 'member',
  gql: postMemberGql,
  example: examplePostMember,
  examples: examplePostMembers,
  parentKey: 'postId',
  children: [],
};
