import { FileElem, exampleFileElem } from '@/(model)/elements/file/main';
import { LinkElem } from '@/(model)/elements/link/main';
import { CollectionResourceVariant } from '@/(model)/gallery/collection/resource/main';
import { NoteElem } from '@/(model)/elements/note/main';
import { createContext } from 'react';

export enum SceneIdeaVariant {
  FILE = 'FILE',
  LINK = 'LINK',
  NOTE = 'NOTE',
}
export interface SceneIdeaObj {
  id: string;
  userId?: string;
  sceneId: string;
  title: string;
  description: string;
  x: number;
  y: number;
  variant: string;
  file?: FileElem;
  note?: NoteElem;
  link?: LinkElem;
}

export const sceneIdeaGql = `
type SceneIdeaObj {
  id: String!
  userId: String
  sceneId: String!
  title: String!
  description: String!
  x: Int!
  y: Int!
  variant: String!
  file: FileElem
  note: NoteElem
  link: LinkElem
}

input UpdateSceneIdeaObjInput {
	id: String!
	sceneId: String
	title: String
	description: String
	x: Int
	y: Int
	variant: String
  file: FileElemInput
  note: NoteElemInput
  link: LinkElemInput
}

input CreateSceneIdeaObjInput {
	id: String!
	sceneId: String
	title: String
	description: String
	x: Int
	y: Int
	variant: String
  file: FileElemInput
  note: NoteElemInput
  link: LinkElemInput
}


`;

export const SceneIdeaContext = createContext<SceneIdeaObj>({} as SceneIdeaObj);

export const exampleSceneIdea: SceneIdeaObj = {
  id: '0',
  sceneId: '0',
  title: 'Star 1',
  description: 'Twinkle twinkle little star',
  x: 120,
  y: 120,
  file: exampleFileElem,
  variant: CollectionResourceVariant.FILE,
};

export const exampleSceneIdeas: SceneIdeaObj[] = [
  {
    id: '0',
    sceneId: '0',
    title: 'Star 0',
    description: 'Twinkle twinkle little star',
    x: 120,
    y: 120,
    file: exampleFileElem,
    variant: CollectionResourceVariant.FILE,
  },
  {
    id: '1',
    sceneId: '0',
    title: 'Star 1',
    description: 'Twinkle twinkle little star',
    x: 240,
    y: 120,
    file: exampleFileElem,
    variant: CollectionResourceVariant.FILE,
  },
  {
    id: '2',
    sceneId: '0',
    title: 'Star 2',
    description: 'Twinkle twinkle little star',
    x: 360,
    y: 120,
    file: exampleFileElem,
    variant: CollectionResourceVariant.FILE,
  },
];
