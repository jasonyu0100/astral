"use client";
import { StormView } from "./view";
import { ChatObj } from "@/tables/storm/chat/main";
import { MessageObj } from "@/tables/storm/chat/message/main";
import { ChapterObj } from "@/tables/space/chapter/main";
import { ChapterHandler, useChapters } from "../../handler/chapters/main";
import { ChatHandler, useChat } from "../../handler/chats/main";
import isAuth from "@/utils/isAuth";
import { createContext } from "react";

export interface StormContextObj {
  chapter?: ChapterObj;
  chapters: ChapterObj[];
  chapterId: string;
  chat?: ChatObj;
  chats: ChatObj[];
  chatId: string;
  messages: MessageObj[];
  chapterHandler: ChapterHandler | any;
  chatHandler: ChatHandler | any;
}

export const StormContext = createContext<StormContextObj>({
  chapters: [],
  chapterId: "",
  chats: [],
  chatId: "",
  messages: [],
  chapterHandler: undefined,
  chatHandler: undefined,
  chapter: undefined,
  chat: undefined,
});

function Page() {
  const { chapter, chapters, chapterId, _chapterHandler } = useChapters();
  const { chat, chatId, chats, messages, _chatHandler } = useChat();

  const chapterHandler: ChapterHandler = {
    addChapter: (chapter: ChapterObj) => {
      _chapterHandler.addChapter(chapter);
      _chatHandler.updateChats([]);
      return chapter;
    },
    goToChapter: (chapter: ChapterObj) => {
      _chapterHandler.goToChapter(chapter);
      _chatHandler.updateChats([]);
      return chapter;
    },
    goToPrevChapter: () => {
      const chapter = _chapterHandler.goToPrevChapter();
      _chatHandler.updateChats([]);
      return chapter;
    },
    goToNextChapter: () => {
      const chapter = _chapterHandler.goToNextChapter();
      _chatHandler.updateChats([]);
      return chapter;
    },
  };

  const chatHandler: ChatHandler = {
    updateChats: (chats: ChatObj[]) => {
      _chatHandler.updateChats(chats);
      return chats;
    },
    updateChat: (chat: ChatObj) => {
      _chatHandler.updateChat(chat);
      return chat;
    },
    selectChat: (chat: ChatObj) => {
      _chatHandler.selectChat(chat);
      return chat;
    },
    addChat: (chat: ChatObj) => {
      _chatHandler.addChat(chat);
      return chat;
    },
    sendMessage: (text: string) => {
      const message = _chatHandler.sendMessage(text);
      return message;
    },
  };

  const context: StormContextObj = {
    chapter,
    chapters,
    chapterId,
    chat,
    chats,
    chatId,
    messages,
    chapterHandler,
    chatHandler,
  };

  return (
    <StormContext.Provider value={context}>
      <StormView />
    </StormContext.Provider>
  );
}

export default isAuth(Page);
