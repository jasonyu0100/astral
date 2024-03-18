'use client';
import { createContext, useState } from 'react';
import { DraftView } from './view';
import {
  ChaptersHandlerContext,
  useChaptersHandler,
} from '@/(logic)/internal/handler/chapters/main';
import {
  ConstellationsHandlerContext,
  useConstellationsHandler,
} from '@/(logic)/internal/handler/draft/constellations/main';
import insideVerses from '@/(logic)/utils/isAuth';
import {
  StarsHandlerContext,
  useStarsHandler,
} from '@/(logic)/internal/handler/draft/stars/main';
import {
  DraftModalContext,
  useDraftModal,
} from '../../../../../../(modals)/(process)/draft-modal/main';
import {
  StarModalContext,
  useStarModal,
} from '@/(modals)/(process)/star-modal/main';
import { StarModalView } from '@/(modals)/(process)/star-modal/view';
import { DraftModalView } from '@/(modals)/(process)/draft-modal/view';

interface DraftContextObj {
  modalType: DraftModalType;
  updateModalType: (multiModalType: DraftModalType) => void;
}

export const DraftContext = createContext<DraftContextObj>(
  {} as DraftContextObj,
);

export enum DraftModalType {
  DEFAULT = 'DEFAULT',
  STAR = 'STAR',
  AUDIO = 'AUDIO',
  VISUAL = 'VISUAL',
  TEXT = 'TEXT',
}

function Page({ params }: { params: { id: string } }) {
  const chaptersHandler = useChaptersHandler(params.id);
  const constellationsHandler = useConstellationsHandler(
    chaptersHandler.chapterId,
  );
  const starsHandler = useStarsHandler(constellationsHandler.constellationId);
  const [modalType, changeModalType] = useState(DraftModalType.DEFAULT);

  const context: DraftContextObj = {
    modalType: modalType,
    updateModalType: (modalType) => changeModalType(modalType),
  };

  const draftModalContext = useDraftModal();
  const starModalContext = useStarModal();

  return (
    <DraftContext.Provider value={context}>
      <ChaptersHandlerContext.Provider value={chaptersHandler}>
        <ConstellationsHandlerContext.Provider value={constellationsHandler}>
          <StarsHandlerContext.Provider value={starsHandler}>
            <DraftModalContext.Provider value={draftModalContext}>
              <DraftModalView />
              <StarModalContext.Provider value={starModalContext}>
                <StarModalView />
                <DraftView />
              </StarModalContext.Provider>
            </DraftModalContext.Provider>
          </StarsHandlerContext.Provider>
        </ConstellationsHandlerContext.Provider>
      </ChaptersHandlerContext.Provider>
    </DraftContext.Provider>
  );
}

export default insideVerses(Page);
