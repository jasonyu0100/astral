import { useControllerForSpaceChapterMain } from '@/(server)/(controller)/space/chapter/main';
import { ContextForChapterUpdateItemObj } from '@/(server)/(model)/space/chapter/update/item/main';
import { useContext } from 'react';
import { SpaceSeaEditCard } from '../../main';

export function SpaceSeaCardChapter() {
  const updateItem = useContext(ContextForChapterUpdateItemObj);
  const chapterController = useControllerForSpaceChapterMain(
    updateItem.chapterId,
  );

  return (
    <SpaceSeaEditCard>
      <p className='text-xl font-bold text-slate-300'>
        {chapterController.state.obj?.title}
      </p>
      <p className='text-lg font-light text-slate-300'>New Chapter</p>
    </SpaceSeaEditCard>
  );
}
