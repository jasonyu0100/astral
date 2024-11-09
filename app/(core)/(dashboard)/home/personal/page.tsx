'use client';
import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import {
  ContextForUserActivityListFromChapter,
  useControllerForUserActivityListFromChapter,
} from '@/architecture/controller/activity/list-from-chapter';
import {
  ContextForChapterConversationList,
  useControllerForChapterConversationList,
} from '@/architecture/controller/conversation/list';
import {
  ContextForIdeaSceneList,
  useControllerForIdeaSceneList,
} from '@/architecture/controller/scene/list';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/architecture/controller/space/chapter/list';
import {
  ContextForSpaceList,
  useControllerForSpaceList,
} from '@/architecture/controller/space/list';
import {
  ContextForTaskListFromChapter,
  useControllerForTaskListFromChapter,
} from '@/architecture/controller/task/list-from-chapter';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import PrivateAstralPage from '@/utils/private-astral-page';
import { useContext, useEffect } from 'react';
import {
  ContextForHomePersonalModals,
  HomePersonalModals,
} from './modal/controller/main';
import {
  ContextForHomePersonalCreateSpace,
  useControllerForHomePersonalCreateSpace,
} from './modal/create-space/controller/main';
import { HomePersonalView } from './view/view';

function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const spaceListController = useControllerForSpaceList(loggedInUser?.id);
  const chapterListController = useControllerForSpaceChapterList('');
  const taskListController = useControllerForTaskListFromChapter(
    chapterListController.state.objId,
  );
  const sceneListController = useControllerForIdeaSceneList(
    chapterListController.state.objId,
  );
  const conversationListController = useControllerForChapterConversationList(
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
          <ContextForTaskListFromChapter.Provider value={taskListController}>
            <ContextForIdeaSceneList.Provider value={sceneListController}>
              <ContextForChapterConversationList.Provider
                value={conversationListController}
              >
                <ContextForUserActivityListFromChapter.Provider
                  value={chapterActivityListController}
                >
                  <ControllerWrapper>
                    <ModalWrapper>
                      <EffectWrapper>
                        <HomePersonalView />
                      </EffectWrapper>
                    </ModalWrapper>
                  </ControllerWrapper>
                </ContextForUserActivityListFromChapter.Provider>
              </ContextForChapterConversationList.Provider>
            </ContextForIdeaSceneList.Provider>
          </ContextForTaskListFromChapter.Provider>
        </ContextForSpaceChapterList.Provider>
      </ContextForSpaceList.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

function ModalWrapper({ children }: { children: React.ReactNode }) {
  return <HomePersonalModals>{children}</HomePersonalModals>;
}

function ControllerWrapper({ children }: { children: React.ReactNode }) {
  const createSpaceController = useControllerForHomePersonalCreateSpace();
  return (
    <>
      <ContextForHomePersonalCreateSpace.Provider value={createSpaceController}>
        {children}
      </ContextForHomePersonalCreateSpace.Provider>
    </>
  );
}

function EffectWrapper({ children }: { children: React.ReactNode }) {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const spacesPersonalModalController = useContext(
    ContextForHomePersonalModals,
  );
  const spaceListController = useContext(ContextForSpaceList);
  const createSpaceController = useContext(ContextForHomePersonalCreateSpace);

  useEffect(() => {
    if (spaceListController.state.objs.length === 0) {
      const created = new Date(loggedInUser.created);
      const now = new Date();
      const diff = now.getTime() - created.getTime();
      if (diff < 1000 * 60) {
        // HARD LOCK IN STARTER FOR 1 minute
        createSpaceController.createSpace().then((space) => {
          window.location.href = spacesMap.spaces.id.work.link(space.id);
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
