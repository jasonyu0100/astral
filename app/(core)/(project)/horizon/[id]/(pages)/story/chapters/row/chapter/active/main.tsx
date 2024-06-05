import { SpaceChapterContext } from "@/(model)/space/chapter/main";
import { useContext } from "react";

export function ChapterActiveText() {
  const chapter = useContext(SpaceChapterContext);
  
  return <p className='font-bold text-slate-300'>A. Dress Code</p>;
  // return <p className='font-bold text-slate-300'>{chapter.title}</p>;
}
