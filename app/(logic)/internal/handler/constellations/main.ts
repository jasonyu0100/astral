import { ConstellationObj } from '@/(logic)/internal/model/map/constellation/main';
import { createContext, useMemo, useState } from 'react';
import { constellationsGqlHelper } from '../../gql/constellations/main';

export interface ConstellationActions {
  listConstellations: (id: string) => Promise<ConstellationObj[]>;
  createConstellation: (
    title: string,
    description: string,
    variant: string,
  ) => Promise<ConstellationObj>;
  updateConstellations: (
    constellations: ConstellationObj[],
  ) => ConstellationObj[];
  updateConstellation: (constellation: ConstellationObj) => ConstellationObj;
  goToConstellation: (constellation: ConstellationObj) => ConstellationObj;
  addConstellation: (constellation: ConstellationObj) => ConstellationObj;
}

interface ConstellationsHandler {
  constellation?: ConstellationObj;
  constellations: ConstellationObj[];
  constellationId: string;
  constellationActions: ConstellationActions;
}

export const ConstellationsHandlerContext = createContext({} as ConstellationsHandler);

export const useConstellationsHandler = (
  chapterId: string,
): ConstellationsHandler => {
  const [constellations, changeConstellations] = useState<ConstellationObj[]>(
    [],
  );
  const [constellationId, changeConstellationId] = useState<string>(
    constellations.at(0)?.id || '',
  );

  const constellation = constellations.find(
    (constellation) => constellation.id === constellationId,
  );

  const constellationActions: ConstellationActions = {
    listConstellations: async (chapterId: string) => {
      const constellations = await constellationsGqlHelper.listFromChapter(chapterId);
      changeConstellations(constellations);
      changeConstellationId(constellations[0]?.id || '');
      return constellations;
    },
    createConstellation: async (
      title: string,
      description: string,
      variant: string,
    ) => {
      const constellation = await constellationsGqlHelper.create(
        chapterId,
        title,
        description,
        variant,
      );
      changeConstellationId(constellation.id);
      changeConstellations((prev) => [...prev, constellation]);
      return constellation;
    },
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
  useMemo(() => {
    if (!chapterId) {
      changeConstellations([]);
      return;
    }
    constellationActions.listConstellations(chapterId);
  }, [chapterId]);

  return {
    constellation,
    constellations,
    constellationId,
    constellationActions,
  };
};
