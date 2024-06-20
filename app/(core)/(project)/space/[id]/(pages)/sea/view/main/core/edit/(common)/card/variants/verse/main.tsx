import { useControllerForChapterVerseMain } from '@/(server)/(controller)/space/chapter/verse/main';
import { ContextForChapterUpdateItemObj } from '@/(server)/(model)/space/chapter/update/item/main';
import { useContext } from 'react';
import { SpaceSeaEditCard } from '../../main';

export function SpaceSeaCardVerse() {
  const updateItem = useContext(ContextForChapterUpdateItemObj);
  const verseController = useControllerForChapterVerseMain(updateItem.verseId);

  return (
    <SpaceSeaEditCard>
      <p className='text-xl font-bold text-slate-300'>
        {verseController.state.obj.title}
      </p>
      <p className='text-lg font-light text-slate-300'>New Verse</p>
    </SpaceSeaEditCard>
  );
}
