'use client';
import { createContext } from 'react';
import { DraftView } from './view';
import { StarObj } from '@/tables/draft/constellation/star/main';
import { ChapterObj } from '@/tables/space/chapter/main';
import { ConstellationObj } from '@/tables/draft/constellation/main';
import { ChapterHandler, useChapters } from '@/handler/chapters/main';
import {
  ConstellationHandler,
  useConstellations,
} from '@/handler/constellations/main';
import insideCosmos from '@/utils/isAuth';
import { StarHandler, useStars } from '@/handler/stars/main';
import {
  DraftModalContext,
  useDraftModal,
} from '../../../../../(modals)/draft-modal/main';

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

  const modalContext = useDraftModal();

  return (
    <DraftContext.Provider value={context}>
      <DraftModalContext.Provider value={modalContext}>
        <DraftView />
      </DraftModalContext.Provider>
    </DraftContext.Provider>
  );
}

export default insideCosmos(Page);
