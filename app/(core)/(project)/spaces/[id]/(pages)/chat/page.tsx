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
  ContextForTaskList,
  useControllerForTaskList,
} from '@/architecture/controller/task/list';
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
import { useGlobalSpace } from '@/logic/store/space/main';
import { useGlobalUser } from '@/logic/store/user/main';
import PrivateAstralPage from '@/utils/private-astral-page';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { SpacesSidebar } from '../../../sidebar/main';
import { SpacesSidebarModals } from '../../../sidebar/modal/controller/main';
import { SpaceTabs, SpaceTabStage } from '../../../tabs/main';
import {
  ContextForSpacesChat,
  useControllerForSpacesChat,
} from './controller/main';
import { SpacesChatModals } from './modal/controller/main';
import { SpacesChatView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
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
  );
  const messageListController = useControllerForConversationMessageList(
    conversationListController.state.objId,
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
          <ContextForSpaceChapterList.Provider value={chapterListController}>
            <ContextForSpaceMemberList.Provider
              value={spaceMemberListController}
            >
              <ContextForChapterConversationList.Provider
                value={conversationListController}
              >
                <ContextForIdeaSceneList.Provider value={sceneListController}>
                  <ContextForSceneIdeaList.Provider value={ideaListController}>
                    <ContextForConversationMessageList.Provider
                      value={messageListController}
                    >
                      <ContextForTaskList.Provider value={taskListController}>
                        <ContextForUserActivityListFromChapter.Provider
                          value={activityListController}
                        >
                          <PermissionWrapper>
                            <RedirectWrapper>
                              <EffectWrapper>
                                <UpdateWrapper>
                                  <LoadingWrapper>
                                    <ControllerWrapper>
                                      <ModalWrapper>
                                        <ViewWrapper>
                                          <SpacesChatView />
                                        </ViewWrapper>
                                      </ModalWrapper>
                                    </ControllerWrapper>
                                  </LoadingWrapper>
                                </UpdateWrapper>
                              </EffectWrapper>
                            </RedirectWrapper>
                          </PermissionWrapper>
                        </ContextForUserActivityListFromChapter.Provider>
                      </ContextForTaskList.Provider>
                    </ContextForConversationMessageList.Provider>
                  </ContextForSceneIdeaList.Provider>
                </ContextForIdeaSceneList.Provider>
              </ContextForChapterConversationList.Provider>
            </ContextForSpaceMemberList.Provider>
          </ContextForSpaceChapterList.Provider>
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

function EffectWrapper({ children }: { children: React.ReactNode }) {
  const spaceMainController = useContext(ContextForSpaceMain);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const conversationListController = useContext(
    ContextForChapterConversationList,
  );
  const messageListController = useContext(ContextForConversationMessageList);
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const setSpace = useGlobalSpace((state) => state.setSpace);

  useEffect(() => {
    if (spaceMainController.state.obj) {
      setSpace(spaceMainController.state.obj);
    }
  }, [spaceMainController.state.obj]);

  useEffect(() => {
    if (conversationListController.state.objId === '') {
      conversationListController.actions.createActions.createConversation(
        loggedInUser?.id,
        chapterListController.state.objId,
      );
    }
  }, [conversationListController.state.objId]);

  useEffect(() => {
    if (
      messageListController.state.objs.length === 0 &&
      conversationListController.state.currentObj
    ) {
      const created = new Date(
        conversationListController.state.currentObj.created,
      );
      const duration = new Date().getTime() - created.getTime();
      if (duration < 1000 * 60) {
        messageListController.actions.createActions.sendAgentMessage(
          'astral',
          conversationListController.state.objId,
          "Hello, I'm Astral. How can I help you today?",
        );
      }
    }
  }, [
    messageListController.state.objs,
    conversationListController.state.objId,
  ]);

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

function ControllerWrapper({ children }: { children: React.ReactNode }) {
  const spacesConversationController = useControllerForSpacesChat();

  return (
    <ContextForSpacesChat.Provider value={spacesConversationController}>
      {children}
    </ContextForSpacesChat.Provider>
  );
}

function ViewWrapper({ children }: { children: React.ReactNode }) {
  return (
    <DashboardContainer fullHeight>
      <SpacesSidebarModals>
        <SpacesSidebar />
        <DashboardContent>
          <SpaceTabs tab={SpaceTabStage.Chat} />
          <DashboardBody>{children}</DashboardBody>
        </DashboardContent>
      </SpacesSidebarModals>
    </DashboardContainer>
  );
}

export default PrivateAstralPage(Page);
