import { createContext } from 'react';
import { ModelInterface } from '../../main';

export interface GalleryMemberObj {
  id: string;
  forumId: string;
  userId: string;
  created: string;
}

export const galleryMemberGql = `
type GalleryMemberObj {
  id: String!
  galleryId: String!
  userId: String!
  created: String!
}
`;

export const ContextForGalleryMemberObj = createContext<GalleryMemberObj>(
  {} as GalleryMemberObj,
);

export const exampleGalleryMember: GalleryMemberObj = {
  id: '0',
  forumId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleGalleryMembers: GalleryMemberObj[] = [
  {
    id: '0',
    forumId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    forumId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    forumId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];

export const galleryMemberModel: ModelInterface<GalleryMemberObj> = {
  name: 'member',
  gql: galleryMemberGql,
  example: exampleGalleryMember,
  examples: exampleGalleryMembers,
  parentKey: 'galleryId',
  children: [],
};
