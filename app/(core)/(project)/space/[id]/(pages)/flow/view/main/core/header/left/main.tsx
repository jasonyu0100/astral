import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { useContext } from 'react';

export function SpaceFlowHeaderLeft() {
  const verseListController = useContext(ContextForChapterVerseList);

  return (
    <div className='flex w-1/3 flex-row'>
      <select className='w-[10rem] border-b-[1px] border-slate-300 border-opacity-30 bg-transparent py-[0.5rem] font-bold text-slate-500 outline-none'>
        {verseListController.state.objs.map((verse, index) => (
          <option className='text-md font-bold text-slate-500'>
            {verse.title}
          </option>
        ))}
      </select>
    </div>
  );
}
