import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';
export interface PostKarmaObj {
  id: string;
  userId: string;
  postId: string;
  created: string;
  neutrality: boolean;
}

export const postKarmaGql = `
type PostKarmaObj {
  id: String!
  userId: String
  postId: String!
  created: String!
  neutrality: Boolean!
}
`;

export const ContextForPostKarmaObj = createContext<PostKarmaObj>(
  {} as PostKarmaObj,
);

export const examplePostKarma: PostKarmaObj = {
  id: '0',
  postId: '0',
  created: new Date().toISOString(),
  neutrality: false,
  userId: '0',
};

export const examplePostKarmas: PostKarmaObj[] = [
  {
    id: '0',
    postId: '0',
    created: new Date().toISOString(),
    neutrality: false,
    userId: '0',
  },
  {
    id: '1',
    postId: '0',
    created: new Date().toISOString(),
    neutrality: false,
    userId: '0',
  },
  {
    id: '2',
    postId: '0',
    created: new Date().toISOString(),
    neutrality: false,
    userId: '0',
  },
];

export const postKarmaModel: ModelInterface<PostKarmaObj> = {
  name: 'karma',
  example: examplePostKarma,
  examples: examplePostKarmas,
  gql: postKarmaGql,
  children: [],
  parentKey: 'postId',
};
