import { ContextForChapterVerseObj } from '@/(server)/(model)/space/chapter/verse/main';
import { useContext } from 'react';
import { SpaceSeaUnaddedCard } from '../../card/main';

export function SpaceSeaCardVerse() {
  const verse = useContext(ContextForChapterVerseObj);

  return (
    <SpaceSeaUnaddedCard>
      <p className='text-sm font-bold text-slate-300'>{verse.title}</p>
      <p className='text-xs font-light text-slate-300'>New Verse</p>
    </SpaceSeaUnaddedCard>
  );
}
