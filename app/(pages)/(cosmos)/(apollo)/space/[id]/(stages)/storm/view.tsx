"use client";
import { StormHeader } from "./storm-epic/center/header/main";
import { StormChat } from "./storm-epic/center/chat/main";
import { StormChatInput } from "./storm-epic/center/input/main";
import { StormSidebar } from "./storm-epic/sidebar/main";
import { StormWrapper } from "./storm-epic/main";
import { StormMain } from "./storm-epic/center/main";
import { StormYouChatMessage } from "./storm-epic/center/chat/messages/message/you/main";
import { StormPartnerChatMessage } from "./storm-epic/center/chat/messages/message/them/main";
import { StormChatInputLeft } from "./storm-epic/center/input/left/main";
import { StormChatMessageInput } from "./storm-epic/center/input/text/main";
import { StormChatInputRight } from "./storm-epic/center/input/right/main";
import { StormMessageInputSend } from "./storm-epic/center/input/right/send/main";
import { StormMessageInputVoice } from "./storm-epic/center/input/right/voice/main";
import { useState } from "react";
import { SidebarColumn } from "./storm-epic/sidebar/chapters/main";
import { StormChapter } from "./storm-epic/sidebar/chapters/chapter/main";
import { StormChatMessages } from "./storm-epic/center/chat/messages/main";
import { StormViewProps } from "./page";
import { spaceTable } from "@/tables/space/table";

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
  const chat = chats.filter((chat) => chat.id === chatId).at(0);
  const chapter = chapters.filter((chapter) => chapter.id === chapterId).at(0);

  return (
    <StormWrapper>
      <StormMain>
        {chat && chapter && (
          <StormChat>
            <StormHeader chat={chat} chapter={chapter} />
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
          </StormChat>
        )}
        <StormChatInput>
          <StormChatInputLeft />
          <StormChatMessageInput
            onChange={(e) => changeInputMessage(e.target.value)}
            value={inputMessage}
          />
          <StormChatInputRight>
            <StormMessageInputVoice />
            <StormMessageInputSend
              onClick={(e) => {
                chatHandler.sendMessage(inputMessage);
                changeInputMessage("");
              }}
            />
          </StormChatInputRight>
        </StormChatInput>
      </StormMain>
      <StormSidebar>
        <SidebarColumn>
          {chapters.map((chapter, index) => (
            <StormChapter
              index={index}
              selectChat={chatHandler.selectChat}
              chapter={chapter}
              chatId={chatId}
              chats={chapter.id === chapterId ? chats : []}
              active={chapter.id === chapterId}
              addChat={chatHandler.addChat}
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
        </SidebarColumn>
      </StormSidebar>
    </StormWrapper>
  );
}
