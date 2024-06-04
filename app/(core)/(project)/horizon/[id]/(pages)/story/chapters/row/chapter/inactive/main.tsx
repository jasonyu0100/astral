import { ChapterContext } from "@/(model)/space/chapter/main";
import { useContext } from "react";

export function ChapterInactiveText() {
  const chapter = useContext(ChapterContext);

  return <p className='font-bold text-slate-500'>Team A</p>;
  // return <p className='font-bold text-slate-500'>{chapter.title}</p>;
}
