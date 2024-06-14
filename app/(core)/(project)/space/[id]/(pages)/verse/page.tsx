'use client';
import { SpaceVerseModalView } from '@/(core)/(project)/space/[id]/(pages)/verse/(modal)/view';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/(controller)/space/chapter/list';
import isVerseAuth from '@/(utils)/isAuth';
import { SpaceVerseModalContext, useSpaceVerseModal } from './(modal)/main';
import { SpaceVerseView } from './view/view';

function Page({ params }: { params: { id: string } }) {
  const chapterListHandler = useControllerForSpaceChapterList(params.id);

  const modalContext = useSpaceVerseModal();

  return (
    <ContextForSpaceChapterList.Provider value={chapterListHandler}>
      <SpaceVerseModalContext.Provider value={modalContext}>
        <SpaceVerseModalView />
        <SpaceVerseView />
      </SpaceVerseModalContext.Provider>
    </ContextForSpaceChapterList.Provider>
  );
}

export default isVerseAuth(Page);
