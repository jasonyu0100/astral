import { useControllerForSessionUpdateOfSpaceList } from '@/(server)/controller/space/chapter/session/update/space-list';
import { ChapterSessionUpdateVariant } from '@/(server)/model/space/chapter/session/update/main';
import { ContextForSpaceObj } from '@/(server)/model/space/main';
import React, { useContext } from 'react';

export function StudioSpacesRowStat() {
  const spaceObj = useContext(ContextForSpaceObj);
  const sessionUpdateListController = useControllerForSessionUpdateOfSpaceList(
    spaceObj.id,
  );
  const chapters = sessionUpdateListController.state.objs.filter(
    (update) => update.variant === ChapterSessionUpdateVariant.CHAPTER,
  );

  return (
    <div className='flex flex-row items-center justify-center'>
      <p className='text-sm font-bold text-slate-300'>{chapters.length}</p>
    </div>
  );
}
