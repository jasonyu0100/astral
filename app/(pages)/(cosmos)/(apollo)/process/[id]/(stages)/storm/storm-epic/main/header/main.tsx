import { borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import { Layer } from "@/(pages)/(common)/layer/main";
import { ChatObj } from "@/(pages)/(cosmos)/tables/storm/chat/main";
import { HeaderAdd } from "./add/main";
import HeaderTitle from "./title/main";
import { HeaderAgent } from "./agent/main";
import { ChapterObj } from "@/(pages)/(cosmos)/tables/space/chapter/main";

export function StormHeader({
  chat,
  chapter,
}: {
  chat: ChatObj;
  chapter: ChapterObj;
}) {
  return (
    <Layer
      displayName={StormHeader.name}
      sizeStyle="h-[50px] w-full flex-shrink-0"
      containerStyle={containerStyles["row-center"]}
      borderStyle={borderStyles["border-b"]}
      contentStyle="px-[1rem] space-x-[1rem] justify-between"
    >
      <div className="flex flex-row w-1/3">
        <HeaderAgent>Chat GPT-3</HeaderAgent>
      </div>
      <div className="flex flex-row justify-center w-1/3">
        <HeaderTitle>
          {chapter.title} - {chat.title}
        </HeaderTitle>
      </div>
      <div className="flex flex-row justify-end w-1/3">
        <HeaderAdd />
      </div>
    </Layer>
  );
}
