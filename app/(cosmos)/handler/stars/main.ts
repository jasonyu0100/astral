import { amplifyClient } from '@/client';
import { createStarObj } from '@/graphql/mutations';
import { listStarObjs } from '@/graphql/queries';
import { StarObj } from '@/tables/draft/constellation/star/main';
import { FileObj } from '@/tables/file/main';
import { useEffect, useState } from 'react';
export interface StarHandler {
    queryListStars: () => Promise<StarObj[]>;
    queryCreateStar: (name: string, x: number, y: number, file: FileObj) => Promise<StarObj>;
    updateStar: (starId: string, data: any) => void;
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

  useEffect(() => {
    if (constellationId == "") {
      changeStars([])
      return;
    }
    _starHandler.queryListStars();
  }, [constellationId])

  const _starHandler : StarHandler = {
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
      const stars = payload?.data.listStarObjs?.items as StarObj[];
      changeStars(stars);
      changeStarId(stars[0]?.id || '');
      return stars;
    },
    queryCreateStar: async (name: string, x: number, y: number, file: FileObj) => {
      if (constellationId === '') {
        alert("No Constellation Active")
        return {} as StarObj
      } 
      const payload = await amplifyClient.graphql({
        query: createStarObj,
        variables: {
          input: {
            constellationId,
            name,
            x,
            y,
            file: {
              id: file.id,
              src: file.src,
              name: file.name || "",
              size: file.size || undefined,
              type: file.type || "",
            },
          },
        },
      });
      const star = payload?.data.createStarObj as StarObj;
      changeStars((prev) => [...prev, star]);
      changeStarId(star.id);
      return star;
    },
    updateStar: (starId: string, data: any) => {
      changeStars((prev) => prev.map((star) => (star.id === starId ? { ...star, ...data } : star))
      );
    },
  };

  return {
    star,
    starId,
    stars,
    _starHandler,
  };
};
