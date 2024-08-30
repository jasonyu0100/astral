import { exampleFileElem, FileElem } from '@/(server)/model/elements/file/main';
import { ElementVariant } from '@/(server)/model/elements/main';
import { TextElem } from '@/(server)/model/elements/text/main';
import { UrlElem } from '@/(server)/model/elements/url/main';
import { ModelInterface } from '@/(server)/model/main';
import { createContext } from 'react';

export interface SpotlightAttachmentObj {
  id: string;
  userId: string;
  spotlightId: string;
  created: string;
  variant: string;
  fileElem?: FileElem;
  textElem?: TextElem;
  urlElem?: UrlElem;
}

export const spotlightAttachmentGql = `
type SpotlightAttachmentObj {
  id: String!
  userId: String
  spotlightId: String!
  created: String!
  variant: String!
  fileElem: FileElem
  textElem: TextElem
  urlElem: UrlElem
}
`;

export const ContextForSpotlightAttachmentObj =
  createContext<SpotlightAttachmentObj>({} as SpotlightAttachmentObj);

export const exampleSpotlightAttachment: SpotlightAttachmentObj = {
  id: '0',
  spotlightId: '0',
  created: new Date().toISOString(),
  userId: '0',
  variant: ElementVariant.FILE,
  fileElem: exampleFileElem,
};

export const exampleSpotlightAttachments: SpotlightAttachmentObj[] = [
  {
    id: '0',
    spotlightId: '0',
    created: new Date().toISOString(),
    userId: '0',
    variant: ElementVariant.FILE,
    fileElem: exampleFileElem,
  },
  {
    id: '1',
    spotlightId: '0',
    created: new Date().toISOString(),
    userId: '0',
    variant: ElementVariant.FILE,
    fileElem: exampleFileElem,
  },
  {
    id: '2',
    spotlightId: '0',
    created: new Date().toISOString(),
    userId: '0',
    variant: ElementVariant.FILE,
    fileElem: exampleFileElem,
  },
];

export const spotlightAttachmentModel: ModelInterface<SpotlightAttachmentObj> =
  {
    name: 'attachment',
    example: exampleSpotlightAttachment,
    examples: exampleSpotlightAttachments,
    gql: spotlightAttachmentGql,
    children: [],
    parentKey: 'spotlightId',
  };
