import { useContext } from 'react';
import { CollectionContext, CollectionResourcesContext } from '@/(ouros)/(model)/gallery/collection/main';

export function CollectionInfo() {
  const collection = useContext(CollectionContext);
  const resources = useContext(CollectionResourcesContext);

  return (
    <div className='flex h-full flex-grow flex-col items-center justify-center space-y-[1rem] p-[1rem]'>
      <div className='text-xl font-bold text-slate-400'>{collection.title} ({resources.length})</div>
      <div className='text-md font-light text-slate-400'>{collection.description}</div>
    </div>
  );
}
