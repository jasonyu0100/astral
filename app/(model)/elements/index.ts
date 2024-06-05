import { fileElemGql } from './file/main';
import { linkElemGql } from './link/main';
import { logElemGql } from './log/main';
import { noteElemGql } from './note/main';
import { scoreElemGql } from './score/main';

export const conceptGqlMap = {
  file: {
    gql: fileElemGql,
  },
  note: {
    gql: noteElemGql,
  },
  link: { gql: linkElemGql },
  log: { gql: logElemGql },
  score: { gql: scoreElemGql },
};
