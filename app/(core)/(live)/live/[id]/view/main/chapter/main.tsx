import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { useContext } from 'react';

export function PublicSpaceChapterHome() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div className='space-y-[1rem] py-[2rem]'>
      <p className='text-3xl font-bold text-slate-300'>
        {chapterListController.state.currentObj?.title}
      </p>
      <p className='text-lg font-bold text-slate-500'>
        {chapterListController.state.currentObj?.description}
      </p>
      <p className='text-lg font-bold text-slate-500'>
        {chapterListController.state.currentObj?.objective}
      </p>
    </div>
  );
}
