"use client";
import StormHeader from "./storm-epic/main/header/main";
import StormChatBody from "./storm-epic/main/chat/main";
import StormMessageInput from "./storm-epic/main/input/main";
import StormSidePanel from "./storm-epic/side-panel/main";
import StormWrapper from "./storm-epic/main";
import StormControllerMain from "./storm-epic/main/main";
import StormYouChatMessage from "./storm-epic/main/chat/message/you/main";
import StormPartnerChatMessage from "./storm-epic/main/chat/message/them/main";
import StormMessageInputLeft from "./storm-epic/main/input/left/main";
import StormMessageInputText from "./storm-epic/main/input/text/main";
import StormMessageInputRight from "./storm-epic/main/input/right/main";
import StormMessageInputSend from "./storm-epic/main/input/right/send/main";
import StormMessageInputVoice from "./storm-epic/main/input/right/voice/main";
import { useState } from "react";
import {
  Message,
  defaultMessages,
  defaultPartnerMessage,
  defaultYouMessage,
} from "./data";
import SidePanelColumn from "./storm-epic/side-panel/column/main";
import SidePanelHeader from "./storm-epic/side-panel/header/main";
import StormSidePanelSection from "./storm-epic/side-panel/column/section/main";
import StormSidePanelSectionTitle from "./storm-epic/side-panel/column/section/title/main";
import StormSidePanelSectionAdd from "./storm-epic/side-panel/column/section/add/main";
import StormSidePanelChat from "./storm-epic/side-panel/column/section/chat/main";
import StormChatMessages from "./storm-epic/main/chat/messages/main";

export default function Page() {
  const [messages, changeMessages] = useState<Message[]>(defaultMessages);
  const [message, changeMessage] = useState("dsadsadsa");

  return (
    <StormWrapper>
      <StormControllerMain>
        <StormChatBody>
          <StormHeader />
          <StormChatMessages>
            <StormPartnerChatMessage>1231231132</StormPartnerChatMessage>
            <StormPartnerChatMessage>1231231132</StormPartnerChatMessage>
            <StormPartnerChatMessage>1231231132</StormPartnerChatMessage>
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
            onChange={(e) => changeMessage(e.target.value)}
            value={message}
          />
          <StormMessageInputRight>
            <StormMessageInputVoice />
            <StormMessageInputSend
              onClick={(e) => {
                changeMessages((prev) => [...prev, defaultYouMessage]);
                changeMessages((prev) => [...prev, defaultPartnerMessage]);
              }}
            />
          </StormMessageInputRight>
        </StormMessageInput>
      </StormControllerMain>
      <StormSidePanel>
        <SidePanelHeader />
        <SidePanelColumn>
          <StormSidePanelSection>
            <StormSidePanelSectionTitle>Today</StormSidePanelSectionTitle>
              <StormSidePanelSectionAdd/>
              <StormSidePanelChat/>
          </StormSidePanelSection>
          <StormSidePanelSection>
            <StormSidePanelSectionTitle>Yesterday</StormSidePanelSectionTitle>
              <StormSidePanelChat/>
              <StormSidePanelChat/>
          </StormSidePanelSection>
          <StormSidePanelSection>
            <StormSidePanelSectionTitle>Last Week</StormSidePanelSectionTitle>
              <StormSidePanelChat/>
              <StormSidePanelChat/>
              <StormSidePanelChat/>
              <StormSidePanelChat/>
              <StormSidePanelChat/>
          </StormSidePanelSection>
        </SidePanelColumn>
      </StormSidePanel>
    </StormWrapper>
  );
}
