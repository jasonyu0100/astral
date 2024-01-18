import { constellationTable, draftTable, starTable } from './draft/table';
import { chatTable, messageTable, stormTable } from './storm/table';
import { collectionTable, galleryTable } from './gallery/table';
import { chapterTable, spaceTable } from './space/table';
import { userTable } from './user/table';
import { journeyTable, seaTable } from './sea/table';
import { commentTable, flowTable, momentTable } from './flow/table';
import { fileTable, resourceTable } from './resource/table';
import { Profiler } from 'react';

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
      table: fileTable,
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
          message: {
            table: messageTable,
          },
        },
      },
      draft: {
        table: draftTable,
        constellation: {
          table: constellationTable,
          star: {
            table: starTable,
          },
        },
      },
      flow: {
        table: flowTable,
        moment: {
          table: momentTable,
          comment: {
            table: commentTable,
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
  [stormTable, chatTable, messageTable],
  [draftTable, constellationTable, starTable],
  [flowTable, momentTable, commentTable],
  [seaTable, journeyTable],
  [resourceTable, fileTable],
  [collectionTable, galleryTable],
  [userTable],
];

export const outputSchema = () =>
  dataRegions
    .map((region) => region.map((table) => table.schema).join('\n'))
    .join('\n');
