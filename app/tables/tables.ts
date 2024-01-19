import { constellationTable, starTable } from './draft/table';
import { chatTable, messageTable } from './storm/table';
import { collectionTable, galleryTable } from './gallery/table';
import { chapterTable, spaceTable } from './space/table';
import { userTable } from './user/table';
import { journeyTable } from './sea/table';
import { commentTable, momentTable } from './flow/table';
import { fileTable, resourceTable } from './resource/table';

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
        chat: {
          table: chatTable,
          message: {
            table: messageTable,
          },
        },
      },
      draft: {
        constellation: {
          table: constellationTable,
          star: {
            table: starTable,
          },
        },
      },
      flow: {
        moment: {
          table: momentTable,
          comment: {
            table: commentTable,
          },
        },
      },
      sea: {
        journey: {
          table: journeyTable,
        },
      },
    },
  },
};

const dataRegions = [
  [chapterTable, spaceTable],
  [chatTable, messageTable],
  [constellationTable, starTable],
  [momentTable, commentTable],
  [journeyTable],
  [resourceTable, fileTable],
  [collectionTable, galleryTable],
  [userTable],
];

export const outputSchema = () =>
  dataRegions
    .map((region) => region.map((table) => table.schema).join('\n'))
    .join('\n');
