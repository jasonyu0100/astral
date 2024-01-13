"use client";
import { StormHeader } from "./storm-epic/center/header/main";
import { StormChat } from "./storm-epic/center/chat/main";
import { StormChatInput } from "./storm-epic/center/input/main";
import { StormSidebar } from "./storm-sidebar-epic/main";
import { StormWrapper } from "./storm-epic/main";
import { StormMain } from "./storm-epic/center/main";
import { StormChatInputLeft } from "./storm-epic/center/input/left/main";
import { StormChatMessageInput } from "./storm-epic/center/input/text/main";
import { StormChatInputRight } from "./storm-epic/center/input/right/main";
import { StormMessageInputSend } from "./storm-epic/center/input/right/send/main";
import { StormMessageInputVoice } from "./storm-epic/center/input/right/voice/main";
import { useContext } from "react";
import { SidebarColumn } from "./storm-sidebar-epic/chapters/main";
import { StormChapter } from "./storm-sidebar-epic/chapters/chapter/main";
import { StormChatMessages } from "./storm-epic/center/chat/messages/main";
import { StormContext } from "./page";
import { StormMessage } from "./storm-epic/center/chat/messages/message/main";
import { StormChapterAdd } from "./storm-sidebar-epic/chapters/chapter/add/main";

export function StormView() {
  const { chapters, messages } = useContext(StormContext);

  return (
    <StormWrapper>
      <StormMain>
        <StormChat>
          <StormHeader />
          <StormChatMessages>
            {messages.map((message) =>
              <StormMessage message={message}/>
            )}
          </StormChatMessages>
        </StormChat>
        <StormChatInput>
          <StormChatInputLeft />
          <StormChatMessageInput/>
          <StormChatInputRight>
            <StormMessageInputVoice />
            <StormMessageInputSend/>
          </StormChatInputRight>
        </StormChatInput>
      </StormMain>
      <StormSidebar>
        <SidebarColumn>
          {chapters.map((chapter, index) => (
            <StormChapter chapter={chapter} index={index} />
          ))}
          <StormChapterAdd/>
        </SidebarColumn>
      </StormSidebar>
    </StormWrapper>
  );
}
