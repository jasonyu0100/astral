import { userGql } from "./main";
import { reservationGql } from "./reservation/main";

export const userGqlMap = {
    user: {
        gql: userGql,
    },
    reservation: {
        gql: reservationGql,
    }
}