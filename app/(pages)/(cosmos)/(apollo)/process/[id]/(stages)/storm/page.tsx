"use client";
import { StormView } from "./view";
import { ChatObj } from "@/(pages)/(cosmos)/tables/storm/chat/main";
import { MessageObj } from "@/(pages)/(cosmos)/tables/storm/chat/message/main";
import { ChapterObj } from "@/(pages)/(cosmos)/tables/space/chapter/main";
import { ChapterHandler, useChapters } from "../../handler/chapters/main";
import { ChatHandler, useChat } from "../../handler/chats/main";

export interface StormViewProps {
  chapters: ChapterObj[];
  chapterId: string;
  chats: ChatObj[];
  chatId: string;
  messages: MessageObj[];
  chapterHandler: ChapterHandler;
  chatHandler: ChatHandler;
}

export default function Page() {
  const { chapters, chapterId, _chapterHandler } = useChapters();
  const { chatId, chats, messages, _chatHandler } = useChat();

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

  return (
    <StormView
      chapters={chapters}
      chapterId={chapterId}
      chats={chats}
      chatId={chatId}
      messages={messages}
      chapterHandler={chapterHandler}
      chatHandler={chatHandler}
    />
  );
}
