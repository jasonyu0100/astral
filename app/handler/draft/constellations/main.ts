import { amplifyClient } from '@/client';
import { createConstellationObj } from '@/graphql/mutations';
import { listConstellationObjs } from '@/graphql/queries';
import { ConstellationObj } from '@/tables/draft/constellation/main';
import { useMemo, useState } from 'react';

export interface ConstellationHandler {
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

interface useConstellationInterface {
  constellation?: ConstellationObj;
  constellations: ConstellationObj[];
  constellationId: string;
  _constellationHandler: ConstellationHandler;
}

export const useConstellations = (
  chapterId: string,
): useConstellationInterface => {
  const [constellations, changeConstellations] = useState<ConstellationObj[]>(
    [],
  );
  const [constellationId, changeConstellationId] = useState<string>(
    constellations.at(0)?.id || '',
  );

  const constellation = constellations.find(
    (constellation) => constellation.id === constellationId,
  );


  const gqlHelper = {
    queryListConstellations: async (chapterId: string) => {
      const payload = await amplifyClient.graphql({
        query: listConstellationObjs,
        variables: {
          filter: {
            chapterId: {
              eq: chapterId,
            },
          },
        },
      });
      const constellations = payload?.data.listConstellationObjs
        ?.items as ConstellationObj[] || [];
      return constellations;
    },
    queryCreateConstellation: async (
      title: string,
      description: string,
      variant: string,
    ) => {
      const payload = await amplifyClient.graphql({
        query: createConstellationObj,
        variables: {
          input: {
            chapterId,
            title,
            description,
            variant,
          },
        },
      });
      const constellation = payload?.data
        .createConstellationObj as ConstellationObj;
      return constellation;
    },
  };

  const _constellationHandler: ConstellationHandler = {
    queryListConstellations: async (chapterId: string) => {
      const constellations = await gqlHelper.queryListConstellations(chapterId);
      changeConstellations(constellations);
      changeConstellationId(constellations[0]?.id || '');
      return constellations;
    },
    queryCreateConstellation: async (
      title: string,
      description: string,
      variant: string,
    ) => {
      const constellation = await gqlHelper.queryCreateConstellation(
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
    _constellationHandler.queryListConstellations(chapterId);
  }, [chapterId]);

  return {
    constellation,
    constellations,
    constellationId,
    _constellationHandler,
  };
};
