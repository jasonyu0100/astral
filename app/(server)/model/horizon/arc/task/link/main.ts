import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface TaskLinkObj {
  id: string;
  taskId: string;
  userId: string;
  pageId: string;
  title: string;
  description: string;
  created: string;
}

export const taskLinkGql = `
type TaskLinkObj {
  id: String!
  taskId: String!
  userId: String!
  title: String!
  description: String!
  created: String!
}
`;

export const ContextForTaskLinkObj = createContext<TaskLinkObj>(
  {} as TaskLinkObj,
);

export const exampleTaskLink: TaskLinkObj = {
  id: '0',
  taskId: '0',
  userId: '0',
  title: 'Way Link Example',
  description: 'Way Link Description',
  created: new Date().toISOString(),
  pageId: '0',
};

export const exampleTaskLinks: TaskLinkObj[] = [
  {
    id: '0',
    taskId: '0',
    userId: '0',
    title: 'Way Link Example',
    description: 'Way Link Description',
    created: new Date().toISOString(),
    pageId: '0',
  },
  {
    id: '0',
    taskId: '0',
    userId: '0',
    title: 'Way Link Example',
    description: 'Way Link Description',
    created: new Date().toISOString(),
    pageId: '0',
  },
  {
    id: '0',
    taskId: '0',
    userId: '0',
    title: 'Way Link Example',
    description: 'Way Link Description',
    created: new Date().toISOString(),
    pageId: '0',
  },
];

export const taskLinkModel: ModelInterface<TaskLinkObj> = {
  name: 'link',
  gql: taskLinkGql,
  example: exampleTaskLink,
  examples: exampleTaskLinks,
  parentKey: 'taskId',
  children: [],
};
