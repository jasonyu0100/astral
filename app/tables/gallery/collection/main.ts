import { FileObj, exampleFiles } from "../../file/main";
import { ResourceObj, exampleResources } from "../../resource/main";

export interface CollectionObj {
  id: string;
  name: string;
  resources: ResourceObj[];
}

export const exampleCollection: CollectionObj = {
  id: "0",
  name: "Symbols",
  resources: exampleResources
};

export const exampleCollections: CollectionObj[] = [
  {
    id: "0",
    name: "Symbols",
    resources: exampleResources
  },{
    id: "1",
    name: "Symbols",
    resources: exampleResources
  }
]

