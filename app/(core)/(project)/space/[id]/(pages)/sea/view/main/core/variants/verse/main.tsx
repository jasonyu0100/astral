import { ContextForChapterVerseObj } from '@/(server)/(model)/space/chapter/verse/main';
import { useContext } from 'react';
import { SpaceSeaUnaddedCard } from '../../card/main';

export function SpaceSeaCardVerse() {
  const verse = useContext(ContextForChapterVerseObj);
  return (
    <SpaceSeaUnaddedCard>
      <p>Verse - {verse.title}</p>
      <br />
      <ul className='list-disc pl-[1rem] text-sm font-medium'>
        <li>Comment A</li>
        <li>Comment A</li>
        <li>Comment A</li>
      </ul>
    </SpaceSeaUnaddedCard>
  );
}
