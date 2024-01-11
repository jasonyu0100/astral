import { FileObj } from "@/(pages)/(cosmos)/tables/collection/file/main";
import { ConstellationObj } from "@/(pages)/(cosmos)/tables/draft/constellation/main";
import { StarObj } from "@/(pages)/(cosmos)/tables/draft/constellation/star/main";
import { draftTable } from "@/(pages)/(cosmos)/tables/draft/table";
import { useState } from "react";

export interface ConstellationHandler {
  goToConstellation: (constellation: ConstellationObj) => ConstellationObj;
  addConstellation: (constellation: ConstellationObj) => ConstellationObj;
  addFileToConstellation: (file: FileObj) => ConstellationObj | undefined;
  updateConstellations: (constellations: ConstellationObj[]) => ConstellationObj[];
  updateConstellation: (constellation: ConstellationObj) => ConstellationObj;
}

export interface StarHandler {
  updateStar: (starId: string, data: any) => void;
  spawnStar: (draftMedia: FileObj) => StarObj;
}

interface useConstellationInterface {
  stars: StarObj[];
  constellation: ConstellationObj | undefined;
  constellations: ConstellationObj[];
  constellationId: string;
  _constellationHandler: ConstellationHandler;
  _starHandler: StarHandler;
}

export const useConstellation = (): useConstellationInterface => {
  const [constellations, changeConstellations] = useState<ConstellationObj[]>(
    draftTable.constellation.examples
  );
  const [constellationId, changeConstellationId] = useState<string>(
    constellations.at(0)?.id || ""
  );

  const constellation = constellations
    .filter((constellation) => constellation.id === constellationId)
    .at(0);

  const [stars, changeStars] = useState<StarObj[]>(constellation?.stars || []);

  const updateConstellationsWithCurrent = (constellation: ConstellationObj) => {
    changeConstellations((prev) =>
      prev.map((c) => (c.id === constellation.id ? constellation : c))
    );
  };

  const _constellationHandler: ConstellationHandler = {
    updateConstellations: (constellations: ConstellationObj[]) => {
      changeConstellations(constellations)
      changeConstellationId(constellations.at(0)?.id || "")
      const constellation = constellations
        .filter((constellation) => constellation.id === constellationId)
        .at(0);
      changeStars(constellation?.stars || [])
      return constellations;
    },
    updateConstellation: (constellation: ConstellationObj) => {
      changeConstellationId(constellation.id);
      changeStars(constellation.stars);
      return constellation;
    },
    goToConstellation: (constellation: ConstellationObj) => {
      changeConstellationId(constellation.id);
      changeStars(constellation.stars)
      return constellation;
    },
    addConstellation: (constellation: ConstellationObj) => {
      changeConstellationId(constellation.id);
      changeConstellations((prev) => [...prev, constellation]);
      changeStars(constellation.stars)
      return constellation;
    },
    addFileToConstellation: (file: FileObj) => {
      if (constellation) {
        const newConstellation: ConstellationObj = {
          ...constellation,
          stars: [
            ...constellation.stars,
            {
              ...draftTable.star.example,
              file: file,
            },
          ],
        };
        updateConstellationsWithCurrent(newConstellation);
        return newConstellation;
      }
    },
  };

  const _starHandler: StarHandler = {
    updateStar: (starId: string, data: any) => {
      changeStars((prev) => prev.map(
        star => star.id === starId ? {...star, ...data} : star
      ))
    },
    spawnStar: (file: FileObj) => {
      const newStar: StarObj = {
        id: new Date().toISOString(),
        x: Math.random() * 500,
        y: Math.random() * 500,
        file: file,
      };
      changeStars((prev) => [...prev, newStar]);
      return newStar;
    },
  };

  return {
    stars,
    constellation,
    constellations,
    constellationId,
    _constellationHandler,
    _starHandler,
  };
};
