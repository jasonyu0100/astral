import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface HorizonSpaceMemberObj {
  id: string;
  horizonId: string;
  spaceId: string;
  created: string;
  termsId: string;
}

export const horizonSpaceMemberGql = `
type HorizonSpaceMemberObj {
  id: String!
  horizonId: String!
  spaceId: String!
  created: String!
  termsId: String!
}
`;

export const ContextForHorizonSpaceMemberObj =
  createContext<HorizonSpaceMemberObj>({} as HorizonSpaceMemberObj);

export const exampleHorizonSpaceMember: HorizonSpaceMemberObj = {
  id: '0',
  horizonId: '0',
  spaceId: '0',
  created: new Date().toISOString(),
  termsId: '0',
};

export const exampleHorizonSpaceMembers: HorizonSpaceMemberObj[] = [
  {
    id: '0',
    horizonId: '0',
    spaceId: '0',
    created: new Date().toISOString(),
    termsId: '0',
  },
  {
    id: '1',
    horizonId: '0',
    spaceId: '1',
    created: new Date().toISOString(),
    termsId: '1',
  },
  {
    id: '2',
    horizonId: '0',
    spaceId: '2',
    created: new Date().toISOString(),
    termsId: '2',
  },
];

export const horizonSpaceMemberModel: ModelInterface<HorizonSpaceMemberObj> = {
  name: 'spaceMember',
  gql: horizonSpaceMemberGql,
  example: exampleHorizonSpaceMember,
  examples: exampleHorizonSpaceMembers,
  parentKey: 'horizonId',
  children: [],
};
