'use client';
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
  ContextForSpaceList,
  useControllerForSpaceList,
} from '@/architecture/controller/space/list';
import {
  ContextForTaskListFromChapter,
  useControllerForTaskListFromChapter,
} from '@/architecture/controller/task/list-from-chapter';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { LoadingWrapper } from '@/components/loading/controller/main';
import { useGlobalUser } from '@/logic/store/user/main';
import PrivateAstralPage from '@/utils/private-astral-page';
import { useContext, useEffect } from 'react';
import {
  ContextForHomeCreate,
  useControllerForHomeCreate,
} from './controller/main';
import {
  ContextForHomeCreateModals,
  HomeCreateModals,
} from './modal/controller/main';
import {
  ContextForHomeCreateCreateSpace,
  useControllerForHomeCreateCreateSpace,
} from './modal/create-space/controller/main';
import { HomeCreateView } from './view/view';

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
  const ideaListController = useControllerForSceneIdeaList(
    sceneListController.state.objId,
  );
  const conversationListController = useControllerForChapterConversationList(
    chapterListController.state.objId,
  );
  const messageListController = useControllerForConversationMessageList(
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
              <ContextForSceneIdeaList.Provider value={ideaListController}>
                <ContextForChapterConversationList.Provider
                  value={conversationListController}
                >
                  <ContextForConversationMessageList.Provider
                    value={messageListController}
                  >
                    <ContextForUserActivityListFromChapter.Provider
                      value={chapterActivityListController}
                    >
                      <ControllerWrapper>
                        <ModalWrapper>
                          <EffectWrapper>
                            <LoadingWrapper>
                              <HomeCreateView />
                            </LoadingWrapper>
                          </EffectWrapper>
                        </ModalWrapper>
                      </ControllerWrapper>
                    </ContextForUserActivityListFromChapter.Provider>
                  </ContextForConversationMessageList.Provider>
                </ContextForChapterConversationList.Provider>
              </ContextForSceneIdeaList.Provider>
            </ContextForIdeaSceneList.Provider>
          </ContextForTaskListFromChapter.Provider>
        </ContextForSpaceChapterList.Provider>
      </ContextForSpaceList.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

function ModalWrapper({ children }: { children: React.ReactNode }) {
  return <HomeCreateModals>{children}</HomeCreateModals>;
}

function ControllerWrapper({ children }: { children: React.ReactNode }) {
  const createSpaceController = useControllerForHomeCreateCreateSpace();
  const homePersonalController = useControllerForHomeCreate();

  return (
    <>
      <ContextForHomeCreate.Provider value={homePersonalController}>
        <ContextForHomeCreateCreateSpace.Provider value={createSpaceController}>
          {children}
        </ContextForHomeCreateCreateSpace.Provider>
      </ContextForHomeCreate.Provider>
    </>
  );
}

function EffectWrapper({ children }: { children: React.ReactNode }) {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const spacesPersonalModalController = useContext(ContextForHomeCreateModals);
  const spaceListController = useContext(ContextForSpaceList);
  const createSpaceController = useContext(ContextForHomeCreateCreateSpace);

  useEffect(() => {
    // if (spaceListController.state.objs.length === 0) {
    //   const created = new Date(loggedInUser.created);
    //   const now = new Date();
    //   const diff = now.getTime() - created.getTime();
    //   if (diff < 1000 * 60) {
    //     // HARD LOCK IN STARTER FOR 1 minute
    //     createSpaceController.actions.createBlankSpace().then((space) => {
    //       window.location.href = liveMap.live.link(space.id);
    //     });
    //   }
    // }
    // if (
    //   spaceListController.state.objs.length > 2 &&
    //   spaceListController.state.objs.length < 5
    // ) {
    //   spacesPersonalModalController.showNoticeController.open();
    // } else {
    //   spacesPersonalModalController.showNoticeController.close();
    // }
  }, [spaceListController.state.objs.length, loggedInUser]);
  return <>{children}</>;
}

export default PrivateAstralPage(Page);
