'use client';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/(controller)/space/chapter/list';
import {
  ContextForReviewCommentList,
  useControllerForReviewCommentList,
} from '@/(server)/(controller)/space/chapter/review/comment/list';
import {
  ContextForChapterReviewList,
  useControllerForChapterReviewList,
} from '@/(server)/(controller)/space/chapter/review/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/(controller)/space/main';
import { ContextForLoggedInUserObj } from '@/(server)/(model)/user/main';
import isAstralAuth from '@/(utils)/isAuth';
import { SpaceReviewView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const loggedInUser = useGlobalUser((state) => state.user);
  const spaceController = useControllerForSpaceMain(params.id);
  const chapterListController = useControllerForSpaceChapterList(params.id);
  const reviewListController = useControllerForChapterReviewList(
    chapterListController.state.objId,
  );
  const commentListController = useControllerForReviewCommentList(
    reviewListController.state.objId,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForSpaceMain.Provider value={spaceController}>
        <ContextForSpaceChapterList.Provider value={chapterListController}>
          <ContextForChapterReviewList.Provider value={reviewListController}>
            <ContextForReviewCommentList.Provider value={commentListController}>
              <SpaceReviewView />
            </ContextForReviewCommentList.Provider>
          </ContextForChapterReviewList.Provider>
        </ContextForSpaceChapterList.Provider>
      </ContextForSpaceMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default isAstralAuth(Page);
