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
import { SidePanelColumn } from "./storm-epic/sidebar/column/main";
import { StormSidebarHeader } from "./storm-epic/sidebar/header/main";
import { StormSidePanelStepSection } from "./storm-epic/sidebar/column/step-section/main";
import { StormChatMessages } from "./storm-epic/main/chat/messages/main";
import { StormMessageObj } from "./model/point/chat/message/main";
import { StormSidePanelGeneralSection } from "./storm-epic/sidebar/column/general-section/main";
import { ProcessStepObj } from "../../model/process/step/main";
import { ProcessContextObj } from "../../model/process/context/main";

interface StormViewProps {
  messages: StormMessageObj[];
  steps: ProcessStepObj[];
  context: ProcessContextObj;
  sendMessage: (message: string) => void;
}

export function StormView({
  messages,
  sendMessage,
  steps,
  context,
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
                  sendMessage(inputMessage);
                  changeInputMessage("");
                }}
              />
            </StormMessageInputRight>
          </StormMessageInput>
        </StormControllerMain>
        <StormSidePanel>
          <StormSidebarHeader />
          <SidePanelColumn>
            <StormSidePanelGeneralSection context={context} />
            {steps.map((step) => (
              <StormSidePanelStepSection step={step} />
            ))}
          </SidePanelColumn>
        </StormSidePanel>
      </StormWrapper>
  );
}
