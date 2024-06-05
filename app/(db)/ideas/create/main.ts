import { amplifyClient } from '@/(api)/aws/graphql/main';
import { SceneIdeaObj } from '@/(model)/space/chapter/scene/idea/main';
import { FileElem } from '@/(model)/elements/file/main';
import { LinkElem } from '@/(model)/elements/link/main';
import { LogElem } from '@/(model)/elements/log/main';
import { CollectionResourceVariant } from '@/(model)/archive/resource/main';
import { NoteElem } from '@/(model)/elements/note/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  createIdeaObj,
} from '@/graphql/mutations';

export interface IdeasCreateGqlHelperType {
  createFromFile: (
    partId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    file: FileElem,
  ) => Promise<SceneIdeaObj>;
  createFromLink: (
    partId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    link: LinkElem,
  ) => Promise<SceneIdeaObj>;
  createFromLog: (
    partId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    log: LogElem,
  ) => Promise<SceneIdeaObj>;
  createFromNote: (
    partId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    note: NoteElem,
  ) => Promise<SceneIdeaObj>;
}

export const ideasCreateGqlHelper: IdeasCreateGqlHelperType = {
  createFromFile: async (
    partId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    file: FileElem,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createIdeaObj,
      variables: {
        input: gqlArgs({
          partId: partId,
          title: title,
          description: description,
          x: x,
          y: y,
          variant: CollectionResourceVariant.FILE,
          file: file,
        }),
      },
    });
    const ideaObj = payload?.data.createIdeaObj as SceneIdeaObj;
    return ideaObj;
  },
  createFromLink: async (
    partId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    link: LinkElem,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createIdeaObj,
      variables: {
        input: gqlArgs({
          partId: partId,
          title: title,
          description: description,
          x: x,
          y: y,
          variant: CollectionResourceVariant.LINK,
          link: link,
        }),
      },
    });
    const ideaObj = payload?.data.createIdeaObj as SceneIdeaObj;
    return ideaObj;
  },
  createFromLog: async (
    partId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    log: LogElem,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createIdeaObj,
      variables: {
        input: gqlArgs({
          partId: partId,
          title: title,
          description: description,
          x: x,
          y: y,
          variant: CollectionResourceVariant.LOG,
          log: log,
        }),
      },
    });
    const ideaObj = payload?.data.createIdeaObj as SceneIdeaObj;
    return ideaObj;
  },
  createFromNote: async (
    partId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    note: NoteElem,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createIdeaObj,
      variables: {
        input: gqlArgs({
          partId: partId,
          title: title,
          description: description,
          x,
          y,
          variant: CollectionResourceVariant.NOTE,
          note: note,
        }),
      },
    });
    const ideaObj = payload?.data.createIdeaObj as SceneIdeaObj;
    return ideaObj;
  },
};

