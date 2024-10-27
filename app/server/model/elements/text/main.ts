import { createContext } from 'react';
import { ModelInterface } from '../../main';

export enum TextElementVariant {
  STICKY = 'STICKY',
  ARTICLE = 'ARTICLE',
}

export interface TextElement {
  id: string;
  title: string;
  text: string;
  variant: string;
}

export const textElementGql = `
type TextElement {
  id: String!
  title: String
  text: String
  variant: String
}
`;

export const ContextForTextElement = createContext<TextElement>(
  {} as TextElement,
);

export const exampleTextElement: TextElement = {
  id: '0',
  title: 'Example Sticky',
  text: 'How do I write poetry?',
  variant: TextElementVariant.STICKY,
};

export const exampleTextElements: TextElement[] = [
  {
    id: '0',
    text: 'How do I write poetry?',
    title: 'Example Sticky',
    variant: TextElementVariant.STICKY,
  },
  {
    id: '0',
    text: 'How do I write poetry?',
    title: 'Example Sticky',
    variant: TextElementVariant.STICKY,
  },
  {
    id: '0',
    text: 'How do I write poetry?',
    title: 'Example Sticky',
    variant: TextElementVariant.STICKY,
  },
];

export const textElementsModel: ModelInterface<TextElement> = {
  example: exampleTextElement,
  examples: exampleTextElements,
  gql: textElementGql,
  name: 'note',
  children: [],
  parentKey: 'id',
};
