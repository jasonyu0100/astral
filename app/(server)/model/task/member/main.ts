import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface TaskMemberObj {
  id: string;
  taskId: string;
  userId: string;
  created: string;
}

export const TaskMemberGql = `
type TaskMemberObj {
  id: String!
  taskId: String!
  userId: String!
  created: String!
}
`;

export const ContextForTaskMemberObj = createContext<TaskMemberObj>(
  {} as TaskMemberObj,
);

export const exampleTaskMember: TaskMemberObj = {
  id: '0',
  taskId: '0',
  userId: '0',
  created: new Date().toISOString(),
};

export const exampleTaskMembers: TaskMemberObj[] = [
  {
    id: '0',
    taskId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    taskId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    taskId: '0',
    userId: '0',
    created: new Date().toISOString(),
  },
];

export const taskMemberModel: ModelInterface<TaskMemberObj> = {
  name: 'member',
  gql: TaskMemberGql,
  example: exampleTaskMember,
  examples: exampleTaskMembers,
  parentKey: 'taskId',
  children: [],
};
