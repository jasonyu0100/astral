import { ConstellationObj } from '@/tables/draft/constellation/main';
import { useState } from 'react';

export interface ConstellationHandler {
  goToConstellation: (constellation: ConstellationObj) => ConstellationObj;
  addConstellation: (constellation: ConstellationObj) => ConstellationObj;
  updateConstellations: (
    constellations: ConstellationObj[],
  ) => ConstellationObj[];
  updateConstellation: (constellation: ConstellationObj) => ConstellationObj;
}

interface useConstellationInterface {
  constellation?: ConstellationObj;
  constellations: ConstellationObj[];
  constellationId: string;
  _constellationHandler: ConstellationHandler;
}

export const useConstellations = (chapterId: string): useConstellationInterface => {
  const [constellations, changeConstellations] = useState<ConstellationObj[]>([]);
  const [constellationId, changeConstellationId] = useState<string>(constellations.at(0)?.id || '');

  const constellation = constellations
    .filter((constellation) => constellation.id === constellationId)
    .at(0);

  const _constellationHandler: ConstellationHandler = {
    updateConstellations: (constellations: ConstellationObj[]) => {
      changeConstellations(constellations);
      changeConstellationId(constellations.at(0)?.id || '');
      return constellations;
    },
    updateConstellation: (constellation: ConstellationObj) => {
      changeConstellationId(constellation.id);
      return constellation;
    },
    goToConstellation: (constellation: ConstellationObj) => {
      changeConstellationId(constellation.id);
      return constellation;
    },
    addConstellation: (constellation: ConstellationObj) => {
      changeConstellationId(constellation.id);
      changeConstellations((prev) => [...prev, constellation]);
      return constellation;
    },
  };

  return {
    constellation,
    constellations,
    constellationId,
    _constellationHandler,
  };
};
