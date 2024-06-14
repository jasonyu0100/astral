import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface ClusterMemberObj {
  id: string;
  clusterId: string;
  userId: string;
  created: string;
}

export const clusterMemberGql = `
type ClusterMemberObj {
  id: String!
  clusterId: String!
  userId: String!
  created: String!
}
`;

export const ContextForClusterMemberObj = createContext<ClusterMemberObj>(
  {} as ClusterMemberObj,
);

export const exampleClusterMember: ClusterMemberObj = {
  id: '0',
  clusterId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleClusterMembers: ClusterMemberObj[] = [
  {
    id: '0',
    clusterId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    clusterId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    clusterId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];

export const clusterMemberModel: ModelInterface<ClusterMemberObj> = {
  name: 'member',
  gql: clusterMemberGql,
  example: exampleClusterMember,
  examples: exampleClusterMembers,
  parentKey: 'clusterId',
  children: [],
};
