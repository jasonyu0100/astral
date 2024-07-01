import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { useContext } from 'react';
import { SpaceSessionsExpandIcon } from './expand/main';

export function SpaceSessionsHeaderMiddle() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <p className='text-lg font-light text-slate-300'>
        session - {chapterListController.state.currentObj?.title}
      </p>
      <SpaceSessionsExpandIcon />
    </div>
  );
}
