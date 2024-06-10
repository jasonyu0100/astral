import { FileElem } from "@/(server)/(model)/elements/file/main";
import { CollectionResourceObj } from "@/(server)/(model)/gallery/collection/resource/main";

export type createFromFile = (userId: string, title: string, description: string, fileElem: FileElem) => Promise<CollectionResourceObj>;