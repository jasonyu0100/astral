'use client';
import { createContext } from 'react';
import { DraftView } from './view';
import { StarObj } from '@/(ouros)/(model)/draft/constellation/star/main';
import { ChapterObj } from '@/(ouros)/(model)/space/chapter/main';
import { ConstellationObj } from '@/(ouros)/(model)/draft/constellation/main';
import { ChapterHandler, useChapters } from '@/(cosmos)/(handler)/chapters/main';
import {
  ConstellationHandler,
  useConstellations,
} from '@/(cosmos)/(handler)/draft/constellations/main';
import insideCosmos from '@/utils/isAuth';
import { StarHandler, useStars } from '@/(cosmos)/(handler)/draft/stars/main';
import {
  DraftModalContext,
  useDraftModal,
} from '../../../../../(modals)/draft-modal/main';
import {
  StarModalContext,
  useStarModal,
} from '@/(cosmos)/(modals)/star-modal/main';

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
    constellation,
    constellations,
    constellationId,
    _constellationHandler,
  } = useConstellations(chapterId);
  const { stars, _starHandler } = useStars(constellationId);

  const context: DraftContextObj = {
    chapter: chapter,
    constellation: constellation,
    stars: stars,
    chapterId: chapterId,
    chapters: chapters,
    starHandler: _starHandler,
    chapterHandler: _chapterHandler,
    constellationId: constellationId,
    constellations: constellations,
    constellationHandler: _constellationHandler,
  };

  const draftModalContext = useDraftModal();
  const starModalContext = useStarModal();

  return (
    <DraftContext.Provider value={context}>
      <DraftModalContext.Provider value={draftModalContext}>
        <StarModalContext.Provider value={starModalContext}>
          <DraftView />
        </StarModalContext.Provider>
      </DraftModalContext.Provider>
    </DraftContext.Provider>
  );
}

export default insideCosmos(Page);
