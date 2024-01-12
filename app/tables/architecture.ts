import { boardTable } from "./board/table";
import { draftTable } from "./draft/table";
import { stormTable } from "./storm/table";
import { galleryTable } from "./gallery/table";
import { spaceTable } from "./space/table";
import { userTable } from "./user/table";
import { seaTable } from "./sea/table";
import { flowTable } from "./flow/table";
import { collectionTable } from "./collection/table";
import { resourceTable } from "./resource/table";

export const dataArchitecture = {
  space: {
    table: spaceTable,
    chapter: {
      table: spaceTable.chapter,
      storm: {
        table: stormTable,
        chat: {
          table: stormTable.chat
        }
      },
      draft: {
        table: draftTable,
        constellation: {
          table: draftTable.constellation
        }
      },
      flow: {
        table: flowTable,
        session: {
          table: flowTable.session,
          moment: {
            table: flowTable.session.moment,
            comment: {
              table: flowTable.session.moment.comment
            }
          }
        }
      },
      sea: {
        table: seaTable,
        journey: {
          table: seaTable.journey
        }
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
  },
  collection: {
    table: collectionTable,
  },
  board: {
    table: boardTable,
  },
};
