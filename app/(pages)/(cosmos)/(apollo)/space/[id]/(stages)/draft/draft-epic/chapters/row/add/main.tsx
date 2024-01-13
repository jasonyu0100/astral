import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles, borderStyles } from "@/(pages)/(common)/styles/data";
import { useContext } from "react";
import { DraftContext } from "../../../../page";
import { chapterTable } from "@/tables/space/table";

export default function DraftChaptersAdd() {
  const { chapterHandler } = useContext(DraftContext);
  return (
    <button
      onClick={() =>
        chapterHandler.addChapter({
          ...chapterTable.example,
          id: Date.now().toFixed().toString(),
        })
      }
    >
      <Layer
        displayName={DraftChaptersAdd.name}
        sizeStyle="w-[200px] h-[40px]"
        backgroundStyle={backgroundStyles["glass-5"]}
        borderStyle={borderStyles["rounded-full"]}
      >
        <div className="w-full h-full justify-center flex items-center">
          <div className="text-slate-500 font-bold">Add</div>
        </div>
      </Layer>
    </button>
  );
}
