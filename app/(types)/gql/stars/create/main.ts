import { amplifyClient } from '@/(lgx)/external/aws/graphql/main';
import { StarObj } from '@/(types)/model/map/constellation/star/main';
import { FileObj } from '@/(types)/model/resource/file/main';
import { LinkObj } from '@/(types)/model/resource/link/main';
import { LogObj } from '@/(types)/model/resource/log/main';
import { ResourceVariant } from '@/(types)/model/resource/main';
import { NoteObj } from '@/(types)/model/resource/note/main';
import { gqlArgs } from '@/(lgx)/utils/clean';
import {
  createStarObj,
} from '@/graphql/mutations';

export interface StarsCreateGqlHelper {
  createFromFile: (
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    file: FileObj,
  ) => Promise<StarObj>;
  createFromLink: (
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    link: LinkObj,
  ) => Promise<StarObj>;
  createFromLog: (
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    log: LogObj,
  ) => Promise<StarObj>;
  createFromNote: (
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    note: NoteObj,
  ) => Promise<StarObj>;
}

export const starsCreateGqlHelper: StarsCreateGqlHelper = {
  createFromFile: async (
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    file: FileObj,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createStarObj,
      variables: {
        input: gqlArgs({
          constellationId: constellationId,
          title: title,
          description: description,
          x: x,
          y: y,
          variant: ResourceVariant.FILE,
          file: file,
        }),
      },
    });
    const starObj = payload?.data.createStarObj as StarObj;
    return starObj;
  },
  createFromLink: async (
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    link: LinkObj,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createStarObj,
      variables: {
        input: gqlArgs({
          constellationId: constellationId,
          title: title,
          description: description,
          x: x,
          y: y,
          variant: ResourceVariant.LINK,
          link: link,
        }),
      },
    });
    const starObj = payload?.data.createStarObj as StarObj;
    return starObj;
  },
  createFromLog: async (
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    log: LogObj,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createStarObj,
      variables: {
        input: gqlArgs({
          constellationId: constellationId,
          title: title,
          description: description,
          x: x,
          y: y,
          variant: ResourceVariant.LOG,
          log: log,
        }),
      },
    });
    const starObj = payload?.data.createStarObj as StarObj;
    return starObj;
  },
  createFromNote: async (
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    note: NoteObj,
  ) => {
    const payload = await amplifyClient.graphql({
      query: createStarObj,
      variables: {
        input: gqlArgs({
          constellationId: constellationId,
          title: title,
          description: description,
          x,
          y,
          variant: ResourceVariant.NOTE,
          note: note,
        }),
      },
    });
    const starObj = payload?.data.createStarObj as StarObj;
    return starObj;
  },
};

