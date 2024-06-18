import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { useContext } from 'react';

export function SpaceSeaHeaderLeft() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  return (
    <div className='flex w-1/3 flex-row'>
      <select className='w-[10rem] border-b-[1px] border-slate-300 border-opacity-30 bg-transparent py-[0.5rem] font-bold text-slate-500 outline-none'>
        <option className='text-md font-bold text-slate-500'>
          All Chapters
        </option>
        {chapterListController.state.objs.map((chapter, index) => (
          <option className='text-md font-bold text-slate-500'>
            {chapter.title}
          </option>
        ))}
      </select>
    </div>
  );
}
