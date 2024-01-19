'use client';
import { createContext } from 'react';
import { DraftView } from './view';
import { StarObj } from '@/tables/draft/constellation/star/main';
import { ChapterObj } from '@/tables/space/chapter/main';
import { ConstellationObj } from '@/tables/draft/constellation/main';
import { ChapterHandler, useChapters } from '../../handler/chapters/main';
import {
  ConstellationHandler,
  StarHandler,
  useConstellation,
} from '../../handler/constellations/main';
import insideCosmos from '@/utils/isAuth';
import { ResourceObj } from '@/tables/resource/main';

interface DraftContextObj {
  chapterId: string;
  chapter?: ChapterObj;
  chapters: ChapterObj[];
  constellation?: ConstellationObj;
  constellations: ConstellationObj[];
  constellationId: string;
  stars: StarObj[];
  starHandler: StarHandler;
  chapterHandler: ChapterHandler;
  constellationHandler: ConstellationHandler;
}

export const DraftContext = createContext<DraftContextObj>(
  {} as DraftContextObj,
);

function Page({ params }: { params: { id: string } }) {
  const { chapter, chapters, chapterId, _chapterHandler } = useChapters(
    params.id,
  );
  const {
    stars,
    _starHandler,
    constellation,
    constellations,
    constellationId,
    _constellationHandler,
  } = useConstellation();

  const chapterHandler: ChapterHandler = {
    queryListChapters: async () => {
      return _chapterHandler.queryListChapters();
    },
    queryCreateChapter: async (title: string, description: string) => {
      return _chapterHandler.queryCreateChapter(title, description);
    },
    addChapter: (chapter: ChapterObj) => {
      _chapterHandler.addChapter(chapter);
      _constellationHandler.updateConstellations([]);
      return chapter;
    },
    goToChapter: (chapter: ChapterObj) => {
      _chapterHandler.goToChapter(chapter);
      _constellationHandler.updateConstellations([]);
      return chapter;
    },
    goToPrevChapter: () => {
      const chapter = _chapterHandler.goToPrevChapter();
      _constellationHandler.updateConstellations([]);
      return chapter;
    },
    goToNextChapter: () => {
      const chapter = _chapterHandler.goToNextChapter();
      _constellationHandler.updateConstellations([]);
      return chapter;
    },
  };

  const constellationHandler: ConstellationHandler = {
    updateConstellation: (constellation: ConstellationObj) => {
      _constellationHandler.updateConstellation(constellation);
      return constellation;
    },
    updateConstellations: (constellations: ConstellationObj[]) => {
      _constellationHandler.updateConstellations(constellations);
      return constellations;
    },
    goToConstellation: (constellation: ConstellationObj) => {
      _constellationHandler.goToConstellation(constellation);
      return constellation;
    },

    addConstellation: (constellation: ConstellationObj) => {
      _constellationHandler.addConstellation(constellation);
      return constellation;
    },

    addStarToConstellation: (resource: ResourceObj) => {
      const constellation =
        _constellationHandler.addStarToConstellation(resource);
      return constellation;
    },
  };

  const starHandler: StarHandler = {
    updateStar: (starId: string, data: any) => {
      _starHandler.updateStar(starId, data);
    },
    spawnStar: (resource: ResourceObj) => {
      return _starHandler.spawnStar(resource);
    },
  };

  const context: DraftContextObj = {
    chapter: chapter,
    constellation: constellation,
    stars: stars,
    chapterId: chapterId,
    chapters: chapters,
    starHandler: starHandler,
    chapterHandler: chapterHandler,
    constellationId: constellationId,
    constellations: constellations,
    constellationHandler: constellationHandler,
  };

  return (
    <DraftContext.Provider value={context}>
      <DraftView />
    </DraftContext.Provider>
  );
}

export default insideCosmos(Page);
