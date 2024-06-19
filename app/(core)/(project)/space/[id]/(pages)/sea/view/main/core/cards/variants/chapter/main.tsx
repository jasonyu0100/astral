import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceSeaUnaddedCard } from '../../card/main';

export function SpaceSeaCardChapter() {
  const chapter = useContext(ContextForSpaceChapterObj);

  return (
    <SpaceSeaUnaddedCard>
      <p className='text-sm font-bold text-slate-300'>{chapter.title}</p>
      <p className='text-xs font-light text-slate-300'>New Chapter</p>
    </SpaceSeaUnaddedCard>
  );
}
