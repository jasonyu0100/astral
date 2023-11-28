import { ObjectIdField } from "@/(logic)/modules/common/meta/id/interface";

export enum PermissionAccess {
    MASTER_ACCESS = "MASTER_ACCESS",
    READ_ACCESS = "READ_ACCESS",
    DATA_ACCESS = "DATA_ACCESS",
    WRITE_ACCESS = "WRITE_ACCESS",
    PUBLISH_ACCESS = "PUBLISH_ACCESS",
    DELETE_ACCESS = "DELETE_ACCESS",
}

export type PermissionField = PermissionAccess[];