import { getUserObj, listUserObjs } from "@/graphql/queries";
import { TableDescriptor } from "../tables";
import { exampleUser, exampleUsers, userSchema } from "./main";
import { deleteUserObj, updateUserObj } from "@/graphql/mutations";

export const userTable : TableDescriptor = {
  example: exampleUser,
  examples: exampleUsers,
  schema: userSchema,
  reducer: {
    get: getUserObj,
    list: listUserObjs,
    update: updateUserObj,
    delete: deleteUserObj,
  }
};
