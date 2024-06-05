import { createContext } from 'react';
import { FileElem, exampleProfileImageFileElem } from '../elements/file/main';

export interface UserObj {
  id: string;
  fname: string;
  lname: string;
  email: string;
  customerId?: string;
  subscriptionId?: string;
  priceId?: string;
  passwordHash?: string;
  googleId?: string;
  profilePicture: FileElem;
  created: string;
}

export const userGql = `
type UserObj {
	id: String!
	fname: String!
	lname: String!
	passwordHash: String
	email: String!
	googleId: String
	profilePicture: FileElem
	customerId: String
	subscriptionId: String
	priceId: String
	created: String!
}
`;

export type SafeUserObj = Omit<UserObj, 'passwordHash'>;

export const exampleUser: UserObj = {
  id: '0',
  fname: 'John',
  lname: 'Smith',
  email: 'email@example.com',
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
    profilePicture: exampleProfileImageFileElem,
    created: new Date().toISOString(),
  },
  {
    id: '2',
    fname: 'Jane',
    lname: 'Smith',
    email: 'jane@example.com',
    profilePicture: exampleProfileImageFileElem,
    created: new Date().toISOString(),
  },
];
