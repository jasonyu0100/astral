import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import { ChapterObj } from "@/(pages)/(cosmos)/tables/space/chapter/main";

export interface FlowChapterProps
  extends React.ComponentPropsWithoutRef<"button"> {
  chapter: ChapterObj;
  active: boolean;
}

export function FlowChapter({ chapter: chapter, active, ...props }: FlowChapterProps) {
  return (
    <button {...props}>
      <Layer
        displayName={FlowChapter.name}
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
