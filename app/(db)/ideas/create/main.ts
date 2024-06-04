import { amplifyClient } from '@/(api)/aws/graphql/main';
import { IdeaObj } from '@/(model)/space/chapter/scene/idea/main';
import { FileObj } from '@/(model)/media/resource/file/main';
import { LinkObj } from '@/(model)/media/resource/link/main';
import { LogObj } from '@/(model)/media/resource/log/main';
import { ResourceVariant } from '@/(model)/media/resource/main';
import { NoteObj } from '@/(model)/media/resource/note/main';
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
  ) => Promise<IdeaObj>;
  createFromLink: (
    partId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    link: LinkObj,
  ) => Promise<IdeaObj>;
  createFromLog: (
    partId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    log: LogObj,
  ) => Promise<IdeaObj>;
  createFromNote: (
    partId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    note: NoteObj,
  ) => Promise<IdeaObj>;
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
          variant: ResourceVariant.FILE,
          file: file,
        }),
      },
    });
    const ideaObj = payload?.data.createIdeaObj as IdeaObj;
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
          variant: ResourceVariant.LINK,
          link: link,
        }),
      },
    });
    const ideaObj = payload?.data.createIdeaObj as IdeaObj;
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
          variant: ResourceVariant.LOG,
          log: log,
        }),
      },
    });
    const ideaObj = payload?.data.createIdeaObj as IdeaObj;
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
          variant: ResourceVariant.NOTE,
          note: note,
        }),
      },
    });
    const ideaObj = payload?.data.createIdeaObj as IdeaObj;
    return ideaObj;
  },
};

