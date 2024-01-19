import { StarObj } from '@/tables/draft/constellation/star/main';
import { ResourceObj } from '@/tables/resource/main';
import { useState } from 'react';

export interface StarHandler {
  updateStar: (starId: string, data: any) => void;
  spawnStar: (resource: ResourceObj) => StarObj;
}

interface useStarInterface {
  stars: StarObj[];
  _starHandler: StarHandler;
}

export const useStars = (constellationId: string): useStarInterface => {
  const [stars, changeStars] = useState<StarObj[]>([]);

  const _starHandler: StarHandler = {
    updateStar: (starId: string, data: any) => {
      changeStars((prev) =>
        prev.map((star) => (star.id === starId ? { ...star, ...data } : star)),
      );
    },
    spawnStar: (resource: ResourceObj) => {
      const newStar: StarObj = {
        id: new Date().toISOString(),
        constellationId: constellationId,
        name: 'Star 1',
        x: Math.random() * 500,
        y: Math.random() * 500,
        file: resource.file,
      };
      changeStars((prev) => [...prev, newStar]);
      return newStar;
    },
  };

  return {
    stars,
    _starHandler,
  };
};
