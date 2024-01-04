"use client";
import { StormHeader } from "./storm-epic/main/header/main";
import { StormChatBody } from "./storm-epic/main/chat/main";
import { StormMessageInput } from "./storm-epic/main/input/main";
import { StormSidePanel } from "./storm-epic/sidebar/main";
import { StormWrapper } from "./storm-epic/main";
import { StormControllerMain } from "./storm-epic/main/main";
import { StormYouChatMessage } from "./storm-epic/main/chat/message/you/main";
import { StormPartnerChatMessage } from "./storm-epic/main/chat/message/them/main";
import { StormMessageInputLeft } from "./storm-epic/main/input/left/main";
import { StormMessageInputText } from "./storm-epic/main/input/text/main";
import { StormMessageInputRight } from "./storm-epic/main/input/right/main";
import { StormMessageInputSend } from "./storm-epic/main/input/right/send/main";
import { StormMessageInputVoice } from "./storm-epic/main/input/right/voice/main";
import { useState } from "react";
import { SidePanelColumn } from "./storm-epic/sidebar/steps/main";
import { StormSidePanelStepSection } from "./storm-epic/sidebar/steps/step/main";
import { StormChatMessages } from "./storm-epic/main/chat/messages/main";
import { StormMessageObj } from "./model/point/chat/message/main";
import { ProcessStepObj } from "../../model/process/step/main";
import { StormChatObj } from "./model/point/chat/main";
import { processModel } from "../../model/main";

interface StormViewProps {
  steps: ProcessStepObj[];
  stepId: string;
  chats: StormChatObj[];
  chatId: string;
  messages: StormMessageObj[];
  stepHandler: {
    addStep: (step: ProcessStepObj) => void;
    goToStep: (step: ProcessStepObj) => void;
  };
  chatHandler: {
    selectChat: (chat: StormChatObj, step: ProcessStepObj) => void;
    sendMessage: (message: string) => void;
    addChat: (chat: StormChatObj) => void;
  };
}

export function StormView({
  steps,
  stepId,
  chats,
  chatId,
  messages,
  stepHandler,
  chatHandler,
}: StormViewProps) {
  const [inputMessage, changeInputMessage] = useState("");

  return (
    <StormWrapper>
      <StormControllerMain>
        <StormChatBody>
          <StormHeader />
          <StormChatMessages>
            {messages.map((message) =>
              message.source === "You" ? (
                <StormYouChatMessage>{message.message}</StormYouChatMessage>
              ) : (
                <StormPartnerChatMessage>
                  {message.message}
                </StormPartnerChatMessage>
              )
            )}
          </StormChatMessages>
        </StormChatBody>
        <StormMessageInput>
          <StormMessageInputLeft />
          <StormMessageInputText
            onChange={(e) => changeInputMessage(e.target.value)}
            value={inputMessage}
          />
          <StormMessageInputRight>
            <StormMessageInputVoice />
            <StormMessageInputSend
              onClick={(e) => {
                chatHandler.sendMessage(inputMessage);
                changeInputMessage("");
              }}
            />
          </StormMessageInputRight>
        </StormMessageInput>
      </StormControllerMain>
      <StormSidePanel>
        <SidePanelColumn>
          {steps.map((step) => (
            <StormSidePanelStepSection
              selectChat={chatHandler.selectChat}
              step={step}
              chatId={chatId}
              chats={
                step.id === stepId ? chats : step.points.stormPoint.chats
              }
              active={step.id === stepId}
              addChat={chatHandler.addChat}
            />
          ))}
          <div
            className="w-full"
            onClick={() =>
              stepHandler.addStep({
                ...processModel.process.steps.step.example,
                id: new Date().toISOString(),
              })
            }
          >
            <p className="text-slate-500 font-extraBold text-xl">Add Step</p>
          </div>
        </SidePanelColumn>
      </StormSidePanel>
    </StormWrapper>
  );
}
