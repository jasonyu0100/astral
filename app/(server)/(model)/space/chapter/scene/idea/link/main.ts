import { ModelInterface } from '@/(server)/(model)/main';
import { createContext } from 'react';

export interface IdeaLinkObj {
  id: string;
  sceneId: string;
  startId: string;
  endId: string;
  created: string;
}

export const ideaLinkGql = `
type IdeaLinkObj {
	id: String!
	sceneId: String!
	startId: String!
	endId: String!
	created: String!
}
`;

export const ContextForIdeaLinkObj = createContext<IdeaLinkObj>(
  {} as IdeaLinkObj,
);

export const exampleIdeaLink: IdeaLinkObj = {
  id: '0',
  sceneId: '0',
  startId: '0',
  endId: '1',
  created: new Date().toISOString(),
};

export const exampleIdeaLinks: IdeaLinkObj[] = [
  {
    id: '0',
    sceneId: '0',
    startId: '0',
    endId: '1',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    sceneId: '0',
    startId: '0',
    endId: '1',
    created: new Date().toISOString(),
  },
  {
    id: '0',
    sceneId: '0',
    startId: '0',
    endId: '1',
    created: new Date().toISOString(),
  },
];

export const ideaLinkModel: ModelInterface<IdeaLinkObj> = {
  name: 'link',
  gql: ideaLinkGql,
  example: exampleIdeaLink,
  examples: exampleIdeaLinks,
  parentKey: 'sceneId',
  children: [],
};
