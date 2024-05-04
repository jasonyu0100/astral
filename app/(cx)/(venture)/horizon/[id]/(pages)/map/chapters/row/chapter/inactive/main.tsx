import { ChapterContext } from "@/(types)/model/space/chapter/main";
import { useContext } from "react";

export function ChapterInactiveText() {
  const chapter = useContext(ChapterContext);

  return <p className='font-bold text-slate-500'>{chapter.title}</p>;
}
