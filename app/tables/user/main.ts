import { FileObj, exampleProfileImageFile } from '../file/main';
import { exampleGallerys } from '../gallery/main';
import { exampleSpaces } from '../space/main';

export interface UserObj {
  id: string;
  fname: string;
  lname: string;
  email: string;
  passwordHash?: string;
  googleId?: string;
  profileImage: FileObj;
}

export const userSchema = `
type UserObj {
  id: String!
  lname: String!
  fname: String!
  passwordHash: String!
  email: String!
  googleId: String!
  profileImage: FileObj!
}`;

export const exampleUser: UserObj = {
  id: '0',
  fname: 'John',
  lname: 'Smith',
  email: 'email@example.com',
  profileImage: exampleProfileImageFile,
};

export const exampleUsers: UserObj[] = [
  {
    id: '1',
    fname: 'John',
    lname: 'Smith',
    email: 'john@example.com',
    profileImage: exampleProfileImageFile,
  },
  {
    id: '2',
    fname: 'Jane',
    lname: 'Smith',
    email: 'jane@example.com',
    profileImage: exampleProfileImageFile,
  },
];
