"use client";
import { createContext, useState } from "react";
import { StormView } from "./view";
import { StormMessageObj } from "./model/point/chat/message/main";
import { stormModel } from "./model/main";
import { processModel } from "../../model/main";
import { ProcessStepObj } from "../../model/process/step/main";

export default function Page() {
  const [steps, changeSteps] = useState(processModel.process.steps.example);
  const [context, changeContext] = useState(
    processModel.process.context.example
  );
  const [messages, changeMessages] = useState<StormMessageObj[]>(
    stormModel.points.point.chats.chat.messages.example
  );

  const addStep = (step: ProcessStepObj) => {
    changeSteps((prev) => [...prev, step]);
  };

  const updateStep = (newStep: ProcessStepObj) => {
    changeSteps((prev) =>
      prev.map((step) => (step.id === newStep.id ? newStep : step))
    );
  };

  const updateContext = (payload: Object) => {
    changeContext((prev) => {
      return { ...prev, ...payload };
    });
  };

  const sendMessage = (message: string) => {
    changeMessages((prev) => [
      ...prev,
      stormModel.points.point.chats.chat.messages.message.example,
    ]);
    changeMessages((prev) => [
      ...prev,
      stormModel.points.point.chats.chat.messages.message.example,
    ]);
    alert(`Sent Message ${message}`);
  };

  return (
    <StormContextStepUpdate.Provider
      value={{
        addStep,
        updateStep,
      }}
    >
      <StormContextContextUpdate.Provider
        value={{
          updateContext,
        }}
      >
        <StormView
          messages={messages}
          sendMessage={sendMessage}
          steps={steps}
          context={context}
        />
      </StormContextContextUpdate.Provider>
    </StormContextStepUpdate.Provider>
  );
}

export interface StormContextStepUpdateTypes {
  addStep: (step: ProcessStepObj) => void;
  updateStep: (newStep: ProcessStepObj) => void;
}

export const StormContextStepUpdate =
  createContext<StormContextStepUpdateTypes>({
    addStep: () => {},
    updateStep: () => {},
  });

export interface StormContextContextUpdateTypes {
  updateContext: (payload: Object) => void;
}

export const StormContextContextUpdate =
  createContext<StormContextContextUpdateTypes>({
    updateContext: () => {},
  });
