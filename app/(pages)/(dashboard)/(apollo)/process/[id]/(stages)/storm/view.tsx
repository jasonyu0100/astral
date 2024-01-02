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
import { StormSidePanelSection } from "./storm-epic/sidebar/column/section/main";
import { StormSidePanelSectionTitle } from "./storm-epic/sidebar/column/section/title/main";
import { StormSidePanelSectionAdd } from "./storm-epic/sidebar/column/section/add/main";
import { StormSidePanelChat } from "./storm-epic/sidebar/column/section/chat/main";
import { StormChatMessages } from "./storm-epic/main/chat/messages/main";
import { StormMessageObj } from "./model/point/chat/message/main";
import { stormModel } from "./model/main";
import { processModel } from "../../model/main";

interface StormViewProps {
  messages: StormMessageObj[];
  sendMessage: (message: string) => void;
}

export function StormView({ messages, sendMessage }: StormViewProps) {
  const [inputMessage, changeInputMessage] = useState("");
  const [steps, changeSteps] = useState(processModel.process.steps.example);
  const [context, changeContext] = useState(stormModel.context.example);

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
          {steps.map((step) => (
            <>
              <StormSidePanelSection>
                <StormSidePanelSectionTitle>
                  {step.name}
                </StormSidePanelSectionTitle>
                <StormSidePanelSectionAdd />
                {step.points.stormPoint.chats.map((chat) => (
                  <>
                    <StormSidePanelChat>{chat.title}</StormSidePanelChat>
                  </>
                ))}
              </StormSidePanelSection>
            </>
          ))}
          <StormSidePanelSection>
            <StormSidePanelSectionTitle>General</StormSidePanelSectionTitle>
            <StormSidePanelSectionAdd />
            {context.chats.map((chat) => (
              <StormSidePanelChat>{chat.title}</StormSidePanelChat>
            ))}
          </StormSidePanelSection>
        </SidePanelColumn>
      </StormSidePanel>
    </StormWrapper>
  );
}
