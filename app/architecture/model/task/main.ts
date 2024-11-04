import { ModelInterface } from '@/architecture/model/main';
import { createContext } from 'react';

export enum TaskStatus {
  BACKLOG = 'Backlog',
  PENDING = 'Pending',
  CURRENT = 'Current',
  DONE = 'Done',
}

export enum ChapterTaskStatus {
  COMPLETE = 'complete',
  TODO = 'todo',
  IN_PROGRESS = 'in-progress',
  WAITING = 'pending',
  EMPTY = 'empty',
}
export interface TaskObj {
  id: string;
  userId: string;
  chapterId: string;
  taskStatus: string;
  title: string;
  description: string;
  created: string;
}

export const TaskGql = `
type TaskObj {
  id: String!
  userId: String!
  chapterId: String!
  title: String!
  description: String!
  taskStatus: String!
  created: String!
}
`;

export const ContextForTaskObj = createContext<TaskObj>({} as TaskObj);

export const exampleTask: TaskObj = {
  id: '0',
  userId: '0',
  chapterId: '0',
  title: 'Way Example',
  description: 'Way Description',
  created: new Date().toISOString(),
  taskStatus: TaskStatus.PENDING,
};

export const exampleTasks: TaskObj[] = [
  {
    id: '0',
    userId: '0',
    chapterId: '0',
    title: 'Way 1',
    description: 'Way Description',
    created: new Date().toISOString(),
    taskStatus: TaskStatus.PENDING,
  },
  {
    id: '1',
    userId: '0',
    chapterId: '0',
    title: 'Way 2',
    description: 'Way Description',
    created: new Date().toISOString(),
    taskStatus: TaskStatus.PENDING,
  },
  {
    id: '2',
    userId: '0',
    chapterId: '0',
    title: 'Way 3',
    description: 'Way Description',
    created: new Date().toISOString(),
    taskStatus: TaskStatus.PENDING,
  },
];

export const taskModel: ModelInterface<TaskObj> = {
  name: 'task',
  gql: TaskGql,
  example: exampleTask,
  examples: exampleTasks,
  parentKey: 'chapterId',
  children: ['link', 'member'],
};
