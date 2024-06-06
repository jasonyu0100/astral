import { userDbWrapper } from "@/(db)/user/main";
import { userGql } from "../../user/main";
import { reservationGql } from "../../user/reservation/main";
import { reservationDbWrapper } from "@/(db)/user/reservation/main";

export const userMap = {
    children: ['reservation'],
    gql: userGql,
    db: userDbWrapper,
    reservation: {
        children: [],
        gql: reservationGql,
        db: reservationDbWrapper,
    }
}