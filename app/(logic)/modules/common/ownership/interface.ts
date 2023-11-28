import { ObjectIdField } from "../meta/id/interface";
import { PermissionField } from "../permission/interface";

export interface UserOwner {
    userId: ObjectIdField;
    permissions: PermissionField;
}

export interface GroupOwner {
    groupId: ObjectIdField;
    permissions: PermissionField;
}

export interface OrgOwner {
    orgId: ObjectIdField;
    permissions: PermissionField;
}

export interface OwnershipField {
    userOwner: UserOwner;
    groupOwners: GroupOwner[];
    orgOwners: OrgOwner[];
    otherUserOwners: UserOwner[];
}