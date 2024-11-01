'use client';
import { DashboardBody } from '@/(core)/(dashboard)/common/container/body/main';
import { DashboardContainer } from '@/(core)/(dashboard)/common/container/main';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { LoadingWrapper } from '@/components/loading/controller/main';
import { useGlobalSpace } from '@/logic/store/space/main';
import { useGlobalUser } from '@/logic/store/user/main';
import {
  ContextForUserActivityListFromChapter,
  useControllerForUserActivityListFromChapter,
} from '@/server/controller/activity/list-from-chapter';
import {
  ContextForChapterConversationList,
  useControllerForChapterConversationList,
} from '@/server/controller/conversation/list';
import {
  ContextForConversationMessageList,
  useControllerForConversationMessageList,
} from '@/server/controller/conversation/message/list';
import {
  ContextForSceneIdeaList,
  useControllerForSceneIdeaList,
} from '@/server/controller/idea/list';
import {
  ContextForIdeaSceneList,
  useControllerForIdeaSceneList,
} from '@/server/controller/scene/list';
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
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
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
        <ContextForSpaceChapterList.Provider value={chapterListController}>
          <ContextForSpaceMemberList.Provider value={spaceMemberListController}>
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
                      </ContextForUserActivityListFromChapter.Provider>
                    </ContextForTaskList.Provider>
                  </ContextForConversationMessageList.Provider>
                </ContextForSceneIdeaList.Provider>
              </ContextForIdeaSceneList.Provider>
            </ContextForChapterConversationList.Provider>
          </ContextForSpaceMemberList.Provider>
        </ContextForSpaceChapterList.Provider>
      </ContextForSpaceMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
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

export default protectedUnderAstralAuth(Page);
