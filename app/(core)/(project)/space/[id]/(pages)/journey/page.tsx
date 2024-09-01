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
import isAstralAuth from '@/utils/isAuth';
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
  const journeyController = useControllerForSpaceJourney();
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
      <ContextForSpaceJourney.Provider value={journeyController}>
        <ContextForSpaceMain.Provider value={spaceController}>
          <ContextForSpaceChapterList.Provider value={chapterListController}>
            <ContextForChapterLogList.Provider value={logListController}>
              <ContextForLogLinkList.Provider value={linkListController}>
                <SpaceJourneyModals>
                  <SpaceJourneyView />
                </SpaceJourneyModals>
              </ContextForLogLinkList.Provider>
            </ContextForChapterLogList.Provider>
          </ContextForSpaceChapterList.Provider>
        </ContextForSpaceMain.Provider>
      </ContextForSpaceJourney.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default isAstralAuth(Page);
