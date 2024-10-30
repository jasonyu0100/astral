import { ModelInterface } from '@/server/model/main';
import { createContext } from 'react';

export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in-progress',
  REVIEW = 'review',
  DONE = 'done',
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
  taskStatus: TaskStatus.TODO,
};

export const exampleTasks: TaskObj[] = [
  {
    id: '0',
    userId: '0',
    chapterId: '0',
    title: 'Way 1',
    description: 'Way Description',
    created: new Date().toISOString(),
    taskStatus: TaskStatus.TODO,
  },
  {
    id: '1',
    userId: '0',
    chapterId: '0',
    title: 'Way 2',
    description: 'Way Description',
    created: new Date().toISOString(),
    taskStatus: TaskStatus.TODO,
  },
  {
    id: '2',
    userId: '0',
    chapterId: '0',
    title: 'Way 3',
    description: 'Way Description',
    created: new Date().toISOString(),
    taskStatus: TaskStatus.TODO,
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
