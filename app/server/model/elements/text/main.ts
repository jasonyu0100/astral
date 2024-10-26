import { createContext } from 'react';
import { ModelInterface } from '../../main';

export enum TextElemVariant {
  STICKY = 'STICKY',
  ARTICLE = 'ARTICLE',
}

export interface TextElem {
  id: string;
  title: string;
  text: string;
  variant: string;
}

export const textElemGql = `
type TextElem {
  id: String!
  title: String
  text: String
  variant: String
}

input TextElemInput {
  id: String!
  title: String
  text: String
  variant: String
}
`;

export const ContextForTextElem = createContext<TextElem>({} as TextElem);

export const exampleTextElem: TextElem = {
  id: '0',
  title: 'Example Sticky',
  text: 'How do I write poetry?',
  variant: TextElemVariant.STICKY,
};

export const exampleTextElems: TextElem[] = [
  {
    id: '0',
    text: 'How do I write poetry?',
    title: 'Example Sticky',
    variant: TextElemVariant.STICKY,
  },
  {
    id: '0',
    text: 'How do I write poetry?',
    title: 'Example Sticky',
    variant: TextElemVariant.STICKY,
  },
  {
    id: '0',
    text: 'How do I write poetry?',
    title: 'Example Sticky',
    variant: TextElemVariant.STICKY,
  },
];

export const textElemModel: ModelInterface<TextElem> = {
  example: exampleTextElem,
  examples: exampleTextElems,
  gql: textElemGql,
  name: 'note',
  children: [],
  parentKey: 'id',
};
