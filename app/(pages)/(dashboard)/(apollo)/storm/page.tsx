"use client";
import StormHeader from "./(common)/controller/main/header/main";
import StormChatBody from "./(common)/controller/main/chat/main";
import StormMessageInput from "./(common)/controller/main/input/main";
import StormSidePanel from "./(common)/controller/side-panel/main";
import StormController from "./(common)/controller/main";
import StormControllerMain from "./(common)/controller/main/main";
import StormYouChatMessage from "./(common)/controller/main/chat/message/you/main";
import StormThemChatMessage from "./(common)/controller/main/chat/message/them/main";
import StormSidePanelAvatar from "./(common)/controller/side-panel/avatar/main";
import StormMessageInputLeft from "./(common)/controller/main/input/left/main";
import StormMessageInputText from "./(common)/controller/main/input/text/main";
import StormMessageInputRight from "./(common)/controller/main/input/right/main";
import StormMessageInputSend from "./(common)/controller/main/input/right/send/main";
import StormMessageInputVoice from "./(common)/controller/main/input/right/voice/main";
import { useState } from "react";
import { Message, defaultMessages } from "./data";

export default function StormPage() {
  const [messages, changeMessages] = useState<Message[]>(defaultMessages);
  const [message, changeMessage] = useState("dsadsadsa");

  return (
    <StormController>
      <div style={{ width: "calc(100% - 80px)" }}>
        <StormControllerMain>
          <StormHeader />
          <StormChatBody>
            <StormThemChatMessage>1231231132</StormThemChatMessage>
            <StormThemChatMessage>1231231132</StormThemChatMessage>
            <StormThemChatMessage>1231231132</StormThemChatMessage>
            {messages.map((message) => (
              <StormYouChatMessage>{message.message}</StormYouChatMessage>
            ))}
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
                onClick={(e) =>
                  changeMessages((prev) => [
                    ...prev,
                    {
                      message: message,
                      date: new Date(),
                    },
                  ])
                }
              />
            </StormMessageInputRight>
          </StormMessageInput>
        </StormControllerMain>
      </div>
      <StormSidePanel>
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
      </StormSidePanel>
    </StormController>
  );
}
