export interface ReservationObj {
  id: string;
  fname: string;
  lname: string;
  email: string;
}

export const reservationSchema = `
type ReservationObj {
  id: String!
  fname: String!
  lname: String!
  email: String!
}`;
