import { amplifyClient } from '@/(logic)/external/aws/graphql/main';
import { createStarObj, updateStarObj } from '@/graphql/mutations';
import { listStarObjs } from '@/graphql/queries';
import { StarObj } from '@/(logic)/internal/data/infra/model/draft/constellation/star/main';
import { FileObj } from '@/(logic)/internal/data/infra/model/resource/file/main';
import { ResourceVariant } from '@/(logic)/internal/data/infra/model/resource/main';
import { removeTypename, removeEmpty, cleanGql } from '@/(logic)/utils/clean';
import { useMemo, useState } from 'react';
import { NoteObj } from '@/(logic)/internal/data/infra/model/resource/note/main';
import { LogObj } from '@/(logic)/internal/data/infra/model/resource/log/main';
import { LinkObj } from '@/(logic)/internal/data/infra/model/resource/link/main';
import { toast } from 'sonner';
export interface StarHandler {
  queryListStars: () => Promise<StarObj[]>;
  queryCreateFileStar: (
    title: string,
    x: number,
    y: number,
    file: FileObj,
  ) => Promise<StarObj>;
  queryCreateNoteStar: (title: string, x: number, y: number, note: NoteObj) => Promise<StarObj>;
  queryCreateLinkStar: (title: string, x: number, y: number, link: LinkObj) => Promise<StarObj>;
  queryCreateLogStar: (title: string, x: number, y: number, log: LogObj) => Promise<StarObj>;
  updateStar: (starId: string, data: any) => void;
  queryUpdateStars: () => Promise<StarObj[]>;
  activateStar: (starId: string) => void;
  deactivateStar: () => void;
}

interface useStarInterface {
  star: StarObj | undefined;
  starId: string;
  stars: StarObj[];
  _starHandler: StarHandler;
}

export const useStars = (constellationId: string): useStarInterface => {
  const [stars, changeStars] = useState<StarObj[]>([]);
  const [starId, changeStarId] = useState<string>('');

  const star = stars.filter((star) => star.id === starId).at(0);

  const gqlHelper = {
    queryListStars: async () => {
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
      const stars = payload?.data.listStarObjs?.items as StarObj[] || [];
      return stars;
    },
    queryCreateFileStar: async (
      title: string,
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
            description: "",
            x,
            y,
            file: {
              id: file.id,
              src: file.src,
              title: file.title,
              size: file.size,
              fileType: file.fileType,
              variant: file.variant,
            },
            variant: ResourceVariant.FILE,
          },
        },
      });
      const star = payload?.data.createStarObj as StarObj;
      return star;
    },
    queryCreateLinkStar: async (
      title: string,
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
            description: "",
            x,
            y,
            link: link,
            variant: ResourceVariant.LINK,
          },
        },
      });
      const star = payload?.data.createStarObj as StarObj;
      return star;
    },
    queryCreateNoteStar: async (
      title: string,
      x: number,
      y: number,
      note: NoteObj,
    ) => {
      const payload = await amplifyClient.graphql({
        query: createStarObj,
        variables: {
          input: {
            constellationId: constellationId,
            title: title,
            description: "",
            x,
            y,
            note: cleanGql(note),
            variant: ResourceVariant.NOTE,
          },
        },
      });
      const star = payload?.data.createStarObj as StarObj;
      return star;
    },    
    queryCreateLogStar: async (
      title: string,
      x: number,
      y: number,
      log: LogObj,
    ) => {
      const payload = await amplifyClient.graphql({
        query: createStarObj,
        variables: {
          input: {
            constellationId: constellationId,
            title: title,
            description: "",
            x,
            y,
            log: log,
            variant: ResourceVariant.LOG,
          },
        },
      });
      const star = payload?.data.createStarObj as StarObj;
      return star;
    },
    queryUpdateStars: async () => {
      const updatedStars = await Promise.all(
        stars.map(async (star) => {
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

      toast.success('Stars Updated');
      return updatedStars;
    },
  };

  const _starHandler: StarHandler = {
    queryListStars: async () => {
      const stars = await gqlHelper.queryListStars();
      changeStars(stars);
      changeStarId(stars[0]?.id || '');
      return stars;
    },
    queryCreateFileStar: async (
      name: string,
      x: number,
      y: number,
      file: FileObj,
    ) => {
      if (constellationId === '') {
        alert('No Constellation Active');
        return {} as StarObj;
      }
      const star = await gqlHelper.queryCreateFileStar(name, x, y, file);
      changeStars((prev) => [...prev, star]);
      changeStarId(star.id);
      return star;
    },
    queryCreateNoteStar: async (
      name: string,
      x: number,
      y: number,
      note: NoteObj,
    ) => {
      if (constellationId === '') {
        alert('No Constellation Active');
        return {} as StarObj;
      }
      const star = await gqlHelper.queryCreateNoteStar(name, x, y, note);
      changeStars((prev) => [...prev, star]);
      changeStarId(star.id);
      return star;
    },
    queryCreateLinkStar: async (
      name: string,
      x: number,
      y: number,
      link: LinkObj,
    ) => {
      if (constellationId === '') {
        alert('No Constellation Active');
        return {} as StarObj;
      }
      const star = await gqlHelper.queryCreateLinkStar(name, x, y, link);
      changeStars((prev) => [...prev, star]);
      changeStarId(star.id);
      return star;
    },
    queryCreateLogStar: async (
      name: string,
      x: number,
      y: number,
      log: LogObj,
    ) => {
      if (constellationId === '') {
        alert('No Constellation Active');
        return {} as StarObj;
      }
      const star = await gqlHelper.queryCreateLogStar(name, x, y, log);
      changeStars((prev) => [...prev, star]);
      changeStarId(star.id);
      return star;
    },
    queryUpdateStars: async () => {
      const updatedStars = await gqlHelper.queryUpdateStars();
      return updatedStars;
    },
    activateStar: (starId: string) => {
      changeStarId(starId);
    },
    deactivateStar: () => {
      changeStarId('');
    },
    updateStar: (starId: string, data: any) => {
      changeStars((prev) =>
        prev.map((star) => (star.id === starId ? { ...star, ...data } : star)),
      );
    },
  };

  useMemo(() => {
    if (constellationId == '') {
      changeStars([]);
      return;
    }
    _starHandler.queryListStars();
  }, [constellationId]);

  return {
    star,
    starId,
    stars,
    _starHandler,
  };
};
