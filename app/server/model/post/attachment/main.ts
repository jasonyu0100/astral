import { exampleFileElem, FileElem } from '@/server/model/elements/file/main';
import { ElementVariant } from '@/server/model/elements/main';
import { TextElem } from '@/server/model/elements/text/main';
import { UrlElem } from '@/server/model/elements/url/main';
import { ModelInterface } from '@/server/model/main';
import { createContext } from 'react';

export interface PostAttachmentObj {
  id: string;
  userId: string;
  postId: string;
  created: string;
  variant: string;
  ideaId?: string;
  fileElem?: FileElem;
  textElem?: TextElem;
  urlElem?: UrlElem;
}

export const postAttachmentGql = `
type PostAttachmentObj {
  id: String!
  postId: String!
  created: String!
  variant: String!
  ideaId: String
  userId: String
  fileElem: FileElem
  textElem: TextElem
  urlElem: UrlElem
}
`;

export const ContextForPostAttachmentObj = createContext<PostAttachmentObj>(
  {} as PostAttachmentObj,
);

export const examplePostAttachment: PostAttachmentObj = {
  id: '0',
  postId: '0',
  created: new Date().toISOString(),
  userId: '0',
  variant: ElementVariant.FILE,
  fileElem: exampleFileElem,
};

export const examplePostAttachments: PostAttachmentObj[] = [
  {
    id: '0',
    postId: '0',
    created: new Date().toISOString(),
    userId: '0',
    variant: ElementVariant.FILE,
    fileElem: exampleFileElem,
  },
  {
    id: '1',
    postId: '0',
    created: new Date().toISOString(),
    userId: '0',
    variant: ElementVariant.FILE,
    fileElem: exampleFileElem,
  },
  {
    id: '2',
    postId: '0',
    created: new Date().toISOString(),
    userId: '0',
    variant: ElementVariant.FILE,
    fileElem: exampleFileElem,
  },
];

export const postAttachmentModel: ModelInterface<PostAttachmentObj> = {
  name: 'attachment',
  example: examplePostAttachment,
  examples: examplePostAttachments,
  gql: postAttachmentGql,
  children: [],
  parentKey: 'postId',
};
