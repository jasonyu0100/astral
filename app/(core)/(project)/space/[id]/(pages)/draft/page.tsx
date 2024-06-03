'use client';
import { createContext } from 'react';
import { DraftView } from './view/view';
import {
  ChaptersHandlerContext,
  useChaptersHandler,
} from '@/(controller)/chapters/main';
import isVerseAuth from '@/(utils)/isAuth';
import {
  DraftModalContext,
  useDraftModal,
} from '../../(modals)/draft-modal/main';
import { DraftModalView } from '@/(core)/(project)/space/[id]/(modals)/draft-modal/view';

interface DraftContextObj {}

export const DraftContext = createContext<DraftContextObj>({} as DraftContextObj);

function Page({ params }: { params: { id: string } }) {
  const chaptersHandler = useChaptersHandler(params.id);

  const context: DraftContextObj = {};

  const modalContext = useDraftModal();

  return (
    <DraftContext.Provider value={context}>
      <ChaptersHandlerContext.Provider value={chaptersHandler}>
          <DraftModalContext.Provider value={modalContext}>
            <DraftModalView />
            <DraftView />
          </DraftModalContext.Provider>
      </ChaptersHandlerContext.Provider>
    </DraftContext.Provider>
  );
}

export default isVerseAuth(Page);
