'use client';
import { StormView } from './view/view';
import isVerseAuth from '@/(utils)/isAuth';
import { createContext, useEffect } from 'react';
import { useGlobalSpace } from '@/(logic)/internal/store/space/main';
import { useControllerForSpaceMain } from '@/(server)/(controller)/space/main';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/(controller)/space/chapter/list';
import {
  ContextForChapterChatList,
  useControllerForChapterChatList,
} from '@/(server)/(controller)/space/chapter/chat/list';
import { useControllerForConversationMessageMain } from '@/(server)/(controller)/space/chapter/chat/conversation/message/main';
import {
  ContextForConversationMessageList,
  useControllerForConversationMessageList,
} from '@/(server)/(controller)/space/chapter/chat/conversation/message/list';
import {
  ContextForChatConversationList,
  useControllerForChatConversationList,
} from '@/(server)/(controller)/space/chapter/chat/conversation/list';
import {
  ContextForChatMemberList,
  useControllerForChatMemberList,
} from '@/(server)/(controller)/space/chapter/chat/member/list';

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
    chapterListController.state.objId,
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
    <ContextForSpaceChapterList.Provider value={chapterListController}>
      <ContextForChapterChatList.Provider value={chatListController}>
        <ContextForChatMemberList.Provider value={chatMemberListController}>
          <ContextForChatConversationList.Provider
            value={conversationListController}
          >
            <ContextForConversationMessageList.Provider
              value={messageListController}
            >
              <StormView />
            </ContextForConversationMessageList.Provider>
          </ContextForChatConversationList.Provider>
        </ContextForChatMemberList.Provider>
      </ContextForChapterChatList.Provider>
    </ContextForSpaceChapterList.Provider>
  );
}

export default isVerseAuth(Page);
