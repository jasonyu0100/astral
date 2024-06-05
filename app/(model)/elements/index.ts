import { fileElemGql } from './file/main';
import { linkElemGql } from './link/main';
import { logElemGql } from './log/main';
import { noteElemGql } from './note/main';
import { scoreElemGql } from './score/main';

export const elementsMap = {
  children: ['file', 'note', 'link', 'log', 'score'],
  file: {
    children: [],
    gql: fileElemGql,
  },
  note: {
    children: [],
    gql: noteElemGql,
  },
  link: {
    children: [],
    gql: linkElemGql,
  },
  log: {
    children: [],
    gql: logElemGql,
  },
  score: {
    children: [],
    gql: scoreElemGql,
  },
};
