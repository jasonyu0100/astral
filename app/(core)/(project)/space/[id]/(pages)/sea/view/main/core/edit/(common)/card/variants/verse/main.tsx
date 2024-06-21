import { useControllerForChapterVerseMain } from '@/(server)/(controller)/space/chapter/verse/main';
import { ContextForChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import { useContext } from 'react';
import { SpaceSeaEditCard } from '../../main';

export function SpaceSeaCardVerse() {
  const sessionUpdate = useContext(ContextForChapterSessionUpdateObj);
  const verseController = useControllerForChapterVerseMain(
    sessionUpdate?.verseId || '',
  );

  return (
    <SpaceSeaEditCard>
      <p className='text-xl font-bold text-slate-300'>
        {verseController.state.obj.title}
      </p>
      <p className='text-lg font-light text-slate-300'>New Verse</p>
    </SpaceSeaEditCard>
  );
}
