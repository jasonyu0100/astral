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
import { createContext, useEffect, useState } from 'react';
import { ChatRole } from './data';
import { SpaceChatView } from './view/main';

interface Controller {
  role: string;
  setRole: (role: string) => void;
}

export const ContextForChat = createContext<Controller>({} as Controller);

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

  const [role, setRole] = useState<string>(ChatRole.Producer);

  const chatContext = {
    role,
    setRole,
  };

  useEffect(() => {
    if (spaceMainController.state.obj) {
      setSpace(spaceMainController.state.obj);
    }
  }, [spaceMainController.state.obj]);

  return (
    <ContextForChat.Provider value={chatContext}>
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
                  <SpaceChatView />
                </ContextForConversationMessageList.Provider>
              </ContextForChatConversationList.Provider>
            </ContextForChatMemberList.Provider>
          </ContextForChapterChatList.Provider>
        </ContextForSpaceChapterList.Provider>
      </ContextForSpaceMain.Provider>
    </ContextForChat.Provider>
  );
}

export default isVerseAuth(Page);
