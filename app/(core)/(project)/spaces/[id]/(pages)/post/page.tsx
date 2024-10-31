'use client';
import { DashboardBody } from '@/(core)/(dashboard)/common/container/body/main';
import { DashboardContainer } from '@/(core)/(dashboard)/common/container/main';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { LoadingWrapper } from '@/components/loading/controller/main';
import { useGlobalUser } from '@/logic/store/user/main';
import {
  ContextForPostAttachmentListFromPost,
  useControllerForPostAttachmentListFromPost,
} from '@/server/controller/post/attachment/list-from-post';
import {
  ContextForPostCommentList,
  useControllerForPostCommentList,
} from '@/server/controller/post/comment/list';
import {
  ContextForPostKarmaList,
  useControllerForPostKarmaList,
} from '@/server/controller/post/karma/list';
import {
  ContextForUserPostListFromChapter,
  useControllerForUserPostListFromChapter,
} from '@/server/controller/post/list-from-chapter';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/server/controller/space/chapter/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/server/controller/space/main';
import {
  ContextForSpaceMemberList,
  useControllerForSpaceMemberList,
} from '@/server/controller/space/member/list';
import {
  ContextForTaskList,
  useControllerForTaskList,
} from '@/server/controller/task/list';
import {
  ContextForUserMain,
  useControllerForUserMain,
} from '@/server/controller/user/main';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { SpacesSidebar } from '../../../sidebar/main';
import { SpacesSidebarModals } from '../../../sidebar/modal/controller/main';
import { SpaceTabs, SpaceTabStage } from '../../../tabs/main';
import {
  ContextForSpacesPost,
  useControllerForSpacesPost,
} from './controller/main';
import { SpacesPostModals } from './modal/controller/main';
import { SpacesPostView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const postId = searchParams.get('post');
  const chapterId = searchParams.get('chapter');

  const loggedInUser = useGlobalUser((state) => state.user);
  const spaceMainController = useControllerForSpaceMain(params.id);
  const userMainController = useControllerForUserMain(
    spaceMainController.state.obj.userId,
  );
  const spaceMemberListController = useControllerForSpaceMemberList(
    spaceMainController.state.objId,
  );
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
  const attachmentListController = useControllerForPostAttachmentListFromPost(
    postListController.state.objId,
  );

  const taskListController = useControllerForTaskList(
    chapterListController.state.objId,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForUserMain.Provider value={userMainController}>
        <ContextForSpaceMain.Provider value={spaceMainController}>
          <ContextForSpaceMemberList.Provider value={spaceMemberListController}>
            <ContextForSpaceChapterList.Provider value={chapterListController}>
              <ContextForUserPostListFromChapter.Provider
                value={postListController}
              >
                <ContextForPostKarmaList.Provider
                  value={postKarmaListController}
                >
                  <ContextForPostAttachmentListFromPost.Provider
                    value={attachmentListController}
                  >
                    <ContextForPostCommentList.Provider
                      value={commentListController}
                    >
                      <ContextForTaskList.Provider value={taskListController}>
                        <UpdateWrapper>
                          <LoadingWrapper>
                            <ControllerWrapper>
                              <ModalWrapper>
                                <ViewWrapper>
                                  <SpacesPostView />
                                </ViewWrapper>
                              </ModalWrapper>
                            </ControllerWrapper>
                          </LoadingWrapper>
                        </UpdateWrapper>
                      </ContextForTaskList.Provider>
                    </ContextForPostCommentList.Provider>
                  </ContextForPostAttachmentListFromPost.Provider>
                </ContextForPostKarmaList.Provider>
              </ContextForUserPostListFromChapter.Provider>
            </ContextForSpaceChapterList.Provider>
          </ContextForSpaceMemberList.Provider>
        </ContextForSpaceMain.Provider>
      </ContextForUserMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

function ModalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SpacesPostModals>{children}</SpacesPostModals>
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
  const flightController = useControllerForSpacesPost();
  return (
    <ContextForSpacesPost.Provider value={flightController}>
      {children}
    </ContextForSpacesPost.Provider>
  );
}

function ViewWrapper({ children }: { children: React.ReactNode }) {
  return (
    <DashboardContainer fullHeight>
      <SpacesSidebarModals>
        <SpacesSidebar />
        <DashboardContent>
          <SpaceTabs tab={SpaceTabStage.Post} />
          <DashboardBody>{children}</DashboardBody>
        </DashboardContent>
      </SpacesSidebarModals>
    </DashboardContainer>
  );
}

export default protectedUnderAstralAuth(Page);
