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
import { SidePanelColumn } from "./storm-epic/sidebar/chapters/main";
import { StormSidePanelChapterSection } from "./storm-epic/sidebar/chapters/chapter/main";
import { StormChatMessages } from "./storm-epic/main/chat/messages/main";
import { StormViewProps } from "./page";
import { spaceTable } from "@/(pages)/(cosmos)/tables/space/table";
import { stormTable } from "@/(pages)/(cosmos)/tables/storm/table";


export function StormView({
  chapters,
  chapterId,
  chats,
  chatId,
  messages,
  chapterHandler,
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
                chatHandler.sendChatMessage(inputMessage);
                changeInputMessage("");
              }}
            />
          </StormMessageInputRight>
        </StormMessageInput>
      </StormControllerMain>
      <StormSidePanel>
        <SidePanelColumn>
          {chapters.map((chapter) => (
            <StormSidePanelChapterSection
              selectChat={chatHandler.selectChat}
              chapter={chapter}
              chatId={chatId}
              chats={chapter.id === chapterId ? chats : stormTable.chat.examples}
              active={chapter.id === chapterId}
              addChat={chatHandler.addChatToChats}
            />
          ))}
          <div
            className="w-full"
            onClick={() =>
              chapterHandler.addChapter({
                ...spaceTable.chapter.example,
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
