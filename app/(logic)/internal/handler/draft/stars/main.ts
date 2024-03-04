import { StarObj } from '@/(logic)/internal/data/infra/model/draft/constellation/star/main';
import { FileObj } from '@/(logic)/internal/data/infra/model/resource/file/main';
import { useMemo, useState } from 'react';
import { NoteObj } from '@/(logic)/internal/data/infra/model/resource/note/main';
import { LogObj } from '@/(logic)/internal/data/infra/model/resource/log/main';
import { LinkObj } from '@/(logic)/internal/data/infra/model/resource/link/main';
import { toast } from 'sonner';
import { gqlHelper } from '../../../gql/stars/main';
export interface StarsHandler {
  queryListStars: () => Promise<StarObj[]>;
  queryCreateFileStar: (
    title: string,
    description: string,
    x: number,
    y: number,
    file: FileObj,
  ) => Promise<StarObj>;
  queryCreateNoteStar: (
    title: string,
    description: string,
    x: number,
    y: number,
    note: NoteObj,
  ) => Promise<StarObj>;
  queryCreateLinkStar: (
    title: string,
    description: string,
    x: number,
    y: number,
    link: LinkObj,
  ) => Promise<StarObj>;
  queryCreateLogStar: (
    title: string,
    description: string,
    x: number,
    y: number,
    log: LogObj,
  ) => Promise<StarObj>;
  updateStar: (starId: string, data: any) => void;
  queryUpdateStars: () => Promise<StarObj[]>;
  activateStar: (starId: string) => void;
  deactivateStar: () => void;
}

interface useStarsInterface {
  star: StarObj | undefined;
  starId: string;
  stars: StarObj[];
  _starHandler: StarsHandler;
}

export const useStars = (constellationId: string): useStarsInterface => {
  const [stars, changeStars] = useState<StarObj[]>([]);
  const [starId, changeStarId] = useState<string>('');

  const star = stars.filter((star) => star.id === starId).at(0);

  const _starHandler: StarsHandler = {
    queryListStars: async () => {
      const stars = await gqlHelper.gqlListStars(constellationId);
      changeStars(stars);
      changeStarId(stars[0]?.id || '');
      return stars;
    },
    queryCreateFileStar: async (
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
      const star = await gqlHelper.gqlCreateFileStar(
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
    queryCreateNoteStar: async (
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
      const star = await gqlHelper.gqlCreateNoteStar(
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
    queryCreateLinkStar: async (
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
      const star = await gqlHelper.gqlCreateLinkStar(
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
    queryCreateLogStar: async (
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
      const star = await gqlHelper.gqlCreateLogStar(
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
    queryUpdateStars: async () => {
      const updatedStars = await gqlHelper.gqlUpdateStars(stars);
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
    _starHandler.queryListStars();
  }, [constellationId]);

  return {
    star,
    starId,
    stars,
    _starHandler,
  };
};
