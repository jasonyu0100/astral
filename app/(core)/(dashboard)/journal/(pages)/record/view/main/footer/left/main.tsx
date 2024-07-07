import { ContextForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import { useContext } from 'react';

export function JournalRecordFooterLeft() {
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <div className='flex w-1/3 flex-row items-center justify-start space-x-[1rem]'>
      <p className='text-lg font-bold text-slate-700'>
        {resourceListController.state.objs.length} / 50
      </p>
    </div>
  );
}
