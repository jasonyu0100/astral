'use client';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';
import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import {
  ContextForChapterConversationList,
  useControllerForChapterConversationList,
} from '@/(server)/controller/conversation/list';
import {
  ContextForConversationMessageList,
  useControllerForConversationMessageList,
} from '@/(server)/controller/conversation/message/list';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/controller/space/chapter/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/controller/space/main';
import {
  ContextForSpaceMemberList,
  useControllerForSpaceMemberList,
} from '@/(server)/controller/space/member/list';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalSpace } from '@/logic/store/space/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { LoadingWrapper } from '@/ui/loading/controller/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { SpaceSidebar } from '../../../sidebar/main';
import { SpaceTabs, SpaceTabStage } from '../../../tabs/main';
import {
  ContextForSpacesSpace,
  useControllerForSpacesSpace,
} from './controller/main';
import { SpacesSpaceModals } from './modal/controller/main';
import { SpacesSpaceView } from './view/main';

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
  const conversationListController = useControllerForChapterConversationList(
    chapterListController.state.objId,
  );
  const messageListController = useControllerForConversationMessageList(
    conversationListController.state.objId,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForSpaceMain.Provider value={spaceMainController}>
        <ContextForSpaceChapterList.Provider value={chapterListController}>
          <ContextForSpaceMemberList.Provider value={spaceMemberListController}>
            <ContextForChapterConversationList.Provider
              value={conversationListController}
            >
              <ContextForConversationMessageList.Provider
                value={messageListController}
              >
                <EffectWrapper>
                  <UpdateWrapper>
                    <LoadingWrapper>
                      <ControllerWrapper>
                        <ModalWrapper>
                          <ViewWrapper>
                            <SpacesSpaceView />
                          </ViewWrapper>
                        </ModalWrapper>
                      </ControllerWrapper>
                    </LoadingWrapper>
                  </UpdateWrapper>
                </EffectWrapper>
              </ContextForConversationMessageList.Provider>
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
        loggedInUser.id,
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
      <SpacesSpaceModals>{children}</SpacesSpaceModals>
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
  const spacesSpaceController = useControllerForSpacesSpace();

  return (
    <ContextForSpacesSpace.Provider value={spacesSpaceController}>
      {children}
    </ContextForSpacesSpace.Provider>
  );
}

function ViewWrapper({ children }: { children: React.ReactNode }) {
  return (
    <DashboardController fullHeight>
      <SpaceSidebar />
      <DashboardContent>
        <SpaceTabs tab={SpaceTabStage.Space} />
        <DashboardBody>{children}</DashboardBody>
      </DashboardContent>
    </DashboardController>
  );
}

export default protectedUnderAstralAuth(Page);
