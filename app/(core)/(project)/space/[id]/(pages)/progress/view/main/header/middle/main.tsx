import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { useContext } from 'react';
import { SpaceProgressExpandIcon } from './expand/main';

export function SpaceProgressHeaderMiddle() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <p className='text-lg font-light text-slate-300'>
        session - {chapterListController.state.currentObj?.title}
      </p>
      <SpaceProgressExpandIcon />
    </div>
  );
}
