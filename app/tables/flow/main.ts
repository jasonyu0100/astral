export interface FlowObj {
  id: string;
  chapterId: string;
}

export const flowSchema = `
type FlowObj {
  id: String!
  chapterId: String!
}`;

export const exampleFlow: FlowObj = {
  id: '0',
  chapterId: '0',
};

export const exampleFlows: FlowObj[] = [
  {
    id: '0',
    chapterId: '0',
  },
  {
    id: '1',
    chapterId: '0',
  },
];
