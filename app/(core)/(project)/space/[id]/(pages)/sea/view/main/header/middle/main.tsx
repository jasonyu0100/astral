import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { useContext } from 'react';

export function SpaceSeaHeaderMiddle() {
  const spaceChapterList = useContext(ContextForSpaceChapterList);

  return (
    <div className='flex w-1/3 flex-row justify-center'>
      <p className='font-bold text-white'>
        Current Work - {spaceChapterList.state.currentObj?.title}
      </p>
    </div>
  );
}
