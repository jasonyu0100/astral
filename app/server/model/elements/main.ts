import { ModelInterface } from '../main';

export enum ElementVariant {
  FILE = 'FILE',
  TEXT = 'TEXT',
  URL = 'URL',
}

export const elementModel: ModelInterface<unknown> = {
  name: 'element',
  gql: '',
  example: {},
  examples: [],
  parentKey: '',
  children: ['file', 'note', 'link'],
};
