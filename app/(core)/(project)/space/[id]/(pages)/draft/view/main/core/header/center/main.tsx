import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { useContext } from 'react';

export function SpaceDraftHeaderCenter() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div className='flex w-1/3 flex-row justify-center'>
      <p className='text-lg font-bold text-slate-300'>
        {chapterListController.state.currentObj?.title}
      </p>
    </div>
  );
}
