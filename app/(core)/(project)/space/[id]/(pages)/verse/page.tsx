'use client';
import { SpaceVerseModalView } from '@/(core)/(project)/space/[id]/(pages)/verse/(modal)/view';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/(controller)/space/chapter/list';
import {
  ContextForChapterVerseList,
  useControllerForChapterVerseList,
} from '@/(server)/(controller)/space/chapter/verse/list';
import isVerseAuth from '@/(utils)/isAuth';
import { SpaceVerseModalContext, useSpaceVerseModal } from './(modal)/main';
import { SpaceVerseView } from './view/view';

function Page({ params }: { params: { id: string } }) {
  const chapterListController = useControllerForSpaceChapterList(params.id);
  const verseListController = useControllerForChapterVerseList(
    chapterListController.state.objId,
  );

  const modalContext = useSpaceVerseModal();

  return (
    <ContextForSpaceChapterList.Provider value={chapterListController}>
      <ContextForChapterVerseList.Provider value={verseListController}>
        <SpaceVerseModalContext.Provider value={modalContext}>
          <SpaceVerseModalView />
          <SpaceVerseView />
        </SpaceVerseModalContext.Provider>
      </ContextForChapterVerseList.Provider>
    </ContextForSpaceChapterList.Provider>
  );
}

export default isVerseAuth(Page);
