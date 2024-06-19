import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceSeaWorkCard } from '../../card/main';

export function SpaceSeaCardChapter() {
  const chapter = useContext(ContextForSpaceChapterObj);

  return (
    <SpaceSeaWorkCard>
      <p className='text-sm font-bold text-slate-300'>{chapter.title}</p>
      <p className='text-xs font-light text-slate-300'>New Chapter</p>
    </SpaceSeaWorkCard>
  );
}
