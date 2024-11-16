'use client';
import { DashboardBody } from '@/(core)/(dashboard)/common/container/body/main';
import { DashboardContainer } from '@/(core)/(dashboard)/common/container/main';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { liveMap } from '@/(core)/(live)/live/[id]/map';
import { portalMap } from '@/(portal)/map';
import {
  ContextForUserActivityListFromChapter,
  useControllerForUserActivityListFromChapter,
} from '@/architecture/controller/activity/list-from-chapter';
import {
  ContextForPostAttachmentListFromPost,
  useControllerForPostAttachmentListFromPost,
} from '@/architecture/controller/post/attachment/list-from-post';
import {
  ContextForPostCommentList,
  useControllerForPostCommentList,
} from '@/architecture/controller/post/comment/list';
import {
  ContextForPostKarmaList,
  useControllerForPostKarmaList,
} from '@/architecture/controller/post/karma/list';
import {
  ContextForUserPostListFromChapter,
  useControllerForUserPostListFromChapter,
} from '@/architecture/controller/post/list-from-chapter';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/architecture/controller/space/chapter/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/architecture/controller/space/main';
import {
  ContextForSpaceMemberList,
  useControllerForSpaceMemberList,
} from '@/architecture/controller/space/member/list';
import {
  ContextForTaskListFromChapter,
  useControllerForTaskListFromChapter,
} from '@/architecture/controller/task/list-from-chapter';
import {
  ContextForTaskListFromSpace,
  useControllerForTaskListFromSpace,
} from '@/architecture/controller/task/list-from-space';
import {
  ContextForUserMain,
  useControllerForUserMain,
} from '@/architecture/controller/user/main';
import {
  ContextForSpaceVisibility,
  SpaceVisibility,
} from '@/architecture/model/space/main';
import {
  ContextForLoggedInUserObj,
  ContextForUserPageRole,
  ContextForUserProfileVisibility,
  UserPageRole,
  UserProfileVisibility,
} from '@/architecture/model/user/main';
import { LoadingWrapper } from '@/components/loading/controller/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { useGlobalUser } from '@/logic/store/user/main';
import PrivateAstralPage from '@/utils/private-astral-page';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { SpacesSidebarModals } from '../../../sidebar/modal/controller/main';
import { SpaceTabs, SpaceTabStage } from '../../../tabs/main';
import {
  ContextForSpacesPosts,
  useControllerForSpacesPosts,
} from './controller/main';
import { SpacesPostsModals } from './modal/controller/main';
import { SpacesPostsView } from './view/main';

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

  const taskListController = useControllerForTaskListFromChapter(
    chapterListController.state.objId,
  );
  const allTaskListFromController = useControllerForTaskListFromSpace(
    spaceMainController.state.objId,
  );
  const activityListController = useControllerForUserActivityListFromChapter(
    chapterListController.state.objId,
  );

  useEffect(() => {
    allTaskListFromController.actions.gatherActions.gatherFromBeginning();
  }, [taskListController.state.objs]);

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForSpaceMain.Provider value={spaceMainController}>
        <ContextForUserMain.Provider value={userMainController}>
          <ContextForSpaceMemberList.Provider value={spaceMemberListController}>
            <PermissionWrapper>
              <RedirectWrapper>
                <ContextForSpaceChapterList.Provider
                  value={chapterListController}
                >
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
                          <ContextForTaskListFromChapter.Provider
                            value={taskListController}
                          >
                            <ContextForTaskListFromSpace.Provider
                              value={allTaskListFromController}
                            >
                              <ContextForUserActivityListFromChapter.Provider
                                value={activityListController}
                              >
                                <UpdateWrapper>
                                  <LoadingWrapper>
                                    <ControllerWrapper>
                                      <ModalWrapper>
                                        <ViewWrapper>
                                          <SpacesPostsView />
                                        </ViewWrapper>
                                      </ModalWrapper>
                                    </ControllerWrapper>
                                  </LoadingWrapper>
                                </UpdateWrapper>
                              </ContextForUserActivityListFromChapter.Provider>
                            </ContextForTaskListFromSpace.Provider>
                          </ContextForTaskListFromChapter.Provider>
                        </ContextForPostCommentList.Provider>
                      </ContextForPostAttachmentListFromPost.Provider>
                    </ContextForPostKarmaList.Provider>
                  </ContextForUserPostListFromChapter.Provider>
                </ContextForSpaceChapterList.Provider>
              </RedirectWrapper>
            </PermissionWrapper>
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
  const isSpacePublic =
    spaceMainController.state.obj.visibility === SpaceVisibility.PUBLIC;
  const isLoggedIn = !!loggedInUser.id;

  const pageRole = isOwner
    ? UserPageRole.OWNER
    : isMember
      ? UserPageRole.MEMBER
      : isSpacePublic && isLoggedIn
        ? UserPageRole.VIEWER
        : !isSpacePublic && isLoggedIn
          ? UserPageRole.NONE
          : !isSpacePublic && !isLoggedIn
            ? UserPageRole.NONE
            : UserPageRole.UNDEFINED;

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
  const loggedInUser = useContext(ContextForLoggedInUserObj);

  useEffect(() => {
    if (userMainController.state.objId && loggedInUser.id) {
      if (pageRole === UserPageRole.NONE) {
        window.location.href = `${portalMap.portal.register.link}?redirect=${window.location.href}`;
      } else if (pageRole === UserPageRole.VIEWER) {
        alert('You have viewer permissions');
      } else if (pageRole === UserPageRole.MEMBER) {
        alert('You have member permissions');
      }
    }
  }, [userMainController.state.objId, pageRole]);

  return <>{children}</>;
}

function ModalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SpacesPostsModals>{children}</SpacesPostsModals>
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
  const flightController = useControllerForSpacesPosts();
  return (
    <ContextForSpacesPosts.Provider value={flightController}>
      {children}
    </ContextForSpacesPosts.Provider>
  );
}

function ViewWrapper({ children }: { children: React.ReactNode }) {
  const spaceMainController = useContext(ContextForSpaceMain);
  return (
    <DashboardContainer fullHeight>
      <SpacesSidebarModals>
        {/* <SpacesSidebar /> */}
        <div className='flex w-full flex-row items-center pr-[2rem]'>
          <DashboardContent padding>
            <SpaceTabs tab={SpaceTabStage.Public} />
            <DashboardBody>{children}</DashboardBody>
          </DashboardContent>
          <Link
            href={liveMap.live.link(spaceMainController.state.objId)}
            className='flex h-[5rem] w-[5rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-purple-500'
          >
            <AstralArrowForwardIcon />
          </Link>
        </div>
      </SpacesSidebarModals>
    </DashboardContainer>
  );
}

export default PrivateAstralPage(Page);
