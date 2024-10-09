'use client';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';
import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import { CommonSidebar } from '@/(core)/common/(sidebar)/main';
import {
  ContextForPostAttachmentListFromSpotlight,
  useControllerForPostAttachmentListFromSpotlight,
} from '@/(server)/controller/post/attachment/list-from-spotlight';
import {
  ContextForPostCommentList,
  useControllerForPostCommentList,
} from '@/(server)/controller/post/comment/list';
import {
  ContextForPostKarmaList,
  useControllerForPostKarmaList,
} from '@/(server)/controller/post/karma/list';
import {
  ContextForPostLinkList,
  useControllerForPostLinkList,
} from '@/(server)/controller/post/link/list';
import {
  ContextForUserPostListFromChapter,
  useControllerForUserPostListFromChapter,
} from '@/(server)/controller/post/list-from-chapter';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/controller/space/chapter/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/controller/space/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { LoadingWrapper } from '@/ui/loading/controller/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { SpaceTabs, SpaceTabStage } from '../../tabs/main';
import {
  ContextForSpacesFlight,
  useControllerForSpacesFlight,
} from './controller/main';
import { SpacesFlightModals } from './modal/controller/main';
import { SpacesFlightView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const postId = searchParams.get('spotlight');
  const chapterId = searchParams.get('chapter');

  const loggedInUser = useGlobalUser((state) => state.user);
  const spaceController = useControllerForSpaceMain(params.id);
  const chapterListController = useControllerForSpaceChapterList(
    params.id,
    chapterId,
  );
  const postListController = useControllerForUserPostListFromChapter(
    chapterListController.state.objId,
    postId,
  );
  const commentListController = useControllerForPostCommentList(
    postListController.state.objId,
  );
  const postKarmaListController = useControllerForPostKarmaList(
    postListController.state.objId,
  );
  const attachmentListController =
    useControllerForPostAttachmentListFromSpotlight(
      postListController.state.objId,
    );
  const linkListController = useControllerForPostLinkList(
    postListController.state.objId,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForSpaceMain.Provider value={spaceController}>
        <ContextForSpaceChapterList.Provider value={chapterListController}>
          <ContextForUserPostListFromChapter.Provider
            value={postListController}
          >
            <ContextForPostKarmaList.Provider value={postKarmaListController}>
              <ContextForPostAttachmentListFromSpotlight.Provider
                value={attachmentListController}
              >
                <ContextForPostCommentList.Provider
                  value={commentListController}
                >
                  <ContextForPostLinkList.Provider value={linkListController}>
                    <UpdateWrapper>
                      <LoadingWrapper>
                        <ControllerWrapper>
                          <ModalWrapper>
                            <ViewWrapper>
                              <SpacesFlightView />
                            </ViewWrapper>
                          </ModalWrapper>
                        </ControllerWrapper>
                      </LoadingWrapper>
                    </UpdateWrapper>
                  </ContextForPostLinkList.Provider>
                </ContextForPostCommentList.Provider>
              </ContextForPostAttachmentListFromSpotlight.Provider>
            </ContextForPostKarmaList.Provider>
          </ContextForUserPostListFromChapter.Provider>
        </ContextForSpaceChapterList.Provider>
      </ContextForSpaceMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

function ModalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SpacesFlightModals>{children}</SpacesFlightModals>
    </>
  );
}

function UpdateWrapper({ children }: { children: React.ReactNode }) {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const chapterId = chapterListController.state.objId;

    // Get the current search params
    const currentSearchParams = new URLSearchParams(searchParams);

    // Update scene and chapter in the URL if they exist
    if (chapterId) {
      currentSearchParams.set('chapter', chapterId);
    }

    // Update the router to reflect the new search params
    router.replace(`?${currentSearchParams.toString()}`);
  }, [
    chapterListController.state.objId,
    router, // Ensure router is in the dependency array
  ]);

  return <>{children}</>;
}

function ControllerWrapper({ children }: { children: React.ReactNode }) {
  const flightController = useControllerForSpacesFlight();
  return (
    <ContextForSpacesFlight.Provider value={flightController}>
      {children}
    </ContextForSpacesFlight.Provider>
  );
}

function ViewWrapper({ children }: { children: React.ReactNode }) {
  return (
    <DashboardController fullHeight>
      <CommonSidebar minimised />
      <DashboardContent>
        <SpaceTabs tab={SpaceTabStage.Flight} />
        <DashboardBody>{children}</DashboardBody>
      </DashboardContent>
    </DashboardController>
  );
}

export default protectedUnderAstralAuth(Page);
