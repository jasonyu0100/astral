'use client';
import { StormView } from './view';
import { ChatObj } from '@/tables/storm/chat/main';
import { MessageObj } from '@/tables/storm/chat/message/main';
import { ChapterObj } from '@/tables/space/chapter/main';
import { ChapterHandler, useChapters } from '@/(cosmos)/handler/chapters/main';
import { ChatHandler, useChats } from '@/(cosmos)/handler/chats/main';
import insideCosmos from '@/utils/isAuth';
import { createContext, useEffect } from 'react';
import { MessageHandler, useMessages } from '@/(cosmos)/handler/messages/main';
import { useGlobalSpace } from '@/state/space/main';
import { useSpace } from '@/(cosmos)/handler/space/main';
import {
  StormModalContext,
  useStormModalContext,
} from './storm-epic/modal/main';

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
  const [state, actions] = useGlobalSpace();
  const { space } = useSpace(params.id);
  const { chapter, chapters, chapterId, _chapterHandler } = useChapters(
    params.id,
  );
  const { chat, chatId, chats, _chatHandler } = useChats(chapterId);
  const { messages, _messageHandler } = useMessages(chatId);

  useEffect(() => {
    if (space) {
      if (space.id) {
        actions.setSpace(space);
      }
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

  const modalContext = useStormModalContext();

  return (
    <StormModalContext.Provider value={modalContext}>
      <StormContext.Provider value={context}>
        <StormView />
      </StormContext.Provider>
    </StormModalContext.Provider>
  );
}

export default insideCosmos(Page);
