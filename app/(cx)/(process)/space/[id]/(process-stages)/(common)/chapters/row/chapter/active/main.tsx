import { ChapterContext } from "@/(logic)/internal/data/infra/model/space/chapter/main";
import { useContext } from "react";

export function ChapterActiveText() {
  const chapter = useContext(ChapterContext);
  
  return <p className='font-bold text-white'>{chapter.title}</p>;
}
