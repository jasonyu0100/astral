'use client';
import { StormView } from './(storm-epic)/view';
import {
  ChaptersHandlerContext,
  useChaptersHandler,
} from '@/(lgx)/internal/handler/chapters/main';
import {
  ChatsHandlerContext,
  useChatsHandler,
} from '@/(lgx)/internal/handler/storm/chats/main';
import insideVerse from '@/(lgx)/utils/isAuth';
import { createContext, useEffect } from 'react';
import {
  MessagesHandlerContext,
  useMessagesHandler,
} from '@/(lgx)/internal/handler/storm/messages/main';
import { useGlobalSpace } from '@/(lgx)/internal/store/space/main';
import { useSpaceHandler } from '@/(lgx)/internal/handler/spaces/space/main';
import {
  StormModalContext,
  useStormModal,
} from '../../../../(modals)/storm-modal/main';
import { StormModalView } from '@/(cx)/(studio)/(modals)/storm-modal/view';
import { useGlobalUser } from '@/(lgx)/internal/store/user/main';

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

export default insideVerse(Page);
