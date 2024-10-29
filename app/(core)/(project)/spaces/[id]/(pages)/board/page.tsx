'use client';
import { DashboardBody } from '@/(core)/(dashboard)/common/container/body/main';
import { DashboardContainer } from '@/(core)/(dashboard)/common/container/main';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { LoadingWrapper } from '@/components/loading/controller/main';
import { useGlobalUser } from '@/logic/store/user/main';
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
  ContextForTaskLinkList,
  useControllerForTaskLinkList,
} from '@/server/controller/way/link/list';
import {
  ContextForTaskList,
  useControllerForTaskList,
} from '@/server/controller/way/list';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { SpacesSidebar } from '../../../sidebar/main';
import { SpacesSidebarModals } from '../../../sidebar/modal/controller/main';
import { SpaceTabs, SpaceTabStage } from '../../../tabs/main';
import {
  ContextForSpacesBoard,
  useControllerForSpacesBoard,
} from './controller/main';
import { SpacesBoardModals } from './modal/controller/main';
import { SpacesBoardView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const taskId = searchParams.get('task');
  const chapterId = searchParams.get('chapter');
  const loggedInUser = useGlobalUser((state) => state.user);
  const spaceMainController = useControllerForSpaceMain(params.id);
  const spaceMemberListController = useControllerForSpaceMemberList(
    spaceMainController.state.objId,
  );
  const chapterListController = useControllerForSpaceChapterList(
    params.id,
    chapterId,
  );
  const taskListController = useControllerForTaskList(
    chapterListController.state.objId,
    taskId,
  );
  const linkListController = useControllerForTaskLinkList(
    taskListController.state.objId,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForSpaceMain.Provider value={spaceMainController}>
        <ContextForSpaceMemberList.Provider value={spaceMemberListController}>
          <ContextForSpaceChapterList.Provider value={chapterListController}>
            <ContextForTaskList.Provider value={taskListController}>
              <ContextForTaskLinkList.Provider value={linkListController}>
                <UpdateWrapper>
                  <LoadingWrapper>
                    <ControllerWrapper>
                      <ModalWrapper>
                        <ViewWrapper>
                          <SpacesBoardView />
                        </ViewWrapper>
                      </ModalWrapper>
                    </ControllerWrapper>
                  </LoadingWrapper>
                </UpdateWrapper>
              </ContextForTaskLinkList.Provider>
            </ContextForTaskList.Provider>
          </ContextForSpaceChapterList.Provider>
        </ContextForSpaceMemberList.Provider>
      </ContextForSpaceMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

function ModalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SpacesBoardModals>{children}</SpacesBoardModals>
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
  const journeyController = useControllerForSpacesBoard();

  return (
    <ContextForSpacesBoard.Provider value={journeyController}>
      {children}
    </ContextForSpacesBoard.Provider>
  );
}

function ViewWrapper({ children }: { children: React.ReactNode }) {
  return (
    <DashboardContainer fullHeight>
      <SpacesSidebarModals>
        <SpacesSidebar />
        <DashboardContent>
          <SpaceTabs tab={SpaceTabStage.Board} />
          <DashboardBody>{children}</DashboardBody>
        </DashboardContent>
      </SpacesSidebarModals>
    </DashboardContainer>
  );
}

export default protectedUnderAstralAuth(Page);
