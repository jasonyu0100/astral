"use client";
import { useState } from "react";
import { StormView } from "./view";
import { StormMessageObj } from "./model/point/chat/message/main";
import { stormModel } from "./model/main";
import { processModel } from "../../model/main";
import { ProcessStepObj } from "../../model/process/step/main";
import { StormChatObj } from "./model/point/chat/main";

export default function Page() {
  const [steps, changeSteps] = useState<ProcessStepObj[]>(
    processModel.process.steps.example
  );
  const [stepId, changeStepId] = useState<string>(steps.at(0)?.id || "");
  const [chats, changeChats] = useState<StormChatObj[]>(
    steps.at(0)?.points.stormPoint.chats || []
  );
  const [chatId, changeChatId] = useState<string>(chats?.at(0)?.id || "");
  const [messages, changeMessages] = useState<StormMessageObj[]>(
    stormModel.points.point.chats.chat.messages.example
  );

  const serialize = (obj: any) => JSON.parse(JSON.stringify(obj));

  const syncHandler = {
    getCurrentStep: (steps: ProcessStepObj[]) =>
      steps.filter((step) => step.id === stepId).at(0),
    getCurrentChat: (chats: StormChatObj[]) =>
      chats.filter((chat) => chat.id === chatId).at(0),
    syncBetweenSteps: () => {
      const currentStep: ProcessStepObj = serialize(
        syncHandler.getCurrentStep(steps)
      );
      if (currentStep) {
        const currentChat = serialize(syncHandler.getCurrentChat(chats));
        if (currentChat) {
          currentChat.messages = serialize(messages);
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
      const currentChat = serialize(syncHandler.getCurrentChat(chats));
      if (currentChat) {
        currentChat.messages = serialize(messages);
        changeChats((prev) =>
          prev.map((chat) => (chat.id === chatId ? currentChat : chat))
        );
      }
    },
  };

  const stepHandler = {
    addStep: (step: ProcessStepObj) => {
      syncHandler.syncBetweenSteps();
      changeSteps((prev) => [...prev, step]);
      changeStepId(step.id);
      changeChatId(step.points.stormPoint.chats.at(0)?.id || "");
      changeMessages(step.points.stormPoint.chats.at(0)?.messages || []);
    },
    goToStep: (step: ProcessStepObj) => {
      syncHandler.syncBetweenSteps();
      changeStepId(step.id);
      changeChatId(step.points.stormPoint.chats.at(0)?.id || "");
      changeMessages(step.points.stormPoint.chats.at(0)?.messages || []);
    },
  };

  const chatHandler = {
    selectChat: (chat: StormChatObj, step: ProcessStepObj) => {
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
    addChatToChats: (chat: StormChatObj, step: ProcessStepObj) => {
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
          ...stormModel.points.point.chats.chat.messages.message.example,
          source: "You",
          message: message,
        },
      ]);
      changeMessages((prev) => [
        ...prev,
        {
          ...stormModel.points.point.chats.chat.messages.message.example,
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
