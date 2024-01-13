import { ChapterObj } from "@/tables/space/chapter/main";
import { StormChapterChatAdd } from "./chat/add/main";
import { StormChapterChat } from "./chat/main";
import { StormChapterHeader } from "./header/main";
import StormChapterIndicator from "./header/indicator/main";
import { StormChapterTitle } from "./header/title/main";
import { useContext, useEffect, useState } from "react";
import { chatTable, stormTable } from "@/tables/storm/table";
import { StormContext } from "../../../page";

interface StormSidebarSectionViewProps {
  index: number;
  chapter: ChapterObj;
}

export function StormChapter({
  chapter,
  index
}: StormSidebarSectionViewProps) {
  const { chatHandler, chapterId, chatId, chats } = useContext(StormContext);
  const active = chapter.id === chapterId;
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
                onClick={() => chatHandler.selectChat(chat, chapter)}
              >
                {chat.title}
              </StormChapterChat>
            </>
          ))}
          <StormChapterChatAdd
            onClick={() => chatHandler.addChat({
              ...chatTable.example, id: new Date().toISOString()}, chapter)}
          />
        </>
      )}
    </div>
  );
}
