import { ContextForChapterItemList } from '@/(server)/(controller)/space/chapter/update/item/chapter-list';
import { getFormattedAMPM } from '@/(utils)/dateFormat';
import { useContext } from 'react';

export function SpaceSeaItemFormHeader() {
  const updateItemListController = useContext(ContextForChapterItemList);
  const current = updateItemListController.state.currentObj;

  return (
    <div className='flex flex-col'>
      <p className='mb-[1rem] text-sm font-bold text-slate-300'>
        {updateItemListController.state.index + 1} of{' '}
        {updateItemListController.state.objs.length}
      </p>
      <p className='text-xl font-bold text-slate-300'>
        {current.variant} UPDATE - {current?.added ? 'Added' : 'Not Added'}
      </p>
      <p className='text-sm font-light text-slate-300'>
        {getFormattedAMPM(new Date(current.created))}
      </p>
    </div>
  );
}
