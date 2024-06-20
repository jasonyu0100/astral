import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { useContext } from 'react';
import { SpaceFlowExpandIcon } from './expand/main';

export function SpaceFlowHeaderMiddle() {
  const verseListController = useContext(ContextForChapterVerseList);
  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <p className='text-lg font-light text-slate-300'>
        verse - {verseListController.state?.currentObj?.title || 'None'}
      </p>
      <SpaceFlowExpandIcon />
    </div>
  );
}
