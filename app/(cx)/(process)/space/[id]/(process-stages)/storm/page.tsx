'use client';
import { StormView } from './view';
import { ChatObj } from '@/(logic)/internal/data/infra/model/storm/chat/main';
import { MessageObj } from '@/(logic)/internal/data/infra/model/storm/chat/message/main';
import { ChapterObj } from '@/(logic)/internal/data/infra/model/space/chapter/main';
import {
  ChapterActions,
  useChaptersHandler,
} from '@/(logic)/internal/handler/chapters/main';
import {
  ChatActions,
  useChatsHandler,
} from '@/(logic)/internal/handler/storm/chats/main';
import insideCosmos from '@/(logic)/utils/isAuth';
import { createContext, useEffect } from 'react';
import {
  MessageActions,
  useMessagesHandler,
} from '@/(logic)/internal/handler/storm/messages/main';
import { useGlobalSpace } from '@/(logic)/internal/data/infra/store/space/main';
import { useSpaceHandler } from '@/(logic)/internal/handler/spaces/space/main';
import {
  StormModalContext,
  useStormModal,
} from '../../../../../../(modals)/(process)/storm-modal/main';
import { StormModalView } from '@/(modals)/(process)/storm-modal/view';
import { useGlobalUser } from '@/(logic)/internal/data/infra/store/user/main';

interface StormContextObj {
  chapter?: ChapterObj;
  chapters: ChapterObj[];
  chapterId: string;
  chat?: ChatObj;
  chats: ChatObj[];
  chatId: string;
  messages: MessageObj[];
  chapterHandler: ChapterActions;
  chatHandler: ChatActions;
  messageHandler: MessageActions;
}

export const StormContext = createContext<StormContextObj>(
  {} as StormContextObj,
);

function Page({ params }: { params: { id: string } }) {
  const setSpace = useGlobalSpace((state) => state.setSpace);
  const user = useGlobalUser((state) => state.user);
  const { space } = useSpaceHandler(params.id);
  const { chapter, chapters, chapterId, chapterActions: _chapterHandler } = useChaptersHandler(
    params.id,
  );
  const { chat, chatId, chats, _chatHandler } = useChatsHandler(chapterId);
  const { messages, _messageHandler } = useMessagesHandler(chatId, user.id);

  useEffect(() => {
    if (space && space?.id) {
      setSpace(space);
    }
  }, [space]);

  const context: StormContextObj = {
    chapter,
    chapters,
    chapterId,
    chat,
    chats,
    chatId,
    messages,
    chapterHandler: _chapterHandler,
    chatHandler: _chatHandler,
    messageHandler: _messageHandler,
  };

  const modalContext = useStormModal();

  return (
    <StormModalContext.Provider value={modalContext}>
      <StormModalView />
      <StormContext.Provider value={context}>
        <StormView />
      </StormContext.Provider>
    </StormModalContext.Provider>
  );
}

export default insideCosmos(Page);
