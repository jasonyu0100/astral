import { FileObj, exampleProfileImageFile } from '../file/main';

export interface UserObj {
  id: string;
  fname: string;
  lname: string;
  email: string;
  passwordHash?: string;
  googleId?: string;
  profilePicture: FileObj;
}

export const exampleUser: UserObj = {
  id: '0',
  fname: 'John',
  lname: 'Smith',
  email: 'email@example.com',
  profilePicture: exampleProfileImageFile,
};

export const exampleUsers: UserObj[] = [
  {
    id: '1',
    fname: 'John',
    lname: 'Smith',
    email: 'john@example.com',
    profilePicture: exampleProfileImageFile,
  },
  {
    id: '2',
    fname: 'Jane',
    lname: 'Smith',
    email: 'jane@example.com',
    profilePicture: exampleProfileImageFile,
  },
];
