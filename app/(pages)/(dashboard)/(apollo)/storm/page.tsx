"use client";
import StormHeader from "./(common)/controller/main/header/main";
import StormChatBody from "./(common)/controller/main/chat/main";
import StormMessageInput from "./(common)/controller/main/input/main";
import StormSidePanel from "./(common)/controller/side-panel/main";
import StormController from "./(common)/controller/main";
import StormControllerMain from "./(common)/controller/main/main";
import StormYouChatMessage from "./(common)/controller/main/chat/message/you/main";
import StormPartnerChatMessage from "./(common)/controller/main/chat/message/them/main";
import StormSidePanelAvatar from "./(common)/controller/side-panel/avatar/main";
import StormMessageInputLeft from "./(common)/controller/main/input/left/main";
import StormMessageInputText from "./(common)/controller/main/input/text/main";
import StormMessageInputRight from "./(common)/controller/main/input/right/main";
import StormMessageInputSend from "./(common)/controller/main/input/right/send/main";
import StormMessageInputVoice from "./(common)/controller/main/input/right/voice/main";
import { useState } from "react";
import {
  Message,
  defaultMessages,
  defaultPartnerMessage,
  defaultYouMessage,
} from "./data";
import Layer from "@/(pages)/(common)/layer/main";
import { containerStyles } from "@/(pages)/(common)/styles/data";
import StormAddIcon from "./(common)/icon/add/main";

export default function Page() {
  const [messages, changeMessages] = useState<Message[]>(defaultMessages);
  const [message, changeMessage] = useState("dsadsadsa");

  return (
    <StormController>
        <StormControllerMain>
          <StormHeader />
          <StormChatBody>
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
        <div className="w-full px-[2rem] flex flex-col space-y-[4rem]">
          <div className="flex flex-col space-y-[2rem]">
            <p className="text-slate-500 font-extraBold text-xl">Today</p>
            <div className="flex flex-row w-full items-center space-x-[1rem]">
              <Layer
                sizeStyle="w-[50px] h-[50px] rounded-[25px] overflow-hidden"
                backgroundStyle="bg-gradient-to-r from-slate-100 to-slate-500 opacity-10"
                containerStyle={containerStyles["col-centered"]}
              >
                <StormAddIcon />
              </Layer>
              <p className="text-white font-bold text-lg">New Chat</p>
            </div>
            <div className="flex flex-row items-center space-x-[1rem]">
              <StormSidePanelAvatar />
              <p className="text-white font-bold text-lg">Hello World - Chat</p>
            </div>
          </div>
          <div className="flex flex-col space-y-[2rem]">
            <p className="text-slate-500 font-extraBold text-xl">Yesterday</p>
            <div className="flex flex-row items-center space-x-[1rem]">
              <StormSidePanelAvatar />
              <p className="text-white font-bold text-lg">Hello World - Chat</p>
            </div>
            <div className="flex flex-row items-center space-x-[1rem]">
              <StormSidePanelAvatar />
              <p className="text-white font-bold text-lg">Hello World - Chat</p>
            </div>
          </div>
          <div className="flex flex-col space-y-[2rem]">
            <p className="text-slate-500 font-extraBold text-xl">Last Week</p>
            <div className="flex flex-row items-center space-x-[1rem]">
              <StormSidePanelAvatar />
              <p className="text-white font-bold text-lg">Hello World - Chat</p>
            </div>
            <div className="flex flex-row items-center space-x-[1rem]">
              <StormSidePanelAvatar />
              <p className="text-white font-bold text-lg">Hello World - Chat</p>
            </div>
          </div>
          <div className="flex flex-col space-y-[2rem]">
            <p className="text-slate-500 font-extraBold text-xl">Last Month</p>
            <div className="flex flex-row items-center space-x-[1rem]">
              <StormSidePanelAvatar />
              <p className="text-white font-bold text-lg">Hello World - Chat</p>
            </div>
            <div className="flex flex-row items-center space-x-[1rem]">
              <StormSidePanelAvatar />
              <p className="text-white font-bold text-lg">Hello World - Chat</p>
            </div>
          </div>
        </div>
        {/* <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar /> */}
      </StormSidePanel>
    </StormController>
  );
}
