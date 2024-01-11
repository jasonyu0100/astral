import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles, borderStyles } from "@/(pages)/(common)/styles/data";
import { ChapterObj } from "@/tables/space/chapter/main";

interface FlowChaptersItemProps
  extends React.ComponentPropsWithoutRef<"button"> {
  chapter: ChapterObj;
  active: boolean;
}

export function FlowChaptersItem({
  chapter,
  active,
  ...props
}: FlowChaptersItemProps) {
  return (
    <button {...props}>
      <Layer
        displayName={FlowChaptersItem.name}
        sizeStyle="w-[200px] h-[40px]"
        backgroundStyle={backgroundStyles["glass-5"]}
        borderStyle={borderStyles["rounded-full"]}
      >
        <div className="w-full h-full justify-center flex items-center">
          {active ? (
            <div className="text-white font-bold">{chapter.title}</div>
          ) : (
            <div className="text-slate-500 font-bold">{chapter.title}</div>
          )}
        </div>
      </Layer>
    </button>
  );
}
