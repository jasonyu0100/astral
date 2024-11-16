'use client';
import { DashboardBody } from '@/(core)/(dashboard)/common/container/body/main';
import { DashboardContainer } from '@/(core)/(dashboard)/common/container/main';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { portalMap } from '@/(portal)/map';
import {
  ContextForUserActivityListFromChapter,
  useControllerForUserActivityListFromChapter,
} from '@/architecture/controller/activity/list-from-chapter';
import {
  ContextForChapterConversationList,
  useControllerForChapterConversationList,
} from '@/architecture/controller/conversation/list';
import {
  ContextForConversationMessageList,
  useControllerForConversationMessageList,
} from '@/architecture/controller/conversation/message/list';
import {
  ContextForSceneIdeaList,
  useControllerForSceneIdeaList,
} from '@/architecture/controller/idea/list';
import {
  ContextForIdeaSceneList,
  useControllerForIdeaSceneList,
} from '@/architecture/controller/scene/list';
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
import { useGlobalSpace } from '@/logic/store/space/main';
import { useGlobalUser } from '@/logic/store/user/main';
import PrivateAstralPage from '@/utils/private-astral-page';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { SpacesSidebarModals } from '../../../sidebar/modal/controller/main';
import { SpaceTabs, SpaceTabStage } from '../../../tabs/main';
import {
  ContextForSpacesChat,
  useControllerForSpacesChat,
} from './controller/main';
import {
  ContextForSpacesChatModals,
  SpacesChatModals,
} from './modal/controller/main';
import { SpacesChatView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const chapterId = searchParams.get('chapter');
  const conversationId = searchParams.get('conversation');
  const loggedInUser = useGlobalUser((state) => state.user);
  const spaceMainController = useControllerForSpaceMain(params.id);
  const userMainController = useControllerForUserMain(
    spaceMainController.state.obj?.userId,
  );
  const spaceMemberListController = useControllerForSpaceMemberList(
    spaceMainController.state.objId,
  );
  const chapterListController = useControllerForSpaceChapterList(
    spaceMainController.state.objId,
    chapterId,
  );
  const sceneListController = useControllerForIdeaSceneList(
    chapterListController.state.objId,
  );
  const ideaListController = useControllerForSceneIdeaList(
    sceneListController.state.objId,
  );
  const conversationListController = useControllerForChapterConversationList(
    chapterListController.state.objId,
    conversationId,
  );
  const messageListController = useControllerForConversationMessageList(
    conversationListController.state.objId,
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
                  <ContextForChapterConversationList.Provider
                    value={conversationListController}
                  >
                    <ContextForConversationMessageList.Provider
                      value={messageListController}
                    >
                      <ContextForIdeaSceneList.Provider
                        value={sceneListController}
                      >
                        <ContextForSceneIdeaList.Provider
                          value={ideaListController}
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
                                      <EffectWrapper>
                                        <ModalWrapper>
                                          <ViewWrapper>
                                            <SpacesChatView />
                                          </ViewWrapper>
                                        </ModalWrapper>
                                      </EffectWrapper>
                                    </ControllerWrapper>
                                  </LoadingWrapper>
                                </UpdateWrapper>
                              </ContextForUserActivityListFromChapter.Provider>
                            </ContextForTaskListFromSpace.Provider>
                          </ContextForTaskListFromChapter.Provider>
                        </ContextForSceneIdeaList.Provider>
                      </ContextForIdeaSceneList.Provider>
                    </ContextForConversationMessageList.Provider>
                  </ContextForChapterConversationList.Provider>
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

  const isOwner = loggedInUser?.id === spaceMainController.state.obj?.userId;
  const isMember = spaceMemberListController.state.objs.some(
    (member) => member.userId === loggedInUser?.id,
  );
  const isSpacePublic =
    spaceMainController.state.obj?.visibility === SpaceVisibility.PUBLIC;
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
          value={spaceMainController.state.obj?.visibility as SpaceVisibility}
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

function EffectWrapper({ children }: { children: React.ReactNode }) {
  const spaceMainController = useContext(ContextForSpaceMain);
  const conversationListController = useContext(
    ContextForChapterConversationList,
  );
  const messageListController = useContext(ContextForConversationMessageList);
  const setSpace = useGlobalSpace((state) => state.setSpace);

  useEffect(() => {
    if (spaceMainController.state.obj) {
      setSpace(spaceMainController.state.obj);
    }
  }, [spaceMainController.state.obj]);

  return <>{children}</>;
}

function ModalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SpacesChatModals>{children}</SpacesChatModals>
    </>
  );
}

function UpdateWrapper({ children }: { children: React.ReactNode }) {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const conversationListController = useContext(
    ContextForChapterConversationList,
  );
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const chapterId = chapterListController.state?.objId;
    const conversationId = conversationListController.state?.objId;

    // Get the current search params
    const currentSearchParams = new URLSearchParams(searchParams);

    // Update scene and chapter in the URL if they exist
    if (chapterId) {
      currentSearchParams.set('chapter', chapterId);
    }
    if (conversationId) {
      currentSearchParams.set('conversation', conversationId);
    }

    // Update the router to reflect the new search params
    router.replace(`?${currentSearchParams.toString()}`);
  }, [
    router, // Ensure router is in the dependency array
  ]);

  return <>{children}</>;
}

function ControllerWrapper({ children }: { children: React.ReactNode }) {
  const spacesConversationController = useControllerForSpacesChat();

  return (
    <ContextForSpacesChat.Provider value={spacesConversationController}>
      {children}
    </ContextForSpacesChat.Provider>
  );
}

function ViewWrapper({ children }: { children: React.ReactNode }) {
  const modalController = useContext(ContextForSpacesChatModals);

  return (
    <DashboardContainer fullHeight>
      <SpacesSidebarModals>
        {/* <SpacesSidebar /> */}
        <div className='flex w-full flex-row items-center pr-[2rem]'>
          <DashboardContent padding>
            <SpaceTabs tab={SpaceTabStage.Chat} />
            <DashboardBody>{children}</DashboardBody>
          </DashboardContent>
          <div
            onClick={() => {
              modalController.generateSceneController.open();
            }}
            className='flex h-[5rem] w-[5rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-purple-500'
          >
            <AstralArrowForwardIcon />
          </div>
        </div>
      </SpacesSidebarModals>
    </DashboardContainer>
  );
}

export default PrivateAstralPage(Page);
