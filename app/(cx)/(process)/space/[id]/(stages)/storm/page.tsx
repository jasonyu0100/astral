'use client';
import { StormView } from './view';
import { ChatObj } from '@/(logic)/internal/data/infra/model/storm/chat/main';
import { MessageObj } from '@/(logic)/internal/data/infra/model/storm/chat/message/main';
import { ChapterObj } from '@/(logic)/internal/data/infra/model/space/chapter/main';
import {
  ChapterHandler,
  useChapters,
} from '@/(logic)/internal/handler/chapters/main';
import { ChatHandler, useChats } from '@/(logic)/internal/handler/storm/chats/main';
import insideCosmos from '@/(logic)/utils/isAuth';
import { createContext, useEffect } from 'react';
import {
  MessageHandler,
  useMessages,
} from '@/(logic)/internal/handler/storm/messages/main';
import { useGlobalSpace } from '@/(logic)/internal/data/infra/store/space/main';
import { useSpace } from '@/(logic)/internal/handler/space/main';
import {
  StormModalContext,
  useStormModal,
} from '../../../../../../(modals)/storm-modal/main';
import { StormModalView } from '@/(modals)/storm-modal/view';

interface StormContextObj {
  chapter?: ChapterObj;
  chapters: ChapterObj[];
  chapterId: string;
  chat?: ChatObj;
  chats: ChatObj[];
  chatId: string;
  messages: MessageObj[];
  chapterHandler: ChapterHandler;
  chatHandler: ChatHandler;
  messageHandler: MessageHandler;
}

export const StormContext = createContext<StormContextObj>(
  {} as StormContextObj,
);

function Page({ params }: { params: { id: string } }) {
  const setSpace = useGlobalSpace((state) => state.setSpace);
  const { space } = useSpace(params.id);
  const { chapter, chapters, chapterId, _chapterHandler } = useChapters(
    params.id,
  );
  const { chat, chatId, chats, _chatHandler } = useChats(chapterId);
  const { messages, _messageHandler } = useMessages(chatId);

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
