import { amplifyClient } from '@/(api)/aws/graphql/main';
import { SceneIdeaObj } from '@/(model)/space/chapter/scene/idea/main';
import { FileObj } from '@/(model)/concept/file/main';
import { LinkObj } from '@/(model)/concept/link/main';
import { LogObj } from '@/(model)/concept/log/main';
import { CollectionResourceVariant } from '@/(model)/media/resource/main';
import { NoteObj } from '@/(model)/concept/note/main';
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
    file: FileObj,
  ) => Promise<SceneIdeaObj>;
  createFromLink: (
    partId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    link: LinkObj,
  ) => Promise<SceneIdeaObj>;
  createFromLog: (
    partId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    log: LogObj,
  ) => Promise<SceneIdeaObj>;
  createFromNote: (
    partId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    note: NoteObj,
  ) => Promise<SceneIdeaObj>;
}

export const ideasCreateGqlHelper: IdeasCreateGqlHelperType = {
  createFromFile: async (
    partId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    file: FileObj,
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
    link: LinkObj,
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
    log: LogObj,
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
    note: NoteObj,
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

