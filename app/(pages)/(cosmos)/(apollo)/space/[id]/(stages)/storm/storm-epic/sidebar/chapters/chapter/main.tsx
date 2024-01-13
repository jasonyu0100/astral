import { ChapterObj } from "@/tables/space/chapter/main";
import { StormChapterChatAdd } from "./chat/add/main";
import { StormChapterChat } from "./chat/main";
import { StormChapterHeader } from "./header/main";
import StormChapterIndicator from "./header/indicator/main";
import { StormChapterTitle } from "./header/title/main";
import { useEffect, useState } from "react";
import { ChatObj } from "@/tables/storm/chat/main";
import { chatTable, stormTable } from "@/tables/storm/table";

interface StormSidebarSectionViewProps {
  index: number;
  chats: ChatObj[];
  chatId: string;
  chapter: ChapterObj;
  active: boolean;
  addChat: (chat: ChatObj, chapter: ChapterObj) => void;
  selectChat: (chat: ChatObj, chapter: ChapterObj) => void;
}

export function StormChapter({
  chapter,
  chats,
  chatId,
  active,
  addChat,
  selectChat,
}: StormSidebarSectionViewProps) {
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
        <StormChapterHeader>
          <StormChapterTitle>
            {chapter.title} {`(${chats.length})`}
          </StormChapterTitle>
          <StormChapterIndicator show={active} />
        </StormChapterHeader>
      </div>
      {show && (
        <>
          {chats.map((chat) => (
            <>
              <StormChapterChat
                active={active && chat.id === chatId}
                onClick={() => selectChat(chat, chapter)}
              >
                {chat.title}
              </StormChapterChat>
            </>
          ))}
          <StormChapterChatAdd
            onClick={() => addChat({
              ...chatTable.example, id: new Date().toISOString()}, chapter)}
          />
        </>
      )}
    </div>
  );
}
