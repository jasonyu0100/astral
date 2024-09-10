'use client';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/controller/space/chapter/list';
import {
  ContextForLogLinkList,
  useControllerForLogLinkList,
} from '@/(server)/controller/space/chapter/log/link/list';
import {
  ContextForChapterLogList,
  useControllerForChapterLogList,
} from '@/(server)/controller/space/chapter/log/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/controller/space/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { LoadingWrapper } from '@/ui/loading/controller/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { useSearchParams } from 'next/navigation';
import {
  ContextForSpaceJourney,
  useControllerForSpaceJourney,
} from './controller/main';
import { SpaceJourneyModals } from './modal/controller/main';
import { SpaceJourneyView } from './view/main';

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
              <LoadingWrapper>
                <SpaceJourneyControllerWrapper>
                  <SpaceJourneyModals>
                    <SpaceJourneyView />
                  </SpaceJourneyModals>
                </SpaceJourneyControllerWrapper>
              </LoadingWrapper>
            </ContextForLogLinkList.Provider>
          </ContextForChapterLogList.Provider>
        </ContextForSpaceChapterList.Provider>
      </ContextForSpaceMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

function SpaceJourneyControllerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const journeyController = useControllerForSpaceJourney();

  return (
    <ContextForSpaceJourney.Provider value={journeyController}>
      {children}
    </ContextForSpaceJourney.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
