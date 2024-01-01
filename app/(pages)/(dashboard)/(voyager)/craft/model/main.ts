import {
  CraftDrive,
  exampleCraftDrive,
  exampleCraftSections,
} from "./drive/main";
import { CraftFile, exampleCraftFile } from "./drive/section/folder/file/main";
import {
  CraftFolder,
  exampleCraftFiles,
  exampleCraftFolder,
} from "./drive/section/folder/main";
import {
  CraftSection,
  exampleCraftFolders,
  exampleCraftSection,
} from "./drive/section/main";
import {
  CraftSearch,
  exampleCraftSearch,
  exampleCraftSearchResults,
} from "./search/main";

export const craftModel: {
  drive: {
    sections: {
      section: {
        folders: {
          folder: {
            files: {
              example: CraftFile[];
              file: {
                example: CraftFile;
              };
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
} = {
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
};
