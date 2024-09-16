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
  ContextForSpotlightAttachmentListFromSpotlight,
  useControllerForSpotlightAttachmentListFromSpotlight,
} from '@/(server)/controller/space/chapter/spotlight/attachment/list-from-spotlight';
import {
  ContextForSpotlightCommentList,
  useControllerForSpotlightCommentList,
} from '@/(server)/controller/space/chapter/spotlight/comment/list';
import {
  ContextForSpotlightKarmaList,
  useControllerForSpotlightKarmaList,
} from '@/(server)/controller/space/chapter/spotlight/karma/list';
import {
  ContextForSpotlightLinkList,
  useControllerForSpotlightLinkList,
} from '@/(server)/controller/space/chapter/spotlight/link/list';
import {
  ContextForChapterSpotlightListFromChapter,
  useControllerForChapterSpotlightListFromChapter,
} from '@/(server)/controller/space/chapter/spotlight/list-from-chapter';
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
  ContextForSpacesFlight,
  useControllerForSpacesFlight,
} from './controller/main';
import { SpacesFlightModals } from './modal/controller/main';
import { SpacesFlightView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const spotlightId = searchParams.get('spotlight');
  const chapterId = searchParams.get('chapter');

  const loggedInUser = useGlobalUser((state) => state.user);
  const spaceController = useControllerForSpaceMain(params.id);
  const chapterListController = useControllerForSpaceChapterList(
    params.id,
    chapterId,
  );
  const spotlightListController =
    useControllerForChapterSpotlightListFromChapter(
      chapterListController.state.objId,
      spotlightId,
    );
  const commentListController = useControllerForSpotlightCommentList(
    spotlightListController.state.objId,
  );
  const spotlightKarmaListController = useControllerForSpotlightKarmaList(
    spotlightListController.state.objId,
  );
  const attachmentListController =
    useControllerForSpotlightAttachmentListFromSpotlight(
      spotlightListController.state.objId,
    );
  const linkListController = useControllerForSpotlightLinkList(
    spotlightListController.state.objId,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForSpaceMain.Provider value={spaceController}>
        <ContextForSpaceChapterList.Provider value={chapterListController}>
          <ContextForChapterSpotlightListFromChapter.Provider
            value={spotlightListController}
          >
            <ContextForSpotlightKarmaList.Provider
              value={spotlightKarmaListController}
            >
              <ContextForSpotlightAttachmentListFromSpotlight.Provider
                value={attachmentListController}
              >
                <ContextForSpotlightCommentList.Provider
                  value={commentListController}
                >
                  <ContextForSpotlightLinkList.Provider
                    value={linkListController}
                  >
                    <UpdateWrapper>
                      <LoadingWrapper>
                        <ControllerWrapper>
                          <ModalWrapper>
                            <ViewWrapper>
                              <SpacesFlightView />
                            </ViewWrapper>
                          </ModalWrapper>
                        </ControllerWrapper>
                      </LoadingWrapper>
                    </UpdateWrapper>
                  </ContextForSpotlightLinkList.Provider>
                </ContextForSpotlightCommentList.Provider>
              </ContextForSpotlightAttachmentListFromSpotlight.Provider>
            </ContextForSpotlightKarmaList.Provider>
          </ContextForChapterSpotlightListFromChapter.Provider>
        </ContextForSpaceChapterList.Provider>
      </ContextForSpaceMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

function ModalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SpacesFlightModals>{children}</SpacesFlightModals>
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
  const flightController = useControllerForSpacesFlight();
  return (
    <ContextForSpacesFlight.Provider value={flightController}>
      {children}
    </ContextForSpacesFlight.Provider>
  );
}

function ViewWrapper({ children }: { children: React.ReactNode }) {
  return (
    <DashboardController fullHeight>
      <CommonSidebar minimised />
      <DashboardContent>
        <SpaceTabs tab={SpaceTabStage.Flight} />
        <DashboardBody>{children}</DashboardBody>
      </DashboardContent>
    </DashboardController>
  );
}

export default protectedUnderAstralAuth(Page);
