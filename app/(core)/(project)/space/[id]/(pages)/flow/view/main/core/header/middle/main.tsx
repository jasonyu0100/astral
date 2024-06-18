import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { useContext } from 'react';

export function SpaceFlowHeaderMiddle() {
  const verseListController = useContext(ContextForChapterVerseList);
  return (
    <div className='flex w-1/3 flex-row justify-center'>
      <p className='text-lg font-bold text-slate-300'>
        {verseListController.state?.currentObj?.title || 'None'}
      </p>
    </div>
  );
}
