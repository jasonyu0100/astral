'use client';

import { portalMap } from '@/(portal)/map';
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
import PublicAstralPage from '@/utils/public-astral-page';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';
import {
  ContextForPublicSpace,
  useControllerForPublicSpace,
} from './controller/main';
import { PublicSpaceView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const chapterId = searchParams.get('chapter');
  const spaceMainController = useControllerForSpaceMain(params.id);
  const userMainController = useControllerForUserMain(
    spaceMainController.state.obj.userId,
  );
  const spaceMemberListController = useControllerForSpaceMemberList(
    spaceMainController.state.objId,
  );
  const loggedInUser = useGlobalUser((state) => state.user);
  const chapterListController = useControllerForSpaceChapterList(
    params.id,
    chapterId,
  );
  const postListController = useControllerForUserPostListFromChapter(
    chapterListController.state.objId,
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

  const publicSpaceController = useControllerForPublicSpace();

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
                      <ContextForPublicSpace.Provider
                        value={publicSpaceController}
                      >
                        <PermissionWrapper>
                          <RedirectWrapper>
                            <UpdateWrapper>
                              <PublicSpaceView />
                            </UpdateWrapper>
                          </RedirectWrapper>
                        </PermissionWrapper>
                      </ContextForPublicSpace.Provider>
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

  console.log(pageRole, spaceMainController.state.obj.visibility);

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
      }
    }
  }, [userMainController.state.objId, pageRole]);

  return <>{children}</>;
}

function UpdateWrapper({ children }: { children: React.ReactNode }) {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const chapterId = chapterListController.state?.objId;

    // Get the current search params
    const currentSearchParams = new URLSearchParams(searchParams);

    // Update scene and chapter in the URL if they exist
    if (chapterId) {
      currentSearchParams.set('chapter', chapterId);
    }

    // Update the router to reflect the new search params
    router.replace(`?${currentSearchParams.toString()}`);
  }, [
    chapterListController.state?.objId,
    router, // Ensure router is in the dependency array
  ]);

  return <>{children}</>;
}

export default PublicAstralPage(Page);
