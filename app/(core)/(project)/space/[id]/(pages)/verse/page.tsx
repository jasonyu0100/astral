'use client';
import { createContext } from 'react';
import { VerseView } from './view/view';
import isVerseAuth from '@/(utils)/isAuth';
import {
  VerseModalContext,
  useVerseModal,
} from './(modal)/main';
import { VerseModalView } from '@/(core)/(project)/space/[id]/(pages)/verse/(modal)/view';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/(controller)/space/chapter/list';

function Page({ params }: { params: { id: string } }) {
  const chapterListHandler = useControllerForSpaceChapterList(params.id);

  const modalContext = useVerseModal();

  return (
    <ContextForSpaceChapterList.Provider value={chapterListHandler}>
      <VerseModalContext.Provider value={modalContext}>
        <VerseModalView />
        <VerseView />
      </VerseModalContext.Provider>
    </ContextForSpaceChapterList.Provider>
  );
}

export default isVerseAuth(Page);
