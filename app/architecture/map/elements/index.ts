import { elementModel } from '@/architecture/model/elements/main';
import { fileElemGql } from '../../(model)/elements/file/main';
import { textElemModel } from '../../(model)/elements/text/main';
import { urlElemModel } from '../../(model)/elements/url/main';

export const elementsMap = {
  model: elementModel,
  file: {
    children: [],
    gql: fileElemGql,
    db: null,
  },
  note: {
    model: textElemModel,
  },
  link: {
    model: urlElemModel,
  },
};
