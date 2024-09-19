'use client';
import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import { DashboardBody } from '@/(core)/(dashboard)/common/controller/body/main';
import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import { CommonSidebar } from '@/(core)/common/(sidebar)/main';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/controller/space/chapter/list';
import {
  ContextForLogLinkList,
  useControllerForLogLinkList,
} from '@/(server)/controller/space/chapter/way/link/list';
import {
  ContextForChapterLogList,
  useControllerForChapterLogList,
} from '@/(server)/controller/space/chapter/way/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/controller/space/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { LoadingWrapper } from '@/ui/loading/controller/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { SpaceTabs, SpaceTabStage } from '../../tabs/main';
import {
  ContextForSpacesJourney,
  useControllerForSpacesJourney,
} from './controller/main';
import { SpacesJourneyModals } from './modal/controller/main';
import { SpacesJourneyView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const logId = searchParams.get('log');
  const chapterId = searchParams.get('chapter');
  const user = useGlobalUser((state) => state.user);
  const spaceController = useControllerForSpaceMain(params.id);
  const chapterListController = useControllerForSpaceChapterList(
    params.id,
    chapterId,
  );
  const logListController = useControllerForChapterLogList(
    chapterListController.state.objId,
    logId,
  );
  const linkListController = useControllerForLogLinkList(
    logListController.state.objId,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={user}>
      <ContextForSpaceMain.Provider value={spaceController}>
        <ContextForSpaceChapterList.Provider value={chapterListController}>
          <ContextForChapterLogList.Provider value={logListController}>
            <ContextForLogLinkList.Provider value={linkListController}>
              <UpdateWrapper>
                <LoadingWrapper>
                  <ControllerWrapper>
                    <ModalWrapper>
                      <ViewWrapper>
                        <SpacesJourneyView />
                      </ViewWrapper>
                    </ModalWrapper>
                  </ControllerWrapper>
                </LoadingWrapper>
              </UpdateWrapper>
            </ContextForLogLinkList.Provider>
          </ContextForChapterLogList.Provider>
        </ContextForSpaceChapterList.Provider>
      </ContextForSpaceMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

function ModalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SpacesJourneyModals>{children}</SpacesJourneyModals>
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
  const journeyController = useControllerForSpacesJourney();

  return (
    <ContextForSpacesJourney.Provider value={journeyController}>
      {children}
    </ContextForSpacesJourney.Provider>
  );
}

function ViewWrapper({ children }: { children: React.ReactNode }) {
  return (
    <DashboardController fullHeight>
      <CommonSidebar minimised />
      <DashboardContent>
        <SpaceTabs tab={SpaceTabStage.Journey} />
        <DashboardBody>{children}</DashboardBody>
      </DashboardContent>
    </DashboardController>
  );
}

export default protectedUnderAstralAuth(Page);
