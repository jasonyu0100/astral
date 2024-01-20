export interface LoomObj {
  id: string;
  loomId: string;
  height: number;
  width: number;
  sharedUrl: string;
  embedUrl: string;
  thumbnailHeight?: number;
  thumbnailWidth?: number;
  thumbnailUrl?: string;
  duration?: number;
  providerUrl: string;
}

export const loomSchema = `
type LoomObj {
    id: String!
    loomId: String!
    height: Float!
    width: Float!
    sharedUrl: String!
    embedUrl: String!
    thumbnailHeight: Float
    thumbnailWidth: Float
    thumbnailUrl: String
    duration: Float
    providerUrl: String!
}
`;

export const exampleLoom: LoomObj = {
  id: '0',
  loomId: '0',
  height: 120,
  width: 120,
  sharedUrl: 'https://www.loom.com/share/0',
  embedUrl: 'https://www.loom.com/embed/0',
  thumbnailHeight: 120,
  thumbnailWidth: 120,
  thumbnailUrl: 'https://www.loom.com/thumbnail/0',
  duration: 0,
  providerUrl: 'https://www.loom.com',
};

export const exampleLooms: LoomObj[] = [
  {
    id: '0',
    loomId: '0',
    height: 120,
    width: 120,
    sharedUrl: 'https://www.loom.com/share/0',
    embedUrl: 'https://www.loom.com/embed/0',
    thumbnailHeight: 120,
    thumbnailWidth: 120,
    thumbnailUrl: 'https://www.loom.com/thumbnail/0',
    duration: 0,
    providerUrl: 'https://www.loom.com',
  },
  {
    id: '0',
    loomId: '0',
    height: 120,
    width: 120,
    sharedUrl: 'https://www.loom.com/share/0',
    embedUrl: 'https://www.loom.com/embed/0',
    thumbnailHeight: 120,
    thumbnailWidth: 120,
    thumbnailUrl: 'https://www.loom.com/thumbnail/0',
    duration: 0,
    providerUrl: 'https://www.loom.com',
  },
  {
    id: '0',
    loomId: '0',
    height: 120,
    width: 120,
    sharedUrl: 'https://www.loom.com/share/0',
    embedUrl: 'https://www.loom.com/embed/0',
    thumbnailHeight: 120,
    thumbnailWidth: 120,
    thumbnailUrl: 'https://www.loom.com/thumbnail/0',
    duration: 0,
    providerUrl: 'https://www.loom.com',
  },
];
