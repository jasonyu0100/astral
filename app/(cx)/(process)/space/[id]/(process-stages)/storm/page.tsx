'use client';
import { StormView } from './view';
import {
  ChaptersHandlerContext,
  useChaptersHandler,
} from '@/(logic)/internal/handler/chapters/main';
import {
  ChatsHandlerContext,
  useChatsHandler,
} from '@/(logic)/internal/handler/storm/chats/main';
import insideVerses from '@/(logic)/utils/isAuth';
import { createContext, useEffect } from 'react';
import {
  MessagesHandlerContext,
  useMessagesHandler,
} from '@/(logic)/internal/handler/storm/messages/main';
import { useGlobalSpace } from '@/(logic)/internal/store/space/main';
import { useSpaceHandler } from '@/(logic)/internal/handler/spaces/space/main';
import {
  StormModalContext,
  useStormModal,
} from '../../../../../../(modals)/(process)/storm-modal/main';
import { StormModalView } from '@/(modals)/(process)/storm-modal/view';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';

interface StormContextObj {}

export const StormContext = createContext<StormContextObj>(
  {} as StormContextObj,
);

function Page({ params }: { params: { id: string } }) {
  const setSpace = useGlobalSpace((state) => state.setSpace);
  const user = useGlobalUser((state) => state.user);
  const { space } = useSpaceHandler(params.id);
  const chaptersHandler = useChaptersHandler(params.id);
  const chatsHandler = useChatsHandler(chaptersHandler.chapterId);
  const messagesHandler = useMessagesHandler(chatsHandler.chatId, user.id);

  useEffect(() => {
    if (space && space?.id) {
      setSpace(space);
    }
  }, [space]);

  const context: StormContextObj = {};
  const modalContext = useStormModal();

  return (
    <StormModalContext.Provider value={modalContext}>
      <ChaptersHandlerContext.Provider value={chaptersHandler}>
        <ChatsHandlerContext.Provider value={chatsHandler}>
          <MessagesHandlerContext.Provider value={messagesHandler}>
            <StormModalView />
            <StormContext.Provider value={context}>
              <StormView />
            </StormContext.Provider>
          </MessagesHandlerContext.Provider>
        </ChatsHandlerContext.Provider>
      </ChaptersHandlerContext.Provider>
    </StormModalContext.Provider>
  );
}

export default insideVerses(Page);
