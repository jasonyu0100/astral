import { createContext } from 'react';
import { ModelInterface } from '../../main';

export enum NoteElemVariant {
  STICKY = 'STICKY',
  PROMPT = 'PROMPT',
  QUOTE = 'QUOTE',
}

export interface NoteElem {
  id: string;
  title: string;
  text: string;
  variant: string;
}

export const noteElemGql = `
type NoteElem {
  id: String!
  title: String
  text: String
  variant: String
}

input NoteElemInput {
  id: String!
  title: String
  text: String
  variant: String
}
`;

export const ContextForNoteElem = createContext<NoteElem>({} as NoteElem);

export const exampleNoteElem: NoteElem = {
  id: '0',
  title: 'Example Sticky',
  text: 'How do I write poetry?',
  variant: NoteElemVariant.STICKY,
};

export const exampleNoteElems: NoteElem[] = [
  {
    id: '0',
    text: 'How do I write poetry?',
    title: 'Example Sticky',
    variant: NoteElemVariant.STICKY,
  },
  {
    id: '0',
    text: 'How do I write poetry?',
    title: 'Example Sticky',
    variant: NoteElemVariant.STICKY,
  },
  {
    id: '0',
    text: 'How do I write poetry?',
    title: 'Example Sticky',
    variant: NoteElemVariant.STICKY,
  },
];

export const noteElemModel: ModelInterface<NoteElem> = {
  example: exampleNoteElem,
  examples: exampleNoteElems,
  gql: noteElemGql,
  name: 'note',
  children: [],
  parentKey: 'id',
}