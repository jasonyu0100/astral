'use client';

import { portalMap } from '@/(portal)/map';
import {
  ContextForChapterConversationList,
  useControllerForChapterConversationList,
} from '@/architecture/controller/conversation/list';
import {
  ContextForConversationMessageList,
  useControllerForConversationMessageList,
} from '@/architecture/controller/conversation/message/list';
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
import { useGlobalUser } from '@/logic/store/user/main';
import PublicAstralPage from '@/utils/public-astral-page';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';
import {
  ContextForPublicSpace,
  PublicSpaceFeedView,
  useControllerForPublicSpace,
} from './controller/main';
import { PublicSpaceView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const chapterId = searchParams.get('chapter');
  const postId = searchParams.get('post');

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
    postId,
  );
  const taskListController = useControllerForTaskListFromChapter(
    chapterListController.state.objId,
  );
  const allTaskListFromController = useControllerForTaskListFromSpace(
    spaceMainController.state.objId,
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
  const conversationListController = useControllerForChapterConversationList(
    chapterListController.state.objId,
  );
  const messageListController = useControllerForConversationMessageList(
    conversationListController.state.objId,
  );

  const publicSpaceController = useControllerForPublicSpace();

  useEffect(() => {
    if (postId) {
      publicSpaceController.actions.updateFeedView(PublicSpaceFeedView.POST);
      postListController.actions.stateActions.selectViaId(postId);
    }
  }, [postId]);

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForUserMain.Provider value={userMainController}>
        <ContextForSpaceMain.Provider value={spaceMainController}>
          <ContextForSpaceMemberList.Provider value={spaceMemberListController}>
            <ContextForSpaceChapterList.Provider value={chapterListController}>
              <ContextForUserPostListFromChapter.Provider
                value={postListController}
              >
                <ContextForTaskListFromChapter.Provider
                  value={taskListController}
                >
                  <ContextForTaskListFromSpace.Provider
                    value={allTaskListFromController}
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
                            <ContextForChapterConversationList.Provider
                              value={conversationListController}
                            >
                              <ContextForConversationMessageList.Provider
                                value={messageListController}
                              >
                                <PermissionWrapper>
                                  <RedirectWrapper>
                                    <UpdateWrapper>
                                      <PublicSpaceView />
                                    </UpdateWrapper>
                                  </RedirectWrapper>
                                </PermissionWrapper>
                              </ContextForConversationMessageList.Provider>
                            </ContextForChapterConversationList.Provider>
                          </ContextForPublicSpace.Provider>
                        </ContextForPostCommentList.Provider>
                      </ContextForPostAttachmentListFromPost.Provider>
                    </ContextForPostKarmaList.Provider>
                  </ContextForTaskListFromSpace.Provider>
                </ContextForTaskListFromChapter.Provider>
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
        window.location.href = `${portalMap.portal.register.link}?redirect=${window.location.href}`;
      }
    }
  }, [userMainController.state.objId, pageRole]);

  return <>{children}</>;
}

function EffectWrapper({ children }: { children: React.ReactNode }) {}

function UpdateWrapper({ children }: { children: React.ReactNode }) {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const publicSpaceController = useContext(ContextForPublicSpace);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const chapterId = chapterListController.state?.objId;
    const postId = postListController.state?.objId;

    // Get the current search params
    const currentSearchParams = new URLSearchParams(searchParams);

    // Update scene and chapter in the URL if they exist
    if (chapterId) {
      currentSearchParams.set('chapter', chapterId);
    }
    if (
      postId &&
      publicSpaceController.state.feedView === PublicSpaceFeedView.POST
    ) {
      currentSearchParams.set('post', postId);
    }

    // Update the router to reflect the new search params
    router.replace(`?${currentSearchParams.toString()}`);
  }, [
    chapterListController.state?.objId,
    postListController.state?.objId,
    publicSpaceController.state.feedView,
    router, // Ensure router is in the dependency array
  ]);

  return <>{children}</>;
}

export default PublicAstralPage(Page);
