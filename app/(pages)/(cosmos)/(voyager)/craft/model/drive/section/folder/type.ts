import { CraftFile, craftFileGQL } from "./file/type";

export interface CraftFolder {
  id: string;
  sectionId: string;
  name: string;
  files: CraftFile[];
}

const reference = {
  name: "CraftFolder",
}

export const craftFolderGQL = {
  reference: reference,
  schema: `
    ${craftFileGQL.schema}
    type ${reference.name} {
      id: String
      sectionId: String
      name: String
      files: [${craftFileGQL.reference.craftFile.name}!]!
    }
  `,
};