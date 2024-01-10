import { boardTable } from "./board/table";
import { draftTable } from "./draft/table";
import { postTable } from "./posts/table";
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
      storm: {
        table: stormTable,
      },
      draft: {
        table: draftTable,
      },
      flow: {
        table: flowTable,
      },
      sea: {
        table: seaTable,
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
  post: {
    table: postTable,
  },
};
