import { createContext } from 'react';
import {
  FileElement,
  exampleDisplayPictureFileElement,
} from '../elements/file/main';
import { ModelInterface } from '../main';

export interface UserObj {
  id: string;
  fname: string;
  lname: string;
  displayName: string;
  journalId: string;
  email: string;
  dp: FileElement;
  private: boolean;
  role: string;
  bio: string;
  created: string;
  customerId?: string;
  subscriptionId?: string;
  priceId?: string;
  passwordHash?: string;
  polarHash?: string;
  writtenHash?: string;
  degree: number;
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
  private: Boolean!
  bio: String
	passwordHash: String
  polarHash: String
  writtenHash: String
	customerId: String
	subscriptionId: String
	priceId: String
  degree: Int
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
  private: false,
  dp: exampleDisplayPictureFileElement,
  created: new Date().toISOString(),
  degree: 0,
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
  private: false,
  dp: {
    id: '0',
    src: '/brand/512x512.png',
    ext: 'image/png',
    title: 'Astral',
    size: 0,
    variant: 'IMAGE',
  },
  created: new Date().toISOString(),
  degree: 0,
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
    private: false,
    bio: 'Been playing for X years',
    dp: exampleDisplayPictureFileElement,
    created: new Date().toISOString(),
    degree: 0,
  },
  {
    id: '2',
    displayName: 'John Smith',
    journalId: '0',
    private: false,
    fname: 'Jane',
    lname: 'Smith',
    email: 'jane@example.com',
    role: 'Musician',
    bio: 'Been playing for X years',
    dp: exampleDisplayPictureFileElement,
    created: new Date().toISOString(),
    degree: 0,
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
