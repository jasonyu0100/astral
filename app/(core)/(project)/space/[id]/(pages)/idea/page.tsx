'use client';
import {
  ContextForChatConversationList,
  useControllerForChatConversationList,
} from '@/(server)/controller/space/chapter/chat/conversation/list';
import {
  ContextForConversationMessageList,
  useControllerForConversationMessageList,
} from '@/(server)/controller/space/chapter/chat/conversation/message/list';
import {
  ContextForChapterChatList,
  useControllerForChapterChatList,
} from '@/(server)/controller/space/chapter/chat/list';
import {
  ContextForChatMemberList,
  useControllerForChatMemberList,
} from '@/(server)/controller/space/chapter/chat/member/list';
import {
  ContextForSpaceChapterList,
  useControllerForSpaceChapterList,
} from '@/(server)/controller/space/chapter/list';
import {
  ContextForSpaceMain,
  useControllerForSpaceMain,
} from '@/(server)/controller/space/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalSpace } from '@/logic/store/space/main';
import { useGlobalUser } from '@/logic/store/user/main';
import isAstralAuth from '@/utils/isAuth';
import { createContext, useEffect, useState } from 'react';
import { ChatRole } from './data';
import { SpaceIdeaModals } from './modal/controller/main';
import { SpaceIdeaView } from './view/main';

interface Controller {
  role: string;
  setRole: (role: string) => void;
}

export const ContextForChat = createContext<Controller>({} as Controller);

function Page({ params }: { params: { id: string } }) {
  const setSpace = useGlobalSpace((state) => state.setSpace);
  const loggedInUser = useGlobalUser((state) => state.user);
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
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForChat.Provider value={chatContext}>
        <ContextForSpaceMain.Provider value={spaceMainController}>
          <ContextForSpaceChapterList.Provider value={chapterListController}>
            <ContextForChapterChatList.Provider value={chatListController}>
              <ContextForChatMemberList.Provider
                value={chatMemberListController}
              >
                <ContextForChatConversationList.Provider
                  value={conversationListController}
                >
                  <ContextForConversationMessageList.Provider
                    value={messageListController}
                  >
                    <SpaceIdeaModals>
                      <SpaceIdeaView />
                    </SpaceIdeaModals>
                  </ContextForConversationMessageList.Provider>
                </ContextForChatConversationList.Provider>
              </ContextForChatMemberList.Provider>
            </ContextForChapterChatList.Provider>
          </ContextForSpaceChapterList.Provider>
        </ContextForSpaceMain.Provider>
      </ContextForChat.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default isAstralAuth(Page);
