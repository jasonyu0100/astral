'use client';
import { createContext, useState } from 'react';
import { DraftView } from './view';
import { StarObj } from '@/(ouros)/(model)/draft/constellation/star/main';
import { ChapterObj } from '@/(ouros)/(model)/space/chapter/main';
import { ConstellationObj } from '@/(ouros)/(model)/draft/constellation/main';
import {
  ChapterHandler,
  useChapters,
} from '@/(verses)/(handler)/chapters/main';
import {
  ConstellationHandler,
  useConstellations,
} from '@/(verses)/(handler)/draft/constellations/main';
import insideCosmos from '@/utils/isAuth';
import { StarHandler, useStars } from '@/(verses)/(handler)/draft/stars/main';
import {
  DraftModalContext,
  useDraftModal,
} from '../../../../../(modals)/draft-modal/main';
import {
  StarModalContext,
  useStarModal,
} from '@/(verses)/(modals)/star-modal/main';
import { StarModalView } from '@/(verses)/(modals)/star-modal/view';
import { DraftModalView } from '@/(verses)/(modals)/draft-modal/view';

interface DraftContextObj {
  chapterId: string;
  chapter?: ChapterObj;
  chapters: ChapterObj[];
  constellation?: ConstellationObj;
  constellations: ConstellationObj[];
  constellationId: string;
  stars: StarObj[];
  starId: string;
  starHandler: StarHandler;
  chapterHandler: ChapterHandler;
  constellationHandler: ConstellationHandler;
  djMode: boolean;
  toggleDjMode: () => void;
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
  const { stars, starId, _starHandler } = useStars(constellationId);
  const [djMode, changeDjMode] = useState(false as boolean);

  const context: DraftContextObj = {
    chapter: chapter,
    constellation: constellation,
    stars: stars,
    starId: starId,
    chapterId: chapterId,
    chapters: chapters,
    starHandler: _starHandler,
    chapterHandler: _chapterHandler,
    constellationId: constellationId,
    constellations: constellations,
    constellationHandler: _constellationHandler,
    djMode: djMode,
    toggleDjMode: () => changeDjMode(true),
  };

  const draftModalContext = useDraftModal();
  const starModalContext = useStarModal();

  return (
    <DraftContext.Provider value={context}>
      <DraftModalContext.Provider value={draftModalContext}>
        <DraftModalView />
        <StarModalContext.Provider value={starModalContext}>
          <StarModalView />
          <DraftView />
        </StarModalContext.Provider>
      </DraftModalContext.Provider>
    </DraftContext.Provider>
  );
}

export default insideCosmos(Page);
