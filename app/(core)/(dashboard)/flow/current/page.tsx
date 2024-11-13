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
  ContextForFlowList,
  useControllerForFlowList,
} from '@/architecture/controller/flow/list';
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
import {
  ContextForFlowCurrent,
  useControllerForFlowCurrent,
} from './controller/main';
import { FlowCurrentModals } from './modal/controller/main';
import {
  ContextForFlowCurrentCreateSpace,
  useControllerForFlowCurrentCreateSpace,
} from './modal/create-space/controller/main';
import { FlowCurrentView } from './view/view';

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
  const flowListController = useControllerForFlowList(loggedInUser.id);

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
                    <ContextForFlowList.Provider value={flowListController}>
                      <ContextForUserActivityListFromChapter.Provider
                        value={chapterActivityListController}
                      >
                        <ControllerWrapper>
                          <ModalWrapper>
                            <LoadingWrapper>
                              <FlowCurrentView />
                            </LoadingWrapper>
                          </ModalWrapper>
                        </ControllerWrapper>
                      </ContextForUserActivityListFromChapter.Provider>
                    </ContextForFlowList.Provider>
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
  return <FlowCurrentModals>{children}</FlowCurrentModals>;
}

function ControllerWrapper({ children }: { children: React.ReactNode }) {
  const createSpaceController = useControllerForFlowCurrentCreateSpace();
  const FlowCurrentController = useControllerForFlowCurrent();

  return (
    <>
      <ContextForFlowCurrent.Provider value={FlowCurrentController}>
        <ContextForFlowCurrentCreateSpace.Provider
          value={createSpaceController}
        >
          {children}
        </ContextForFlowCurrentCreateSpace.Provider>
      </ContextForFlowCurrent.Provider>
    </>
  );
}

export default PrivateAstralPage(Page);
