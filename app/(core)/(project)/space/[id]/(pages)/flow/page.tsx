'use client';
import { SpaceFlowModalView } from '@/(core)/(project)/space/[id]/(pages)/flow/(modal)/view';
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
import isVerseAuth from '@/(utils)/isAuth';
import { SpaceFlowModalContext, useSpaceFlowModal } from './(modal)/main';
import { SpaceFlowView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const chapterListController = useControllerForSpaceChapterList(params.id);
  const verseListController = useControllerForChapterVerseList(
    chapterListController.state.objId,
  );
  const commentListController = useControllerForVerseCommentList(
    verseListController.state.objId,
  );

  const modalContext = useSpaceFlowModal();

  return (
    <ContextForSpaceChapterList.Provider value={chapterListController}>
      <ContextForChapterVerseList.Provider value={verseListController}>
        <ContextForVerseCommentList.Provider value={commentListController}>
          <SpaceFlowModalContext.Provider value={modalContext}>
            <SpaceFlowModalView />
            <SpaceFlowView />
          </SpaceFlowModalContext.Provider>
        </ContextForVerseCommentList.Provider>
      </ContextForChapterVerseList.Provider>
    </ContextForSpaceChapterList.Provider>
  );
}

export default isVerseAuth(Page);
