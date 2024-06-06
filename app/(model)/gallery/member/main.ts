import { createContext } from 'react';

export interface GalleryMemberObj {
  id: string;
  forumId: string;
  userId: string;
}

export const galleryMemberGql = `
type GalleryMemberObj {
  id: String!
  galleryId: String!
  userId: String!
}
`;

export const GalleryMemberObjContext = createContext<GalleryMemberObj>(
  {} as GalleryMemberObj,
);

export const exampleGalleryMember: GalleryMemberObj = {
  id: '0',
  forumId: '0',
  userId: '0',
};

export const exampleGalleryMembers: GalleryMemberObj[] = [
  {
    id: '0',
    forumId: '0',
    userId: '0',
  },
  {
    id: '0',
    forumId: '0',
    userId: '0',
  },
  {
    id: '0',
    forumId: '0',
    userId: '0',
  },
];
