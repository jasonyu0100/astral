'use client';
import { createContext } from 'react';
import { DraftView } from './view/view';
import isVerseAuth from '@/(utils)/isAuth';
import {
  DraftModalContext,
  useDraftModal,
} from '../../(modals)/draft-modal/main';
import { DraftModalView } from '@/(core)/(project)/space/[id]/(modals)/draft-modal/view';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/(controller)/space/chapter/list';

function Page({ params }: { params: { id: string } }) {
  const chapterListHandler = useControllerForSpaceChapterList(params.id);

  const modalContext = useDraftModal();

  return (
    <ContextForSpaceChapterList.Provider value={chapterListHandler}>
      <DraftModalContext.Provider value={modalContext}>
        <DraftModalView />
        <DraftView />
      </DraftModalContext.Provider>
    </ContextForSpaceChapterList.Provider>
  );
}

export default isVerseAuth(Page);
