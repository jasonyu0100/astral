import { ConstellationObj } from '@/(logic)/internal/model/draft/constellation/main';
import { createContext, useMemo, useState } from 'react';
import { gqlHelper } from '../../../gql/constellations/main';

export interface ConstellationActions {
  queryListConstellations: (id: string) => Promise<ConstellationObj[]>;
  queryCreateConstellation: (
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
    queryListConstellations: async (chapterId: string) => {
      const constellations = await gqlHelper.gqlListConstellations(chapterId);
      changeConstellations(constellations);
      changeConstellationId(constellations[0]?.id || '');
      return constellations;
    },
    queryCreateConstellation: async (
      title: string,
      description: string,
      variant: string,
    ) => {
      const constellation = await gqlHelper.gqlCreateConstellation(
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
    constellationActions.queryListConstellations(chapterId);
  }, [chapterId]);

  return {
    constellation,
    constellations,
    constellationId,
    constellationActions,
  };
};
