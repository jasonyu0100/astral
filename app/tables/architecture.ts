import { draftTable } from "./draft/table";
import { stormTable } from "./storm/table";
import { galleryTable } from "./gallery/table";
import { spaceTable } from "./space/table";
import { userTable } from "./user/table";
import { seaTable } from "./sea/table";
import { flowTable } from "./flow/table";
import { resourceTable } from "./resource/table";

export const dataArchitecture = {
  space: {
    table: spaceTable,
    chapter: {
      table: spaceTable.chapter,
      storm: {
        table: stormTable,
        chat: {
          table: stormTable.chat,
        },
      },
      draft: {
        table: draftTable,
        constellation: {
          table: draftTable.constellation,
        },
      },
      flow: {
        table: flowTable,
        moment: {
          table: flowTable.moment,
          comment: {
            table: flowTable.moment.comment,
          },
        },
      },
      sea: {
        table: seaTable,
        journey: {
          table: seaTable.journey,
        },
      },
    },
  },
  user: {
    table: userTable,
  },
  resource: {
    table: resourceTable,
  },
  gallery: {
    table: galleryTable,
    collection: {
      table: galleryTable.collection,
    },
  },
};
