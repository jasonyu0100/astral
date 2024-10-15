import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { useContext } from 'react';

export function JournalDailyTableListItemDescription() {
  const resource = useContext(ContextForCollectionResourceObj);

  return (
    <div className='col-span-2'>
      {resource.description?.trim() || 'Untitled'}
    </div>
  );
}
