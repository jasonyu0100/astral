'use client';
import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { useGlobalUser } from '@/logic/store/user/main';
import {
  ContextForUserActivityListFromChapter,
  useControllerForUserActivityListFromChapter,
} from '@/server/controller/activity/list-from-chapter';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/server/controller/space/chapter/list';
import {
  ContextForSpaceList,
  useControllerForSpaceList,
} from '@/server/controller/space/list';
import {
  ContextForTaskList,
  useControllerForTaskList,
} from '@/server/controller/task/list';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import PrivateAstralPage from '@/utils/private-astral-page';
import { useContext, useEffect } from 'react';
import {
  ContextForSpacesPersonalModals,
  SpacesPersonalModals,
} from './modal/controller/main';
import {
  ContextForCreateSpace,
  useControllerForCreateSpace,
} from './modal/create-space/(controller)/create-space/main';
import { StudioPersonalView } from './view/view';

function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const spaceListController = useControllerForSpaceList(loggedInUser?.id);
  const chapterListController = useControllerForSpaceChapterList('');
  const taskListController = useControllerForTaskList(
    chapterListController.state.objId,
  );
  const chapterActivityListController =
    useControllerForUserActivityListFromChapter(
      chapterListController.state.objId,
    );

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForSpaceList.Provider value={spaceListController}>
        <ContextForSpaceChapterList.Provider value={chapterListController}>
          <ContextForTaskList.Provider value={taskListController}>
            <ContextForUserActivityListFromChapter.Provider
              value={chapterActivityListController}
            >
              <SpacesPersonalModals>
                <ControllerWrapper>
                  <EffectWrapper>
                    <StudioPersonalView />
                  </EffectWrapper>
                </ControllerWrapper>
              </SpacesPersonalModals>
            </ContextForUserActivityListFromChapter.Provider>
          </ContextForTaskList.Provider>
        </ContextForSpaceChapterList.Provider>
      </ContextForSpaceList.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

function ControllerWrapper({ children }: { children: React.ReactNode }) {
  const createSpaceController = useControllerForCreateSpace();
  return (
    <>
      <ContextForCreateSpace.Provider value={createSpaceController}>
        {children}
      </ContextForCreateSpace.Provider>
    </>
  );
}

function EffectWrapper({ children }: { children: React.ReactNode }) {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const spacesPersonalModalController = useContext(
    ContextForSpacesPersonalModals,
  );
  const spaceListController = useContext(ContextForSpaceList);
  const createSpaceController = useContext(ContextForCreateSpace);

  useEffect(() => {
    if (spaceListController.state.objs.length === 0) {
      const created = new Date(loggedInUser.created);
      const now = new Date();
      const diff = now.getTime() - created.getTime();
      if (diff < 1000 * 60 * 5) {
        // HARD LOCK IN STARTER FOR 5 minutes
        createSpaceController.createSpace().then((space) => {
          window.location.href = spacesMap.spaces.id.progress.link(space.id);
        });
      }
    }
    if (
      spaceListController.state.objs.length > 2 &&
      spaceListController.state.objs.length < 5
    ) {
      spacesPersonalModalController.showNoticeController.open();
    } else {
      spacesPersonalModalController.showNoticeController.close();
    }
  }, [spaceListController.state.objs.length, loggedInUser]);
  return <>{children}</>;
}

export default PrivateAstralPage(Page);
