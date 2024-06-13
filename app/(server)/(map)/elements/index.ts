import { elementModel } from '@/(server)/(model)/elements/main';
import { fileElemGql } from '../../(model)/elements/file/main';
import { linkElemGql, linkElemModel } from '../../(model)/elements/link/main';
import { noteElemGql, noteElemModel } from '../../(model)/elements/note/main';

export const elementsMap = {
  model: elementModel,
  file: {
    children: [],
    gql: fileElemGql,
    db: null,
  },
  note: {
    model: noteElemModel,
  },
  link: {
    model: linkElemModel,
  },
};
