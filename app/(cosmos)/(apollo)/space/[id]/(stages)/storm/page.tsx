'use client';
import { StormView } from './view';
import { ChatObj } from '@/tables/storm/chat/main';
import { MessageObj } from '@/tables/storm/chat/message/main';
import { ChapterObj } from '@/tables/space/chapter/main';
import { ChapterHandler, useChapters } from '@/(cosmos)/handler/chapters/main';
import { ChatHandler, useChats } from '@/(cosmos)/handler/chats/main';
import insideCosmos from '@/utils/isAuth';
import { createContext } from 'react';
import { MessageHandler, useMessages } from '@/(cosmos)/handler/messages/main';

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
  messageHandler: MessageHandler
}

export const StormContext = createContext<StormContextObj>(
  {} as StormContextObj,
);

function Page({ params }: { params: { id: string } }) {
  const { chapter, chapters, chapterId, _chapterHandler } = useChapters(
    params.id,
  );
  const { chat, chatId, chats, _chatHandler } = useChats(chapterId);
  const { messages, _messageHandler } = useMessages(chatId);

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
    messageHandler: _messageHandler
  };

  return (
    <StormContext.Provider value={context}>
      <StormView />
    </StormContext.Provider>
  );
}

export default insideCosmos(Page);
