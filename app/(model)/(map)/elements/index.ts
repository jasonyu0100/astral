import { fileElemGql } from '../../elements/file/main';
import { linkElemGql } from '../../elements/link/main';
import { logElemGql } from '../../elements/log/main';
import { noteElemGql } from '../../elements/note/main';
import { scoreElemGql } from '../../elements/score/main';

export const elementsMap = {
  children: ['file', 'note', 'link', 'log', 'score'],
  gql: null,
  db: null,
  file: {
    children: [],
    gql: fileElemGql,
    db: null,
  },
  note: {
    children: [],
    gql: noteElemGql,
    db: null,
  },
  link: {
    children: [],
    gql: linkElemGql,
    db: null,
  },
  log: {
    children: [],
    gql: logElemGql,
    db: null,
  },
  score: {
    children: [],
    gql: scoreElemGql,
    db: null,
  },
};
