import { createContext } from 'react';
import { FileObj, exampleProfileImageFile } from '../media/resource/file/main';

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
  profilePicture: FileObj;
  created: string;
}

export type SafeUserObj = Omit<UserObj, 'passwordHash'>;

export const exampleUser: UserObj = {
  id: '0',
  fname: 'John',
  lname: 'Smith',
  email: 'email@example.com',
  profilePicture: exampleProfileImageFile,
  created: new Date().toISOString(),
};

export const UserContext = createContext<UserObj>({} as UserObj);

export const exampleUsers: UserObj[] = [
  {
    id: '1',
    fname: 'John',
    lname: 'Smith',
    email: 'john@example.com',
    profilePicture: exampleProfileImageFile,
    created: new Date().toISOString(),
  },
  {
    id: '2',
    fname: 'Jane',
    lname: 'Smith',
    email: 'jane@example.com',
    profilePicture: exampleProfileImageFile,
    created: new Date().toISOString(),
  },
];
