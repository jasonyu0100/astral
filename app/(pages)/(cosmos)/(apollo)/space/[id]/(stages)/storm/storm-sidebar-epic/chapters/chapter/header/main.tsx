import { Layer } from "@/(pages)/(common)/layer/main";
import { containerStyles } from "@/(pages)/(common)/styles/data";
import { useContext } from "react";
import { StormContext } from "../../../../page";
import { ChapterObj } from "@/tables/space/chapter/main";

export function StormChapterHeader({
  chapter,
  children,
}: {
  chapter: ChapterObj;
  children: React.ReactNode;
}) {
  const { chapterHandler } = useContext(StormContext);
  return (
    <button onClick={() => chapterHandler.goToChapter(chapter)}>
      <Layer
        displayName={StormChapterHeader.name}
        sizeStyle="w-full h-[50px]"
        containerStyle={containerStyles["row-center"]}
        contentStyle="justify-between"
      >
        {children}
      </Layer>
    </button>
  );
}
