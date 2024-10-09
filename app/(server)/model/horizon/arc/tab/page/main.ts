import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface TabPageObj {
  id: string;
  userId: string;
  tabId: string;
  title: string;
  summary: string;
  objective: string;
  created: string;
}

export const tabPageGql = `
type TabPageObj {
  id: String!
  userId: String!
  tabId: String!
  title: String!
  summary: String!
  objective: String!
  created: String!
}`;

export const ContextForTabPageObj = createContext<TabPageObj>({} as TabPageObj);

export const exampleTabPage: TabPageObj = {
  id: '0',
  userId: '0',
  tabId: '0',
  title: 'Idea Scene',
  objective: 'Scene Description',
  summary: 'Scene Summary',
  created: new Date().toISOString(),
};

export const exampleTabPages: TabPageObj[] = [
  {
    id: '0',
    userId: '0',
    tabId: '0',
    title: 'Idea Scene 1',
    objective: 'Scene Description',
    summary: 'Scene Summary',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    userId: '0',
    tabId: '0',
    title: 'Idea Scene 2',
    objective: 'Scene Description',
    summary: 'Scene Summary',
    created: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '0',
    tabId: '0',
    title: 'Idea Scene 3',
    objective: 'Scene Description',
    summary: 'Scene Summary',
    created: new Date().toISOString(),
  },
];

export const tabPageModel: ModelInterface<TabPageObj> = {
  name: 'tab',
  gql: tabPageGql,
  example: exampleTabPage,
  examples: exampleTabPages,
  parentKey: 'pageId',
  children: ['element'],
};
