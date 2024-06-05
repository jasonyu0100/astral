import { archiveGqlMap } from "./archive";
import { conceptGqlMap } from "./elements";
import { horizonGqlMap } from "./horizon";
import { spaceGqlMap } from "./space";
import { userGqlMap } from "./user";

export const modelGqlMap = {
    user: {
        gql: userGqlMap,
    },
    space: {
        gql: spaceGqlMap,
    },
    horizon: {
        gql: horizonGqlMap,
    },
    concept: {
        gql: conceptGqlMap,
    },
    archive: {
        gql: archiveGqlMap,
    }
}