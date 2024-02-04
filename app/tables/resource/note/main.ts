export interface NoteObj {
  id: string;
  color: string;
  name: string;
  content: string;
}

export const exampleNote: NoteObj = {
  id: '0',
  color: 'yellow-500',
  content: 'How do I write poetry?',
  name: 'Example Sticky',
};

export const exampleNotes: NoteObj[] = [
  {
    id: '0',
    color: 'yellow-500',
    content: 'How do I write poetry?',
    name: 'Example Sticky',
  },
  {
    id: '0',
    color: 'yellow-500',
    content: 'How do I write poetry?',
    name: 'Example Sticky',
  },
  {
    id: '0',
    color: 'yellow-500',
    content: 'How do I write poetry?',
    name: 'Example Sticky',
  },
];
