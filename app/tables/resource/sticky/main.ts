export interface StickyObj {
  id: string;
  color: string;
  name: string;
  content: string;
}

export const stickySchema = `
type StickyObj {
  id: String!
  color: String!
  name: String!
  content: String!
}
`;

export const exampleSticky: StickyObj = {
  id: '0',
  color: 'yellow-500',
  content: 'How do I write poetry?',
  name: 'Example Sticky',
};

export const exampleStickys: StickyObj[] = [
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
