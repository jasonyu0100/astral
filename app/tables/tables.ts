import { constellationTable, draftTable, starObject } from "./draft/table";
import { chatTable, messageObject, stormTable } from "./storm/table";
import { collectionTable, galleryTable } from "./gallery/table";
import { chapterTable, spaceTable } from "./space/table";
import { userTable } from "./user/table";
import { journeyTable, seaTable } from "./sea/table";
import { commentObject, flowTable, momentTable } from "./flow/table";
import { fileObject, resourceTable } from "./resource/table";

export interface ObjectDescriptor {
  example: any;
  examples: any[];
}

export interface TableDescriptor {
  example: any;
  examples: any[];
  schema: string;
}

export interface TableObjectDescriptor {
  example: any;
  examples: any[];
  schema: string;
}

export const architecture = {
  user: {
    table: userTable,
  },
  resource: {
    table: resourceTable,
    file: {
      object: fileObject,
    },
  },
  gallery: {
    table: galleryTable,
    collection: {
      table: collectionTable,
    },
  },
  space: {
    table: spaceTable,
    chapter: {
      table: chapterTable,
      storm: {
        table: stormTable,
        chat: {
          table: chatTable,
        },
      },
      draft: {
        table: draftTable,
        constellation: {
          table: constellationTable,
        },
      },
      flow: {
        table: flowTable,
        moment: {
          table: momentTable,
          comment: {
            object: commentObject,
          },
        },
      },
      sea: {
        table: seaTable,
        journey: {
          table: journeyTable,
        },
      },
    },
  },
};

const dataRegions = [
  [chapterTable, spaceTable],
  [stormTable, chatTable, messageObject],
  [draftTable, constellationTable, starObject],
  [flowTable, momentTable, commentObject],
  [seaTable, journeyTable],
  [resourceTable, fileObject],
  [collectionTable, galleryTable],
  [userTable],
];

export const outputSchema = () =>
  dataRegions.map((region) => region.map(table => table.schema).join("\n")).join("\n");
