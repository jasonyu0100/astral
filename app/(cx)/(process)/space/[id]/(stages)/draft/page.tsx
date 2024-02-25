'use client';
import { createContext, useState } from 'react';
import { DraftView } from './view';
import { StarObj } from '@/(logic)/internal/data/infra/model/draft/constellation/star/main';
import { ChapterObj } from '@/(logic)/internal/data/infra/model/space/chapter/main';
import { ConstellationObj } from '@/(logic)/internal/data/infra/model/draft/constellation/main';
import { ChapterHandler, useChapters } from '@/(logic)/internal/handler/chapters/main';
import {
  ConstellationHandler,
  useConstellations,
} from '@/(logic)/internal/handler/draft/constellations/main';
import insideCosmos from '@/(logic)/utils/isAuth';
import { StarHandler, useStars } from '@/(logic)/internal/handler/draft/stars/main';
import {
  DraftModalContext,
  useDraftModal,
} from '../../../../../../(modals)/draft-modal/main';
import { StarModalContext, useStarModal } from '@/(modals)/star-modal/main';
import { StarModalView } from '@/(modals)/star-modal/view';
import { DraftModalView } from '@/(modals)/draft-modal/view';

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
  modalType: DraftModalType;
  updateModalType: (multiModalType: DraftModalType) => void;
}

export const DraftContext = createContext<DraftContextObj>(
  {} as DraftContextObj,
);

export enum DraftModalType {
  DEFAULT = 'DEFAULT',
  STAR = 'STAR',
  SOUND = 'SOUND',
  VISUAL = 'VISUAL',
  INFO = 'INFO',
}

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
  const [modalType, changeModalType] = useState(DraftModalType.DEFAULT);

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
    modalType: modalType,
    updateModalType: (modalType) => changeModalType(modalType),
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
