import { createContext } from 'react';
import { FileElem, exampleProfileImageFileElem } from '../elements/file/main';

export interface UserObj {
  id: string;
  fname: string;
  lname: string;
  email: string;
  profilePicture: FileElem;
  role: string;
  bio?: string;
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
	fname: String!
	lname: String!
	email: String!
	profilePicture: FileElem!
  role: String!
	created: String!
  bio: String
	passwordHash: String
	googleId: String
	customerId: String
	subscriptionId: String
	priceId: String
}

input CreateUserObjInput {
	fname: String!
	lname: String!
	email: String!
  profilePicture: FileElemInput!
  role: String!
	created: String!
  bio: String
	googleId: String
	customerId: String
	subscriptionId: String
	priceId: String
	passwordHash: String
}

input UpdateUserObjInput {
	id: String!
	fname: String
	lname: String
	passwordHash: String
	email: String
	googleId: String
	customerId: String
	subscriptionId: String
	priceId: String
  role: String
	created: String
  bio: String
	profilePicture: FileElemInput
}
`;

export type SafeUserObj = Omit<UserObj, 'passwordHash'>;

export const exampleUser: UserObj = {
  id: '0',
  fname: 'John',
  lname: 'Smith',
  email: 'email@example.com',
  role: 'Musician',
  bio: 'Been playing for X years',
  profilePicture: exampleProfileImageFileElem,
  created: new Date().toISOString(),
};

export const UserContext = createContext<UserObj>({} as UserObj);

export const exampleUsers: UserObj[] = [
  {
    id: '1',
    fname: 'John',
    lname: 'Smith',
    email: 'john@example.com',
    role: 'Musician',
    bio: 'Been playing for X years',
    profilePicture: exampleProfileImageFileElem,
    created: new Date().toISOString(),
  },
  {
    id: '2',
    fname: 'Jane',
    lname: 'Smith',
    email: 'jane@example.com',
    role: 'Musician',
    bio: 'Been playing for X years',
    profilePicture: exampleProfileImageFileElem,
    created: new Date().toISOString(),
  },
];
