import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles, borderStyles } from "@/(pages)/(common)/styles/data";
import { ChapterObj } from "@/(pages)/(cosmos)/tables/space/chapter/main";

interface DraftChaptersItemProps
  extends React.ComponentPropsWithoutRef<"button"> {
  chapter: ChapterObj;
  active: boolean;
}

export function DraftChaptersItem({
  chapter,
  active,
  ...props
}: DraftChaptersItemProps) {
  return (
    <button {...props}>
      <Layer
        displayName={DraftChaptersItem.name}
        sizeStyle="w-[200px] h-[40px]"
        backgroundStyle={backgroundStyles["glass-5"]}
        borderStyle={borderStyles["rounded-full"]}
      >
        <div className="w-full h-full justify-center flex items-center">
          {active ? (
            <div className="text-white font-bold">{chapter.name}</div>
          ) : (
            <div className="text-slate-500 font-bold">{chapter.name}</div>
          )}
        </div>
      </Layer>
    </button>
  );
}
