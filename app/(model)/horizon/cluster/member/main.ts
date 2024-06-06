import { createContext } from 'react';

export interface ClusterMemberObj {
  id: string;
  clusterId: string;
  userId: string;
}

export const clusterMemberGql = `
type ClusterMemberObj {
  id: String!
  clusterId: String!
  userId: String!
}
`;

export const ClusterMemberObjContext = createContext<ClusterMemberObj>(
  {} as ClusterMemberObj,
);

export const exampleClusterMember: ClusterMemberObj = {
  id: '0',
  clusterId: '0',
  userId: '0',
};

export const exampleClusterMembers: ClusterMemberObj[] = [
  {
    id: '0',
    clusterId: '0',
    userId: '0',
  },
  {
    id: '0',
    clusterId: '0',
    userId: '0',
  },
  {
    id: '0',
    clusterId: '0',
    userId: '0',
  },
];
