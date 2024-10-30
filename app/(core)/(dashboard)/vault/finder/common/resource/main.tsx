import { ElementResource } from '@/components/element/resource/main';
import { ContextForCollectionResourceObj } from '@/server/model/gallery/collection/resource/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';
import { ResourceContainer } from './common/container/main';

export function FinderResource() {
  const resource = useContext(ContextForCollectionResourceObj);
  return (
    <div className='flex aspect-square w-full flex-col justify-between space-y-[1rem]'>
      <ResourceContainer className='relative w-full'>
        <ElementResource />
      </ResourceContainer>
      <div className='flex flex-col'>
        <p className='text-xl font-bold text-slate-300'>{resource.variant}</p>
        <p className='text-sm font-bold text-slate-300'>
          {getFormattedDate(new Date(resource.created))}
        </p>
      </div>
    </div>
  );
}
