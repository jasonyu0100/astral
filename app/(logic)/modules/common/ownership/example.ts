import { exampleId } from "../meta/id/example";
import { exampleDataPermission } from "../permission/example";
import { GroupOwner, OrgOwner, UserOwner } from "./interface";

export const exampleUserOwner : UserOwner =  {
    userId: exampleId,
    permissions: [exampleDataPermission],
}

export const exampleGroupOwner : GroupOwner = {
    groupId: exampleId,
    permissions: [exampleDataPermission],
}

export const exampleOrgOwner : OrgOwner = {
    orgId: exampleId,
    permissions: [exampleDataPermission],
}

export const exampleOwnershipField = {
    userOwner: exampleUserOwner,
    groupOwners: exampleGroupOwner,
    orgOwners: exampleOrgOwner,
    otherUserOwners: [exampleUserOwner],
}