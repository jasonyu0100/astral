'use client';
import {
  ContextForChatConversationList,
  useControllerForChatConversationList,
} from '@/(server)/(controller)/space/chapter/chat/conversation/list';
import {
  ContextForChapterChatList,
  useControllerForChapterChatList,
} from '@/(server)/(controller)/space/chapter/chat/list';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/(controller)/space/chapter/list';
import {
  ContextForChapterSceneList,
  useControllerForChapterSceneList,
} from '@/(server)/(controller)/space/chapter/scene/list';
import {
  ContextForChapterUpdateList,
  useControllerForChapterUpdateList,
} from '@/(server)/(controller)/space/chapter/update/list';
import {
  ContextForChapterVerseList,
  useControllerForChapterVerseList,
} from '@/(server)/(controller)/space/chapter/verse/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/(controller)/space/main';
import isVerseAuth from '@/(utils)/isAuth';
import { SpaceSeaShareView } from './view/main';

function Page({ params }: { params: { id: string } }) {
  const spaceController = useControllerForSpaceMain(params.id);
  const updateListController = useControllerForChapterUpdateList(params.id);

  // UPDATEs

  const chapterListController = useControllerForSpaceChapterList(params.id);
  const chatListController = useControllerForChapterChatList(
    chapterListController.state.objId,
  );
  const conversationListController = useControllerForChatConversationList(
    chatListController.state.objId,
  );
  const sceneListController = useControllerForChapterSceneList(
    chapterListController.state.objId,
  );
  const verseListController = useControllerForChapterVerseList(
    chapterListController.state.objId,
  );

  return (
    <ContextForSpaceMain.Provider value={spaceController}>
      <ContextForChapterUpdateList.Provider value={updateListController}>
        <ContextForSpaceChapterList.Provider value={chapterListController}>
          <ContextForChapterChatList.Provider value={chatListController}>
            <ContextForChatConversationList.Provider
              value={conversationListController}
            >
              <ContextForChapterSceneList.Provider value={sceneListController}>
                <ContextForChapterVerseList.Provider
                  value={verseListController}
                >
                  <SpaceSeaShareView />
                </ContextForChapterVerseList.Provider>
              </ContextForChapterSceneList.Provider>
            </ContextForChatConversationList.Provider>
          </ContextForChapterChatList.Provider>
        </ContextForSpaceChapterList.Provider>
      </ContextForChapterUpdateList.Provider>
    </ContextForSpaceMain.Provider>
  );
}

export default isVerseAuth(Page);
