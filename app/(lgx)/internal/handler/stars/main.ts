import { StarObj } from '@/(lgx)/internal/model/map/constellation/star/main';
import { FileObj } from '@/(lgx)/internal/model/resource/file/main';
import { createContext, useMemo, useState } from 'react';
import { NoteObj } from '@/(lgx)/internal/model/resource/note/main';
import { LogObj } from '@/(lgx)/internal/model/resource/log/main';
import { LinkObj } from '@/(lgx)/internal/model/resource/link/main';
import { toast } from 'sonner';
import { starsGqlHelper } from '../../gql/stars/main';
export interface StarActions {
  listStars: () => Promise<StarObj[]>;
  createFromFile: (
    title: string,
    description: string,
    x: number,
    y: number,
    file: FileObj,
  ) => Promise<StarObj>;
  createFromNote: (
    title: string,
    description: string,
    x: number,
    y: number,
    note: NoteObj,
  ) => Promise<StarObj>;
  createFromLink: (
    title: string,
    description: string,
    x: number,
    y: number,
    link: LinkObj,
  ) => Promise<StarObj>;
  createFromLog: (
    title: string,
    description: string,
    x: number,
    y: number,
    log: LogObj,
  ) => Promise<StarObj>;
  updateStar: (starId: string, data: any) => void;
  updateStars: () => Promise<StarObj[]>;
  activateStar: (starId: string) => void;
  deactivateStar: () => void;
}

interface StarsHandler {
  star: StarObj | undefined;
  starId: string;
  stars: StarObj[];
  starActions: StarActions;
}

export const StarsHandlerContext = createContext({} as StarsHandler);

export const useStarsHandler = (constellationId: string): StarsHandler => {
  const [stars, changeStars] = useState<StarObj[]>([]);
  const [starId, changeStarId] = useState<string>('');

  const star = stars.filter((star) => star.id === starId).at(0);

  const starActions: StarActions = {
    listStars: async () => {
      const stars = await starsGqlHelper.listFromConstellation(constellationId);
      changeStars(stars);
      changeStarId(stars[0]?.id || '');
      return stars;
    },
    createFromFile: async (
      title: string,
      description: string,
      x: number,
      y: number,
      file: FileObj,
    ) => {
      if (constellationId === '') {
        alert('No Constellation Active');
        return {} as StarObj;
      }
      const star = await starsGqlHelper.create.createFromFile(
        constellationId,
        title,
        description,
        x,
        y,
        file,
      );
      changeStars((prev) => [...prev, star]);
      changeStarId(star.id);
      return star;
    },
    createFromNote: async (
      name: string,
      description: string,
      x: number,
      y: number,
      note: NoteObj,
    ) => {
      if (constellationId === '') {
        alert('No Constellation Active');
        return {} as StarObj;
      }
      const star = await starsGqlHelper.create.createFromNote(
        constellationId,
        name,
        description,
        x,
        y,
        note,
      );
      changeStars((prev) => [...prev, star]);
      changeStarId(star.id);
      return star;
    },
    createFromLink: async (
      title: string,
      description: string,
      x: number,
      y: number,
      link: LinkObj,
    ) => {
      if (constellationId === '') {
        alert('No Constellation Active');
        return {} as StarObj;
      }
      const star = await starsGqlHelper.create.createFromLink(
        constellationId,
        title,
        description,
        x,
        y,
        link,
      );
      changeStars((prev) => [...prev, star]);
      changeStarId(star.id);
      return star;
    },
    createFromLog: async (
      title: string,
      description: string,
      x: number,
      y: number,
      log: LogObj,
    ) => {
      if (constellationId === '') {
        alert('No Constellation Active');
        return {} as StarObj;
      }
      const star = await starsGqlHelper.create.createFromLog(
        constellationId,
        title,
        description,
        x,
        y,
        log,
      );
      changeStars((prev) => [...prev, star]);
      changeStarId(star.id);
      return star;
    },
    updateStars: async () => {
      const updatedStars = await starsGqlHelper.updateMany(stars);
      toast.success('Stars Updated');
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
    starActions.listStars();
  }, [constellationId]);

  return {
    star,
    starId,
    stars,
    starActions: starActions,
  };
};
