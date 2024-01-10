"use client";
import { useState } from "react";
import { StormView } from "./view";
import { ChatObj } from "@/(pages)/(cosmos)/tables/storm/chat/main";
import { MessageObj } from "@/(pages)/(cosmos)/tables/storm/chat/message/main";
import { stormTable } from "@/(pages)/(cosmos)/tables/storm/table";
import { spaceTable } from "@/(pages)/(cosmos)/tables/space/table";
import { ChapterObj } from "@/(pages)/(cosmos)/tables/space/chapter/main";

export interface ChatHandler {
  selectChat: (chat: ChatObj, step: ChapterObj) => void;
  sendChatMessage: (message: string) => void;
  addChatToChats: (chat: ChatObj, step: ChapterObj) => void;
}
export interface ChapterHandler {
  addChapter: (step: ChapterObj) => void;
  goToChapter: (step: ChapterObj) => void;
}
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
  const [chapters, changeChapters] = useState<ChapterObj[]>(
    spaceTable.chapter.examples
  );
  const [chapterId, changeChapterId] = useState<string>(
    chapters.at(0)?.id || ""
  );
  const [chats, changeChats] = useState<ChatObj[]>(stormTable.chat.examples);
  const [chatId, changeChatId] = useState<string>(chats?.at(0)?.id || "");
  const [messages, changeMessages] = useState<MessageObj[]>(
    chats?.at(0)?.messages || []
  );

  // const syncHandler = {
  //   serialize: (obj: any) => JSON.parse(JSON.stringify(obj)),
  //   getCurrentStep: (steps: ChapterObj[]) =>
  //     steps.filter((step) => step.id === chapterId).at(0),
  //   getCurrentChat: (chats: ChatObj[]) =>
  //     chats.filter((chat) => chat.id === chatId).at(0),
  //   syncBetweenSteps: () => {
  //     const currentStep: ChapterObj = syncHandler.serialize(
  //       syncHandler.getCurrentStep(chapters)
  //     );
  //     if (currentStep) {
  //       const currentChat = syncHandler.serialize(
  //         syncHandler.getCurrentChat(chats)
  //       );
  //       if (currentChat) {
  //         currentChat.messages = syncHandler.serialize(messages);
  //         currentStep.points.stormPoint.chats = chats.map((chat) =>
  //           chat.id === chatId ? currentChat : chat
  //         );
  //       }
  //       changeChapters((prev) =>
  //         prev.map((step) => (step.id === chapterId ? currentStep : step))
  //       );
  //     }
  //   },
  //   syncWithinStep: () => {
  //     const currentChat = syncHandler.serialize(
  //       syncHandler.getCurrentChat(chats)
  //     );
  //     if (currentChat) {
  //       currentChat.messages = syncHandler.serialize(messages);
  //       changeChats((prev) =>
  //         prev.map((chat) => (chat.id === chatId ? currentChat : chat))
  //       );
  //     }
  //   },
  // };

  const stepHandler: ChapterHandler = {
    addChapter: (step: ChapterObj) => {
      // syncHandler.syncBetweenSteps();
      changeChapters((prev) => [...prev, step]);
      changeChapterId(step.id);
      const chats = stormTable.chat.examples;
      changeChatId(chats.at(0)?.id || "");
      changeMessages(chats.at(0)?.messages || []);
    },
    goToChapter: (step: ChapterObj) => {
      // syncHandler.syncBetweenSteps();
      changeChapterId(step.id);
      const chats = stormTable.chat.examples;
      changeChatId(chats.at(0)?.id || "");
      changeMessages(chats.at(0)?.messages || []);
    },
  };

  const chatHandler: ChatHandler = {
    selectChat: (chat: ChatObj, chapter: ChapterObj) => {
      if (chapter.id !== chapterId) {
        // syncHandler.syncBetweenSteps();
        changeChapterId(chapter.id);
        const chats = stormTable.chat.examples;
        changeChats(chats);
        changeChatId(chat.id);
        changeMessages(chat.messages);
      } else {
        // syncHandler.syncWithinStep();
        changeChatId(chat.id);
        changeMessages(chat.messages);
      }
    },
    addChatToChats: (chat: ChatObj, step: ChapterObj) => {
      if (step.id !== chapterId) {
        // syncHandler.syncBetweenSteps();
        changeChapterId(step.id);
        const chats = stormTable.chat.examples;
        changeChats([...chats, chat]);
        changeChatId(chat.id);
        changeMessages(chat.messages);
      } else {
        // syncHandler.syncWithinStep();
        changeChats((prev) => [...prev, chat]);
        changeChatId(chat.id);
        changeMessages(chat.messages);
      }
    },
    sendChatMessage: (message: string) => {
      changeMessages((prev) => [
        ...prev,
        {
          ...stormTable.message.example,
          source: "You",
          message: message,
        },
      ]);
      changeMessages((prev) => [
        ...prev,
        {
          ...stormTable.message.example,
          source: "gpt-4",
          message: "Hello Back",
        },
      ]);
    },
  };

  return (
    <StormView
      chapters={chapters}
      chapterId={chapterId}
      chats={chats}
      chatId={chatId}
      messages={messages}
      chapterHandler={stepHandler}
      chatHandler={chatHandler}
    />
  );
}
