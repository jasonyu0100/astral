"use client";
import { useState } from "react";
import { StormView } from "./view";
import { StormMessageObj } from "./model/point/chat/message/main";
import { stormModel } from "./model/main";
import { processModel } from "../../model/main";
import { ProcessStepObj } from "../../model/process/step/main";
import { StormChatObj } from "./model/point/chat/main";

export default function Page() {
  const [steps, changeSteps] = useState(processModel.process.steps.example);
  const [stepId, changeStepId] = useState<string>(steps.at(0)?.id || "");
  const [chats, changeChats] = useState(stormModel.points.point.chats.example);
  const [chatId, changeChatId] = useState<string>(chats.at(0)?.id || "");
  const [messages, changeMessages] = useState<StormMessageObj[]>(
    stormModel.points.point.chats.chat.messages.example
  );

  const syncHandler = {
    getCurrentStep: () => {
      for (let step of steps) {
        if (step.id === stepId) return step;
      }
    },
    getCurrentChat: () => {
      for (let chat of chats) {
        if (chat.id === chatId) return chat;
      }
    },
    syncStepWithChats: () => {
      const currentStep: ProcessStepObj = JSON.parse(
        JSON.stringify(syncHandler.getCurrentStep())
      );
      if (currentStep) {
        currentStep.points.stormPoint.chats = chats;
        const newStep = currentStep;
        changeSteps((prev) =>
          prev.map((step) => (step.id === stepId ? newStep : step))
        );
      }
    },
    syncChatWithMessages: () => {
      const currentChat: StormChatObj = JSON.parse(
        JSON.stringify(syncHandler.getCurrentChat())
      );
      if (currentChat) {
        currentChat.messages = messages;
        const newChat = currentChat;
        changeChats((prev) =>
          prev.map((chat) => (chat.id === chatId ? newChat : chat))
        );
      }
    },
  };

  const stepHandler = {
    addStep: (step: ProcessStepObj) => {
      syncHandler.syncStepWithChats();
      syncHandler.syncChatWithMessages();
      changeSteps((prev) => [...prev, step]);
      changeStepId(step.id);
      changeChats(step.points.stormPoint.chats);
      changeChatId(chats.at(0)?.id || "");
      changeMessages(chats.at(0)?.messages || []);
    },
    goToStep: (step: ProcessStepObj) => {
      syncHandler.syncStepWithChats();
      syncHandler.syncChatWithMessages();
      changeStepId(step.id);
      changeChats(step.points.stormPoint.chats);
      changeChatId(chats.at(0)?.id || "");
      changeMessages(chats.at(0)?.messages || []);
    },
  };

  const chatHandler = {
    selectChat: (chat: StormChatObj, step: ProcessStepObj) => {
      syncHandler.syncStepWithChats();
      syncHandler.syncChatWithMessages();
      changeStepId(step.id);
      changeChats(step.points.stormPoint.chats);
      changeChatId(chat.id);
      changeMessages(chat.messages);
    },
    sendMessage: (message: string) => {
      changeMessages((prev) => [
        ...prev,
        stormModel.points.point.chats.chat.messages.message.example,
      ]);
      changeMessages((prev) => [
        ...prev,
        stormModel.points.point.chats.chat.messages.message.example,
      ]);
      alert(`Sent Message ${message}`);
    },
    addChat: (chat: StormChatObj, step: ProcessStepObj) => {
      syncHandler.syncStepWithChats();
      syncHandler.syncChatWithMessages();
      changeStepId(step.id);
      changeChats(step.points.stormPoint.chats);
      changeChatId(chat.id);
      changeMessages(chat.messages);
      changeChats((prev) => [...prev, chat]);
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
