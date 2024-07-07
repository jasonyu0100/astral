import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { useContext } from 'react';
import { SpaceIdeasExpandIcon } from './expand/main';

export function SpaceIdeasHeaderMiddle() {
  const verseListController = useContext(ContextForChapterVerseList);
  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <p className='text-lg font-light text-slate-700'>
        verse - {verseListController.state?.currentObj?.title || 'None'}
      </p>
      <SpaceIdeasExpandIcon />
    </div>
  );
}
