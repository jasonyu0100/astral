import { fileElemGql } from '../../elements/file/main';
import { linkElemGql } from '../../elements/link/main';
import { noteElemGql } from '../../elements/note/main';

export const elementsMap = {
  children: ['file', 'note', 'link'],
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
};
