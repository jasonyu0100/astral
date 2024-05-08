import { partExamples, ideaExamples } from './map/table';
import { chatExamples, messageExamples } from './storm/table';
import { collectionExamples, galleryExamples } from './gallery/table';
import { chapterExamples, spaceExamples } from './space/table';
import { userExamples as userExamples } from './user/table';
import { verseExamples } from './draft/table';
import {
  fileExamples,
  logExamples as logExamples,
  resourceExamples,
  stickyExamples,
} from './resource/table';
import { horizonExamples } from './horizon/table';

export interface ModelExample {
  description: string;
  example: any;
  examples: any[];
}

export interface TableObjectDescriptor {
  example: any;
  examples: any[];
  schema: string;
}

export const architecture = {
  user: {
    examples: userExamples,
  },
  resource: {
    example: resourceExamples,
    log: {
      examples: logExamples,
    },
    sticky: {
      examples: stickyExamples,
    },
    file: {
      examples: fileExamples,
    },
  },
  gallery: {
    examples: galleryExamples,
    collection: {
      table: collectionExamples,
    },
  },
  horizon: {
    examples: horizonExamples,
  },
  space: {
    examples: spaceExamples,
    chapter: {
      table: chapterExamples,
      storm: {
        chat: {
          table: chatExamples,
          message: {
            table: messageExamples,
          },
        },
      },
      map: {
        part: {
          examples: partExamples,
          star: {
            table: ideaExamples,
          },
        },
      },
      draft: {
        verse: {
          table: verseExamples,
        },
      },
      sea: {
      },
    },
  },
};
