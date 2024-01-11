import { ChapterObj } from "@/tables/space/chapter/main";
import { StormSidePanelSectionAdd } from "./chat/add/main";
import { StormSidePanelChat } from "./chat/main";
import { StormSidePanelSectionHeader } from "./header/main";
import StormSidePanelSectionIndicator from "./header/indicator/main";
import { StormSidePanelSectionTitle } from "./header/title/main";
import { useEffect, useState } from "react";
import { ChatObj } from "@/tables/storm/chat/main";
import { stormTable } from "@/tables/storm/table";

interface StormSidePanelSectionViewProps {
  index: number;
  chats: ChatObj[];
  chatId: string;
  chapter: ChapterObj;
  active: boolean;
  addChat: (chat: ChatObj, chapter: ChapterObj) => void;
  selectChat: (chat: ChatObj, chapter: ChapterObj) => void;
}

export function StormSidePanelChapterSection({
  chapter,
  chats,
  chatId,
  active,
  addChat,
  selectChat,
}: StormSidePanelSectionViewProps) {
  const [show, changeShow] = useState(active);

  useEffect(() => {
    if (active) {
      changeShow(true);
    }
  }, [active]);

  return (
    <div className="flex flex-col space-y-[2rem]">
      <div
        className="cursor-pointer w-full"
        onClick={() => {
          changeShow(!show);
        }}
      >
        <StormSidePanelSectionHeader>
          <StormSidePanelSectionTitle>
            {chapter.title} {`(${chats.length})`}
          </StormSidePanelSectionTitle>
          <StormSidePanelSectionIndicator show={active} />
        </StormSidePanelSectionHeader>
      </div>
      {show && (
        <>
          {chats.map((chat) => (
            <>
              <StormSidePanelChat
                active={active && chat.id === chatId}
                onClick={() => selectChat(chat, chapter)}
              >
                {chat.title}
              </StormSidePanelChat>
            </>
          ))}
          <StormSidePanelSectionAdd
            onClick={() => addChat({
              ...stormTable.chat.example, id: new Date().toISOString()}, chapter)}
          />
        </>
      )}
    </div>
  );
}
