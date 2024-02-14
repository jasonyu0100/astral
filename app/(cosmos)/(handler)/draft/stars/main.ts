import { amplifyClient } from '@/(dev)/(aws)/graphql/main';
import { createStarObj, updateStarObj } from '@/graphql/mutations';
import { listStarObjs } from '@/graphql/queries';
import { StarObj } from '@/(ouros)/(model)/draft/constellation/star/main';
import { FileObj } from '@/(ouros)/(model)/resource/file/main';
import { ResourceVariant } from '@/(ouros)/(model)/resource/main';
import { removeTypename, removeEmpty } from '@/utils/clean';
import { useMemo, useState } from 'react';
export interface StarHandler {
  queryListStars: () => Promise<StarObj[]>;
  queryCreateFileStar: (
    name: string,
    x: number,
    y: number,
    file: FileObj,
  ) => Promise<StarObj>;
  updateStar: (starId: string, data: any) => void;
  queryUpdateStars: () => Promise<StarObj[]>;
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
    queryCreateNoteStar: async (
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
    queryCreateLogStar: async (
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
    queryUpdateStars: async () => {
      const updatedStars = await gqlHelper.queryUpdateStars();
      return updatedStars;
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
