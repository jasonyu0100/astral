import {
  CraftDrive,
} from "./drive/type";
import { exampleCraftFiles, exampleCraftFolder } from "./drive/section/folder/example";
import { exampleCraftFile } from "./drive/section/folder/file/example";
import { CraftFile, craftFileGQL } from "./drive/section/folder/file/type";
import {
  CraftFolder, craftFolderGQL,
} from "./drive/section/folder/type";
import {
  CraftSection,
  exampleCraftFolders,
  exampleCraftSection,
} from "./drive/section/type";
import {
  CraftExploreElement,
} from "./explore/element/type";
import { CraftExplore } from "./explore/type";
import {
  CraftSearch,
  exampleCraftSearch,
  exampleCraftSearchResults,
} from "./search/type";
import { exampleCraftSections, exampleCraftDrive } from "./drive/example";
import { exampleExploreElements, exampleExploreElement } from "./explore/element/example";
import { exampleCraftExplore } from "./explore/example";

export const craftModel: {
  gql: {
    file: {},
    folder: {},
    section: {},
    drive: {},
  },
  drive: {
    sections: {
      section: {
        folders: {
          folder: {
            files: {
              file: {
                example: CraftFile;
              };
              example: CraftFile[];
            };
            example: CraftFolder;
          };
          example: CraftFolder[];
        };
        example: CraftSection;
      };
      example: CraftSection[];
    };
    example: CraftDrive;
  };
  search: {
    results: {
      example: CraftFile[];
    };
    example: CraftSearch;
  };
  explore: {
    results: {
      example: CraftExploreElement[];
      element: {
        example: CraftExploreElement;
      };
    };
    example: CraftExplore;
  };
} = {
  gql: {
    file: craftFileGQL,
    folder: craftFolderGQL,
    section: {},
    drive: {}
  },
  drive: {
    sections: {
      example: exampleCraftSections,
      section: {
        folders: {
          example: exampleCraftFolders,
          folder: {
            files: {
              example: exampleCraftFiles,
              file: {
                example: exampleCraftFile,
              },
            },
            example: exampleCraftFolder,
          },
        },
        example: exampleCraftSection,
      },
    },
    example: exampleCraftDrive,
  },
  search: {
    results: {
      example: exampleCraftSearchResults,
    },
    example: exampleCraftSearch,
  },
  explore: {
    results: {
      example: exampleExploreElements,
      element: {
        example: exampleExploreElement,
      },
    },
    example: exampleCraftExplore,
  },
};
