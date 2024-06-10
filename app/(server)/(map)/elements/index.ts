import { fileElemGql } from '../../(model)/elements/file/main';
import { linkElemGql } from '../../(model)/elements/link/main';
import { noteElemGql } from '../../(model)/elements/note/main';

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
