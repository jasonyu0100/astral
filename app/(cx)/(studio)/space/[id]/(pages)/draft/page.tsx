'use client';
import { createContext } from 'react';
import { DraftView } from './(draft-epic)/view';
import {
  ChaptersHandlerContext,
  useChaptersHandler,
} from '@/(lgx)/internal/handler/chapters/main';
import {
  MomentsHandlerContext,
  useMomentsHandler,
} from '@/(lgx)/internal/handler/moments/main';
import insideVerse from '@/(lgx)/utils/isAuth';
import {
  DraftModalContext,
  useDraftModal,
} from '../../../../(modals)/draft-modal/main';
import { DraftModalView } from '@/(cx)/(studio)/(modals)/draft-modal/view';

interface DraftContextObj {}

export const DraftContext = createContext<DraftContextObj>({} as DraftContextObj);

function Page({ params }: { params: { id: string } }) {
  const chaptersHandler = useChaptersHandler(params.id);
  const momentsHandler = useMomentsHandler(
    chaptersHandler.chapterId,
    params.id,
  );

  const context: DraftContextObj = {};

  const modalContext = useDraftModal();

  return (
    <DraftContext.Provider value={context}>
      <ChaptersHandlerContext.Provider value={chaptersHandler}>
        <MomentsHandlerContext.Provider value={momentsHandler}>
          <DraftModalContext.Provider value={modalContext}>
            <DraftModalView />
            <DraftView />
          </DraftModalContext.Provider>
        </MomentsHandlerContext.Provider>
      </ChaptersHandlerContext.Provider>
    </DraftContext.Provider>
  );
}

export default insideVerse(Page);
