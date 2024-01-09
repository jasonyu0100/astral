export enum CraftFileType {
  IMAGE="img",
  AUDIO="audio",
  VIDEO="video",
}

export interface CraftFile {
  id: string;
  name: string;
  description: string;
  src: string;
  type: CraftFileType;
}

const craftFileReference = {
  craftFile: {
    name: "CraftFile",
    craftFileType: {
      name: "CraftFileType"
    }
  },
}

export const craftFileGQL = {
  reference: craftFileReference,
  schema: `
    type ${craftFileReference.craftFile.name}Type {
      IMAGE: String
      AUDIO: String
      VIDEO: String
    }

    type ${craftFileReference.craftFile.craftFileType.name} {
      id: String
      name: String
      description: String
      src: String
      type: ${craftFileReference.craftFile.craftFileType.name}
    }
  `
}