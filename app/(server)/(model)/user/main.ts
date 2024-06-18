import { createContext } from 'react';
import { FileElem, exampleDisplayPictureFileElem } from '../elements/file/main';
import { ModelInterface } from '../main';

export interface UserObj {
  id: string;
  fname: string;
  lname: string;
  displayName: string;
  journalId: string;
  email: string;
  dp: FileElem;
  role: string;
  bio: string;
  created: string;
  customerId?: string;
  subscriptionId?: string;
  priceId?: string;
  passwordHash?: string;
  googleId?: string;
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
  bio: String
	passwordHash: String
	googleId: String
	customerId: String
	subscriptionId: String
	priceId: String
}
`;

export type SafeUserObj = Omit<UserObj, 'passwordHash'>;

export const ContextForUserObj = createContext<UserObj>({} as UserObj);

export const exampleUser: UserObj = {
  id: '0',
  displayName: 'John Smith',
  journalId: '0',
  fname: 'John',
  lname: 'Smith',
  email: 'email@example.com',
  role: 'Musician',
  bio: 'Been playing for X years',
  dp: exampleDisplayPictureFileElem,
  created: new Date().toISOString(),
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
    dp: exampleDisplayPictureFileElem,
    created: new Date().toISOString(),
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
    dp: exampleDisplayPictureFileElem,
    created: new Date().toISOString(),
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
