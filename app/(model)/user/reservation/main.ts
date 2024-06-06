export interface ReservationObj {
  id: string;
  fname: string;
  lname: string;
  email: string;
  role: string;
}

export const reservationGql = `
type ReservationObj {
  id: String!
  fname: String!
  lname: String!
  email: String!
  role: String!
}
`