'use client';
import { SpaceVerseModalView } from '@/(core)/(project)/space/[id]/(pages)/verse/(modal)/view';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/(controller)/space/chapter/list';
import {
  ContextForVerseCommentList,
  useControllerForVerseCommentList,
} from '@/(server)/(controller)/space/chapter/verse/comment/list';
import {
  ContextForChapterVerseList,
  useControllerForChapterVerseList,
} from '@/(server)/(controller)/space/chapter/verse/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/(controller)/space/main';
import isVerseAuth from '@/(utils)/isAuth';
import { SpaceVerseModalContext, useSpaceVerseModal } from './(modal)/main';
import { SpaceVerseView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const spaceController = useControllerForSpaceMain(params.id);
  const chapterListController = useControllerForSpaceChapterList(params.id);
  const verseListController = useControllerForChapterVerseList(
    chapterListController.state.objId,
  );
  const commentListController = useControllerForVerseCommentList(
    verseListController.state.objId,
  );

  const modalContext = useSpaceVerseModal();

  return (
    <ContextForSpaceMain.Provider value={spaceController}>
      <ContextForSpaceChapterList.Provider value={chapterListController}>
        <ContextForChapterVerseList.Provider value={verseListController}>
          <ContextForVerseCommentList.Provider value={commentListController}>
            <SpaceVerseModalContext.Provider value={modalContext}>
              <SpaceVerseModalView />
              <SpaceVerseView />
            </SpaceVerseModalContext.Provider>
          </ContextForVerseCommentList.Provider>
        </ContextForChapterVerseList.Provider>
      </ContextForSpaceChapterList.Provider>
    </ContextForSpaceMain.Provider>
  );
}

export default isVerseAuth(Page);
