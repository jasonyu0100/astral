import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import { ChapterObj } from "@/API";
import React from "react";

export interface DraftChapterProps
  extends React.ComponentPropsWithoutRef<"button"> {
  chapter: ChapterObj;
  active: boolean;
}

export function DraftChapter({ chapter: chapter, active, ...props }: DraftChapterProps) {
  return (
    <button {...props}>
      <Layer
        displayName={DraftChapter.name}
        sizeStyle="w-[80px] h-[100px]"
        backgroundStyle={backgroundStyles["glass-10"]}
        containerStyle={containerStyles["row-centered"]}
        contentStyle="flex-shrink-0"
      >
        {active ? (
          <p className="font-bold text-white">{chapter.name}</p>
        ) : (
          <p className="font-bold text-slate-500">{chapter.name}</p>
        )}
      </Layer>
    </button>
  );
}
