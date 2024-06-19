import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceUpdateList } from '@/(server)/(controller)/space/update/list';
import { useContext } from 'react';
import { SpaceSeaExpandIcon } from './expand/main';

export function SpaceSeaHeaderMiddle() {
  const updateListController = useContext(ContextForSpaceUpdateList);
  const spaceChapterList = useContext(ContextForSpaceChapterList);

  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <p className='text-lg font-bold text-slate-300'>update - untitled</p>
      <SpaceSeaExpandIcon />
    </div>
  );
}
