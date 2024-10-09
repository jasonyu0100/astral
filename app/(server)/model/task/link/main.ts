import { exampleFileElem, FileElem } from '@/(server)/model/elements/file/main';
import { TextElem } from '@/(server)/model/elements/text/main';
import { UrlElem } from '@/(server)/model/elements/url/main';
import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface TaskLinkObj {
  id: string;
  taskId: string;
  userId: string;
  fromIdea: boolean;
  ideaId?: string;
  chapterId?: string;
  arcId?: string;
  spaceId?: string;
  sceneId?: string;
  title: string;
  description: string;
  variant: string;
  fileElem?: FileElem;
  textElem?: TextElem;
  urlElem?: UrlElem;
  created: string;
}

export const taskLinkGql = `
type TaskLinkObj {
  id: String!
  taskId: String!
  userId: String!
  fromIdea: Boolean!
  ideaId: String
  chapterId: String
  arcId: String
  spaceId: String
  sceneId: String
  title: String!
  description: String!
  variant: String!
  fileElem: FileElem
  textElem: TextElem
  urlElem: UrlElem
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
  title: 'Task Link Example',
  description: 'Task Link Description',
  variant: 'file',
  fileElem: exampleFileElem,
  created: new Date().toISOString(),
  fromIdea: false,
};

export const exampleTaskLinks: TaskLinkObj[] = [
  {
    id: '0',
    taskId: '0',
    userId: '0',
    title: 'Task Link Example',
    description: 'Task Link Description',
    variant: 'file',
    fileElem: exampleFileElem,
    created: new Date().toISOString(),
    fromIdea: false,
  },
  {
    id: '0',
    taskId: '0',
    userId: '0',
    title: 'Task Link Example',
    description: 'Task Link Description',
    variant: 'file',
    fileElem: exampleFileElem,
    created: new Date().toISOString(),
    fromIdea: false,
  },
  {
    id: '0',
    taskId: '0',
    userId: '0',
    title: 'Task Link Example',
    description: 'Task Link Description',
    variant: 'file',
    fileElem: exampleFileElem,
    created: new Date().toISOString(),
    fromIdea: false,
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
