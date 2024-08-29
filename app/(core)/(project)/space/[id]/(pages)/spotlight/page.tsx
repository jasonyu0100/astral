'use client';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/controller/space/chapter/list';
import {
  ContextForReviewCommentList,
  useControllerForReviewCommentList,
} from '@/(server)/controller/space/chapter/review/comment/list';
import {
  ContextForChapterReviewList,
  useControllerForChapterReviewList,
} from '@/(server)/controller/space/chapter/review/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/controller/space/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import isAstralAuth from '@/utils/isAuth';
import { useSearchParams } from 'next/navigation';
import { SpaceReviewModals } from './modal/controller/main';
import { SpaceReviewView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const reviewId = searchParams.get('review');
  const chapterId = searchParams.get('chapter');

  const loggedInUser = useGlobalUser((state) => state.user);
  const spaceController = useControllerForSpaceMain(params.id);
  const chapterListController = useControllerForSpaceChapterList(
    params.id,
    chapterId,
  );
  const reviewListController = useControllerForChapterReviewList(
    chapterListController.state.objId,
    reviewId,
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
              <SpaceReviewModals>
                <SpaceReviewView />
              </SpaceReviewModals>
            </ContextForReviewCommentList.Provider>
          </ContextForChapterReviewList.Provider>
        </ContextForSpaceChapterList.Provider>
      </ContextForSpaceMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default isAstralAuth(Page);
