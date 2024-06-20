import { useControllerForChapterVerseMain } from '@/(server)/(controller)/space/chapter/verse/main';
import { ContextForChapterUpdateItemObj } from '@/(server)/(model)/space/chapter/update/item/main';
import { useContext } from 'react';
import { SpaceSeaWorkCard } from '../../main';

export function SpaceSeaCardVerse() {
  const updateItem = useContext(ContextForChapterUpdateItemObj);
  const verseController = useControllerForChapterVerseMain(updateItem.verseId);

  return (
    <SpaceSeaWorkCard>
      <p className='text-sm font-bold text-slate-300'>
        {verseController.state.obj.title}
      </p>
      <p className='text-xs font-light text-slate-300'>New Verse</p>
    </SpaceSeaWorkCard>
  );
}
