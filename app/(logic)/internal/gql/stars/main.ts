import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { StarObj } from '@/(logic)/internal/model/draft/constellation/star/main';
import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { LinkObj } from '@/(logic)/internal/model/resource/link/main';
import { LogObj } from '@/(logic)/internal/model/resource/log/main';
import { ResourceVariant } from '@/(logic)/internal/model/resource/main';
import { NoteObj } from '@/(logic)/internal/model/resource/note/main';
import { removeTypename, removeEmpty, cleanGql } from '@/(logic)/utils/clean';
import { createStarObj, updateStarObj } from '@/graphql/mutations';
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
  gqlUpdateStars: (stars: StarObj[]) => Promise<StarObj[]>;
  gqlCreateNoteStar: (
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    note: NoteObj,
  ) => Promise<StarObj>;
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
    const stars = (payload?.data.listStarObjs?.items as StarObj[]) || [];
    return stars;
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
        input: {
          constellationId: constellationId,
          title: title,
          description: description,
          x,
          y,
          variant: ResourceVariant.FILE,
          file: {
            id: file.id,
            src: file.src,
            title: file.title,
            size: file.size,
            fileType: file.fileType,
            variant: file.variant,
          },
        },
      },
    });
    const star = payload?.data.createStarObj as StarObj;
    return star;
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
        input: {
          constellationId: constellationId,
          title: title,
          description: description,
          x,
          y,
          variant: ResourceVariant.LINK,
          link: link,
        },
      },
    });
    const star = payload?.data.createStarObj as StarObj;
    return star;
  },
  gqlCreateLogStar: async (
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    log: LogObj,
  ) => {
    console.log(log);
    const payload = await amplifyClient.graphql({
      query: createStarObj,
      variables: {
        input: {
          constellationId: constellationId,
          title: title,
          description: description,
          x,
          y,
          variant: ResourceVariant.LOG,
          log: log,
        },
      },
    });
    const star = payload?.data.createStarObj as StarObj;
    return star;
  },
  gqlUpdateStars: async (stars: StarObj[]) => {
    const updatedStars = await Promise.all(
      stars.map(async (star: StarObj) => {
        let input = removeTypename(removeEmpty(star));
        const payload = await amplifyClient.graphql({
          query: updateStarObj,
          variables: {
            input: input,
          },
        });
        const updatedStar = payload.data?.updateStarObj as StarObj;
        return updatedStar;
      }),
    );
    return updatedStars;
  },
  gqlCreateNoteStar: async (
    constellationId: string,
    title: string,
    description: string,
    x: number,
    y: number,
    note: NoteObj,
  ) => {
    const cleanedNote = cleanGql(note);
    const payload = await amplifyClient.graphql({
      query: createStarObj,
      variables: {
        input: {
          constellationId: constellationId,
          title: title,
          description: description,
          x,
          y,
          variant: ResourceVariant.NOTE,
          note: cleanedNote,
        },
      },
    });
    const star = payload?.data.createStarObj as StarObj;
    return star;
  },
};
