import { userDbWrapper } from "@/(db)/user/main";
import { userGql } from "./main";
import { reservationGql } from "./reservation/main";

export const userMap = {
    children: ['reservation'],
    gql: userGql,
    db: userDbWrapper,
    reservation: {
        children: [],
        gql: reservationGql,
    }
}