import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { useContext } from 'react';
import { SpaceReviewExpandIcon } from './expand/main';

export function SpaceReviewHeaderMiddle() {
  const verseListController = useContext(ContextForChapterVerseList);
  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <p className='text-lg font-light text-slate-300'>
        verse - {verseListController.state?.currentObj?.title || 'None'}
      </p>
      <SpaceReviewExpandIcon />
    </div>
  );
}
