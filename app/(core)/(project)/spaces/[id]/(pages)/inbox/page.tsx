'use client';
import { DashboardBody } from '@/(core)/(dashboard)/common/container/body/main';
import { DashboardContainer } from '@/(core)/(dashboard)/common/container/main';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { portalMap } from '@/(portal)/map';
import { LoadingWrapper } from '@/components/loading/controller/main';
import { useGlobalUser } from '@/logic/store/user/main';
import {
  ContextForUserActivityListFromChapter,
  useControllerForUserActivityListFromChapter,
} from '@/server/controller/activity/list-from-chapter';
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
import {
  ContextForSpaceVisibility,
  SpaceVisibility,
} from '@/server/model/space/main';
import {
  ContextForLoggedInUserObj,
  ContextForUserPageRole,
  ContextForUserProfileVisibility,
  UserPageRole,
  UserProfileVisibility,
} from '@/server/model/user/main';
import PrivateAstralPage from '@/utils/private-astral-page';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { SpacesSidebar } from '../../../sidebar/main';
import { SpacesSidebarModals } from '../../../sidebar/modal/controller/main';
import { SpaceTabs, SpaceTabStage } from '../../../tabs/main';
import {
  ContextForSpaceInbox,
  useControllerForSpaceInbox,
} from './controller/main';
import { SpaceInboxModals } from './modal/controller/main';
import { SpaceInboxView } from './view/main';

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
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForSpaceMain.Provider value={spaceMainController}>
        <ContextForUserMain.Provider value={userMainController}>
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
                        <ContextForUserActivityListFromChapter.Provider
                          value={activityListController}
                        >
                          <PermissionWrapper>
                            <RedirectWrapper>
                              <UpdateWrapper>
                                <LoadingWrapper>
                                  <ControllerWrapper>
                                    <ModalWrapper>
                                      <ViewWrapper>
                                        <SpaceInboxView />
                                      </ViewWrapper>
                                    </ModalWrapper>
                                  </ControllerWrapper>
                                </LoadingWrapper>
                              </UpdateWrapper>
                            </RedirectWrapper>
                          </PermissionWrapper>
                        </ContextForUserActivityListFromChapter.Provider>
                      </ContextForTaskList.Provider>
                    </ContextForPostCommentList.Provider>
                  </ContextForPostAttachmentListFromPost.Provider>
                </ContextForPostKarmaList.Provider>
              </ContextForUserPostListFromChapter.Provider>
            </ContextForSpaceChapterList.Provider>
          </ContextForSpaceMemberList.Provider>
        </ContextForUserMain.Provider>
      </ContextForSpaceMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

function PermissionWrapper({ children }: { children: React.ReactNode }) {
  const spaceMainController = useContext(ContextForSpaceMain);
  const userMainController = useContext(ContextForUserMain);
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const spaceMemberListController = useContext(ContextForSpaceMemberList);

  const isOwner = loggedInUser?.id === spaceMainController.state.obj.userId;
  const isMember = spaceMemberListController.state.objs.some(
    (member) => member.userId === loggedInUser?.id,
  );

  const pageRole = isOwner
    ? UserPageRole.OWNER
    : isMember
      ? UserPageRole.MEMBER
      : spaceMainController.state.obj.visibility === SpaceVisibility.PUBLIC
        ? UserPageRole.VIEWER
        : UserPageRole.NONE;

  return (
    <>
      <ContextForUserPageRole.Provider value={pageRole}>
        <ContextForSpaceVisibility.Provider
          value={spaceMainController.state.obj.visibility as SpaceVisibility}
        >
          <ContextForUserProfileVisibility.Provider
            value={
              userMainController.state.obj.visibility as UserProfileVisibility
            }
          >
            {children}
          </ContextForUserProfileVisibility.Provider>
        </ContextForSpaceVisibility.Provider>
      </ContextForUserPageRole.Provider>
    </>
  );
}

function RedirectWrapper({ children }: { children: React.ReactNode }) {
  const pageRole = useContext(ContextForUserPageRole);
  const userMainController = useContext(ContextForUserMain);

  useEffect(() => {
    if (userMainController.state.objId) {
      if (pageRole === UserPageRole.NONE) {
        window.location.href = portalMap.portal.register.link;
      } else if (pageRole === UserPageRole.VIEWER) {
        window.location.href = portalMap.portal.login.link;
      }
    }
  }, [userMainController.state.objId, pageRole]);

  return <>{children}</>;
}

function ModalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SpaceInboxModals>{children}</SpaceInboxModals>
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
  const flightController = useControllerForSpaceInbox();
  return (
    <ContextForSpaceInbox.Provider value={flightController}>
      {children}
    </ContextForSpaceInbox.Provider>
  );
}

function ViewWrapper({ children }: { children: React.ReactNode }) {
  return (
    <DashboardContainer fullHeight>
      <SpacesSidebarModals>
        <SpacesSidebar />
        <DashboardContent>
          <SpaceTabs tab={SpaceTabStage.Inbox} />
          <DashboardBody>{children}</DashboardBody>
        </DashboardContent>
      </SpacesSidebarModals>
    </DashboardContainer>
  );
}

export default PrivateAstralPage(Page);
