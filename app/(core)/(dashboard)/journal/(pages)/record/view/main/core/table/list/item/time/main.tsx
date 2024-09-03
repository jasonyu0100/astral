import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { getFormattedAMPM } from '@/utils/dateFormat';
import { useContext } from 'react';

export function JournalRecordTableListItemTime() {
  const resource = useContext(ContextForCollectionResourceObj);
  return (
    <div>
      <p className='text-center font-bold text-slate-300'>
        {getFormattedAMPM(new Date(resource.created))}
      </p>
    </div>
  );
}
