import { TableDescriptor } from "../tables";
import { exampleUser, exampleUsers, userSchema } from "./main";

export const userTable : TableDescriptor = {
  example: exampleUser,
  examples: exampleUsers,
  schema: userSchema,
};
