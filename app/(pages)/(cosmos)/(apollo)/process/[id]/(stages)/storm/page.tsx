"use client";
import { useState } from "react";
import { StormView } from "./view";
import { MessageObj } from "../../../../../tables/storm/chat/message/main";
import { stormTable } from "../../../../../tables/storm/table";
import { processModel } from "../../../../../tables/model/main";
import { ChapterObj } from "../../../../../tables/space/chapter/main";
import { ChatObj } from "../../../../../tables/storm/chat/main";

export interface ChatHandler {
  selectChat: (chat: ChatObj, step: ChapterObj) => void;
  sendChatMessage: (message: string) => void;
  addChatToChats: (chat: ChatObj, step: ChapterObj) => void;
}
export interface StepHandler {
  addStep: (step: ChapterObj) => void;
  goToStep: (step: ChapterObj) => void;
}
export interface StormViewProps {
  steps: ChapterObj[];
  stepId: string;
  chats: ChatObj[];
  chatId: string;
  messages: MessageObj[];
  stepHandler: StepHandler;
  chatHandler: ChatHandler;
}

export default function Page() {
  const [steps, changeSteps] = useState<ChapterObj[]>(
    processModel.process.steps.example
  );
  const [stepId, changeStepId] = useState<string>(steps.at(0)?.id || "");
  const [chats, changeChats] = useState<ChatObj[]>(
    steps.at(0)?.points.stormPoint.chats || []
  );
  const [chatId, changeChatId] = useState<string>(chats?.at(0)?.id || "");
  const [messages, changeMessages] = useState<MessageObj[]>(
    stormTable.points.point.chats.chat.messages.example
  );

  const syncHandler = {
    serialize: (obj: any) => JSON.parse(JSON.stringify(obj)),
    getCurrentStep: (steps: ChapterObj[]) =>
      steps.filter((step) => step.id === stepId).at(0),
    getCurrentChat: (chats: ChatObj[]) =>
      chats.filter((chat) => chat.id === chatId).at(0),
    syncBetweenSteps: () => {
      const currentStep: ChapterObj = syncHandler.serialize(
        syncHandler.getCurrentStep(steps)
      );
      if (currentStep) {
        const currentChat = syncHandler.serialize(
          syncHandler.getCurrentChat(chats)
        );
        if (currentChat) {
          currentChat.messages = syncHandler.serialize(messages);
          currentStep.points.stormPoint.chats = chats.map((chat) =>
            chat.id === chatId ? currentChat : chat
          );
        }
        changeSteps((prev) =>
          prev.map((step) => (step.id === stepId ? currentStep : step))
        );
      }
    },
    syncWithinStep: () => {
      const currentChat = syncHandler.serialize(
        syncHandler.getCurrentChat(chats)
      );
      if (currentChat) {
        currentChat.messages = syncHandler.serialize(messages);
        changeChats((prev) =>
          prev.map((chat) => (chat.id === chatId ? currentChat : chat))
        );
      }
    },
  };

  const stepHandler: StepHandler = {
    addStep: (step: ChapterObj) => {
      syncHandler.syncBetweenSteps();
      changeSteps((prev) => [...prev, step]);
      changeStepId(step.id);
      changeChatId(step.points.stormPoint.chats.at(0)?.id || "");
      changeMessages(step.points.stormPoint.chats.at(0)?.messages || []);
    },
    goToStep: (step: ChapterObj) => {
      syncHandler.syncBetweenSteps();
      changeStepId(step.id);
      changeChatId(step.points.stormPoint.chats.at(0)?.id || "");
      changeMessages(step.points.stormPoint.chats.at(0)?.messages || []);
    },
  };

  const chatHandler: ChatHandler = {
    selectChat: (chat: ChatObj, step: ChapterObj) => {
      if (step.id !== stepId) {
        syncHandler.syncBetweenSteps();
        changeStepId(step.id);
        changeChats(step.points.stormPoint.chats);
        changeChatId(chat.id);
        changeMessages(chat.messages);
      } else {
        syncHandler.syncWithinStep();
        changeChatId(chat.id);
        changeMessages(chat.messages);
      }
    },
    addChatToChats: (chat: ChatObj, step: ChapterObj) => {
      if (step.id !== stepId) {
        syncHandler.syncBetweenSteps();
        changeStepId(step.id);
        changeChats([...step.points.stormPoint.chats, chat]);
        changeChatId(chat.id);
        changeMessages(chat.messages);
      } else {
        syncHandler.syncWithinStep();
        changeChats((prev) => [...prev, chat]);
        changeChatId(chat.id);
        changeMessages(chat.messages);
      }
    },
    sendChatMessage: (message: string) => {
      changeMessages((prev) => [
        ...prev,
        {
          ...stormTable.points.point.chats.chat.messages.message.example,
          source: "You",
          message: message,
        },
      ]);
      changeMessages((prev) => [
        ...prev,
        {
          ...stormTable.points.point.chats.chat.messages.message.example,
          source: "gpt-4",
          message: "Hello Back",
        },
      ]);
    },
  };

  return (
    <StormView
      steps={steps}
      stepId={stepId}
      chats={chats}
      chatId={chatId}
      messages={messages}
      stepHandler={stepHandler}
      chatHandler={chatHandler}
    />
  );
}
