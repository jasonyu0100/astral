import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { StarObj } from '@/(logic)/internal/model/draft/constellation/star/main';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { LinkObj } from '@/(logic)/internal/model/resource/link/main';
import { LogObj } from '@/(logic)/internal/model/resource/log/main';
import { ResourceVariant } from '@/(logic)/internal/model/resource/main';
import { NoteObj } from '@/(logic)/internal/model/resource/note/main';
import { removeTypename, removeEmpty, gqlArgs } from '@/(logic)/utils/clean';
import {
  createStarObj,
  deleteStarObj,
  updateStarObj,
} from '@/graphql/mutations';
import { listStarObjs } from '@/graphql/queries';

export interface StarsGqlHelper {
  gqlListStars: (constellationId: string) => Promise<StarObj[]>;
  gqlCreateFileStar: (
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    file: FileObj,
  ) => Promise<StarObj>;
  gqlCreateLinkStar: (
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    link: LinkObj,
  ) => Promise<StarObj>;
  gqlCreateLogStar: (
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    log: LogObj,
  ) => Promise<StarObj>;
  gqlCreateNoteStar: (
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    note: NoteObj,
  ) => Promise<StarObj>;
  gqlUpdateStars: (updatedStarObjs: StarObj[]) => Promise<StarObj[]>;
  gqlUpdateStar: (starId: string, updatedStarObj: StarObj) => Promise<StarObj>;
  gqlDeleteStar: (starId: string) => Promise<StarObj>;
}

export const gqlHelper: StarsGqlHelper = {
  gqlListStars: async (constellationId: string) => {
    const payload = await amplifyClient.graphql({
      query: listStarObjs,
      variables: {
        filter: {
          constellationId: {
            eq: constellationId,
          },
        },
      },
    });
    const starObjs = (payload?.data.listStarObjs?.items as StarObj[]) || [];
    return starObjs;
  },
  gqlCreateFileStar: async (
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
  gqlCreateLinkStar: async (
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
  gqlCreateLogStar: async (
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
  gqlUpdateStars: async (stars: StarObj[]) => {
    const updatedStarObjs = await Promise.all(
      stars.map(async (star: StarObj) => {
        console.log(star, gqlArgs(star));
        const payload = await amplifyClient.graphql({
          query: updateStarObj,
          variables: {
            input: gqlArgs(star),
          },
        });
        const updatedStar = payload.data?.updateStarObj as StarObj;
        return updatedStar;
      }),
    );
    return updatedStarObjs;
  },
  gqlCreateNoteStar: async (
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
  gqlDeleteStar: async (starId: string) => {
    const payload = await amplifyClient.graphql({
      query: deleteStarObj,
      variables: {
        input: {
          id: starId,
        },
      },
    });
    const starObj = payload?.data?.deleteStarObj as StarObj;
    return starObj;
  },
  gqlUpdateStar: async (starId: string, updatedStarObj: StarObj) => {
    const payload = await amplifyClient.graphql({
      query: updateStarObj,
      variables: {
        input: gqlArgs({
          id: starId,
          title: updatedStarObj.title,
          description: updatedStarObj.description,
          x: updatedStarObj.x,
          y: updatedStarObj.y,
          variant: updatedStarObj.variant,
          file: updatedStarObj.file,
          log: updatedStarObj.log,
          link: updatedStarObj.link,
          note: updatedStarObj.note,
        }),
      },
    });
    const updatedStar = payload?.data?.updateStarObj as StarObj;
    return updatedStar;
  },
};
