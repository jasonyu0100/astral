import { createContext } from 'react';

export interface UserReservationObj {
  id: string;
  fname: string;
  lname: string;
  email: string;
  role: string;
  created: string;
}
export const ContextForUserReservationObj = createContext<UserReservationObj>(
  {} as UserReservationObj,
);

export const userReservationGql = `
type UserReservationObj {
  id: String!
  fname: String!
  lname: String!
  email: String!
  role: String!
  created: String!
}
`;

export const exampleUserReservation: UserReservationObj = {
  id: '0',
  fname: 'John',
  lname: 'Doe',
  email: ' ',
  role: ' ',
  created: new Date().toISOString(),
};

export const exampleUserReservations: UserReservationObj[] = [
  {
    id: '0',
    fname: 'John',
    lname: 'Doe',
    email: ' ',
    role: ' ',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    fname: 'John',
    lname: 'Doe',
    email: ' ',
    role: ' ',
    created: new Date().toISOString(),
  },
  {
    id: '2',
    fname: 'John',
    lname: 'Doe',
    email: ' ',
    role: ' ',
    created: new Date().toISOString(),
  },
];
