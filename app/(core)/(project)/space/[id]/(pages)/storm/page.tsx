'use client';
import { useGlobalSpace } from '@/(logic)/internal/store/space/main';
import {
  ContextForChatConversationList,
  useControllerForChatConversationList,
} from '@/(server)/(controller)/space/chapter/chat/conversation/list';
import {
  ContextForConversationMessageList,
  useControllerForConversationMessageList,
} from '@/(server)/(controller)/space/chapter/chat/conversation/message/list';
import {
  ContextForChapterChatList,
  useControllerForChapterChatList,
} from '@/(server)/(controller)/space/chapter/chat/list';
import {
  ContextForChatMemberList,
  useControllerForChatMemberList,
} from '@/(server)/(controller)/space/chapter/chat/member/list';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/(controller)/space/chapter/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/(controller)/space/main';
import isVerseAuth from '@/(utils)/isAuth';
import { createContext, useEffect } from 'react';
import { SpaceStormView } from './view/view';

interface StormContextObj {}

export const StormContext = createContext<StormContextObj>(
  {} as StormContextObj,
);

function Page({ params }: { params: { id: string } }) {
  const setSpace = useGlobalSpace((state) => state.setSpace);
  const spaceMainController = useControllerForSpaceMain(params.id);
  const chapterListController = useControllerForSpaceChapterList(
    spaceMainController.state.objId,
  );
  const chatListController = useControllerForChapterChatList(
    chapterListController.state.objId,
  );
  const chatMemberListController = useControllerForChatMemberList(
    chatListController.state.objId,
  );
  const conversationListController = useControllerForChatConversationList(
    chatListController.state.objId,
  );
  const messageListController = useControllerForConversationMessageList(
    conversationListController.state.objId,
  );

  useEffect(() => {
    if (spaceMainController.state.obj) {
      setSpace(spaceMainController.state.obj);
    }
  }, [spaceMainController.state.obj]);

  return (
    <ContextForSpaceMain.Provider value={spaceMainController}>
      <ContextForSpaceChapterList.Provider value={chapterListController}>
        <ContextForChapterChatList.Provider value={chatListController}>
          <ContextForChatMemberList.Provider value={chatMemberListController}>
            <ContextForChatConversationList.Provider
              value={conversationListController}
            >
              <ContextForConversationMessageList.Provider
                value={messageListController}
              >
                <SpaceStormView />
              </ContextForConversationMessageList.Provider>
            </ContextForChatConversationList.Provider>
          </ContextForChatMemberList.Provider>
        </ContextForChapterChatList.Provider>
      </ContextForSpaceChapterList.Provider>
    </ContextForSpaceMain.Provider>
  );
}

export default isVerseAuth(Page);
