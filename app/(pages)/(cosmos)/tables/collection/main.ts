import { FileObj, exampleFiles } from "./file/main";

export interface CollectionObj {
  id: string;
  name: string;
  files: FileObj[];
}

export const exampleCollection: CollectionObj = {
  id: "0",
  name: "Symbols",
  files: exampleFiles
};

export const exampleCollections: CollectionObj[] = [
  {
    id: "0",
    name: "Symbols",
    files: exampleFiles
  },{
    id: "1",
    name: "Symbols",
    files: exampleFiles
  }
]

