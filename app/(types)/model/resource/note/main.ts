import { createContext } from "react";

export enum NoteVariant {
  STICKY = 'STICKY',
  PROMPT = 'PROMPT',
  QUOTE = 'QUOTE',
}

export interface NoteObj {
  id: string;
  title: string;
  text: string;
  variant: string;
}

export const NoteContext = createContext<NoteObj>({} as NoteObj);

export const exampleNote: NoteObj = {
  id: '0',
  title: 'Example Sticky',
  text: 'How do I write poetry?',
  variant: NoteVariant.STICKY,
};

export const exampleNotes: NoteObj[] = [
  {
    id: '0',
    text: 'How do I write poetry?',
    title: 'Example Sticky',
    variant: NoteVariant.STICKY,
  },
  {
    id: '0',
    text: 'How do I write poetry?',
    title: 'Example Sticky',
    variant: NoteVariant.STICKY,
  },
  {
    id: '0',
    text: 'How do I write poetry?',
    title: 'Example Sticky',
    variant: NoteVariant.STICKY,
  },
];
