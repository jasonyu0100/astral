import { createContext } from 'react';
import {
  FileElement,
  exampleDisplayPictureFileElement,
} from '../elements/file/main';
import { ModelInterface } from '../main';

export enum UserPageRole {
  OWNER = 'Owner',
  MEMBER = 'Member',
  VIEWER = 'Viewer',
  NONE = '',
}

export const ContextForUserPageRole = createContext('' as UserPageRole);

export enum UserProfileVisibility {
  PUBLIC = 'Public',
  PRIVATE = 'Private',
  NONE = '',
}

export const ContextForUserProfileVisibility = createContext(
  '' as UserProfileVisibility,
);

export interface UserObj {
  id: string;
  fname: string;
  lname: string;
  displayName: string;
  journalId: string;
  email: string;
  dp: FileElement;
  visibility: string;
  role: string;
  bio: string;
  created: string;
  customerId?: string;
  subscriptionId?: string;
  productId?: string;
  priceId?: string;
  passwordHash?: string;
  clientId?: string;
}

export const userGql = `
type UserObj {
	id: String!
  displayName: String!
  journalId: String!
	fname: String!
	lname: String!
	email: String!
	dp: FileElem!
  role: String!
	created: String!
  visibility: String!
  bio: String
	passwordHash: String
  productId: String!
	customerId: String
	subscriptionId: String
	priceId: String
  clientId: String
}
`;

export type SafeUserObj = Omit<
  UserObj,
  'passwordHash' | 'polarHash' | 'writtenHash'
>;

export const ContextForUserObj = createContext<UserObj>({} as UserObj);

export const ContextForLoggedInUserObj = createContext<UserObj>({} as UserObj);

export const ContextForProfileUserObj = createContext<UserObj>({} as UserObj);

export const exampleUser: UserObj = {
  id: '0',
  displayName: 'John Smith',
  journalId: '0',
  fname: 'John',
  lname: 'Smith',
  email: 'email@example.com',
  role: 'Musician',
  bio: 'Been playing for X years',
  dp: exampleDisplayPictureFileElement,
  created: new Date().toISOString(),
  visibility: UserProfileVisibility.PUBLIC,
};

export const exampleChannel: UserObj = {
  id: '0',
  displayName: 'Channel',
  journalId: '0',
  fname: 'Channel',
  lname: 'Channel',
  email: 'email@example.com',
  role: 'Channel',
  bio: 'Been playing for X years',
  dp: {
    id: '0',
    src: '/brand/512x512.png',
    ext: 'image/png',
    title: 'Astral',
    size: 0,
    variant: 'IMAGE',
  },
  created: new Date().toISOString(),
  visibility: UserProfileVisibility.PUBLIC,
};

export const exampleUsers: UserObj[] = [
  {
    id: '1',
    displayName: 'John Smith',
    journalId: '0',
    fname: 'John',
    lname: 'Smith',
    email: 'john@example.com',
    role: 'Musician',
    bio: 'Been playing for X years',
    dp: exampleDisplayPictureFileElement,
    created: new Date().toISOString(),
    visibility: UserProfileVisibility.PUBLIC,
  },
  {
    id: '2',
    displayName: 'John Smith',
    journalId: '0',
    fname: 'Jane',
    lname: 'Smith',
    email: 'jane@example.com',
    role: 'Musician',
    bio: 'Been playing for X years',
    dp: exampleDisplayPictureFileElement,
    created: new Date().toISOString(),
    visibility: UserProfileVisibility.PUBLIC,
  },
];

export const userModel: ModelInterface<UserObj> = {
  name: 'user',
  parentKey: '',
  children: ['reservation', 'supporter', 'collaborator'],
  gql: userGql,
  example: exampleUser,
  examples: exampleUsers,
};
