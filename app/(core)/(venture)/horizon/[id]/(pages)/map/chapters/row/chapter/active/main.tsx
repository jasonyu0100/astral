import { ChapterContext } from "@/(types)/model/chapter/main";
import { useContext } from "react";

export function ChapterActiveText() {
  const chapter = useContext(ChapterContext);
  
  return <p className='font-bold text-slate-300'>M Team A</p>;
  // return <p className='font-bold text-slate-300'>{chapter.title}</p>;
}
