import { SpaceChapterContext } from "@/(model)/space/chapter/main";
import { useContext } from "react";

export function ChapterInactiveText() {
  const chapter = useContext(SpaceChapterContext);

  return <p className='font-bold text-slate-500'>{chapter.title}</p>;
}
