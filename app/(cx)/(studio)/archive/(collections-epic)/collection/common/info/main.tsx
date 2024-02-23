import { useContext } from 'react';
import {
  CollectionContext,
  ResourcesContext,
} from '@/(logic)/model/gallery/collection/main';

export function CollectionInfo({ empty }: { empty?: boolean }) {
  const collection = useContext(CollectionContext);
  const resources = useContext(ResourcesContext);

  return (
    <div className='flex h-full flex-grow flex-col items-center justify-center space-y-[1rem] p-[1rem]'>
      {empty ? (
        <>
          <div className='text-xl font-bold text-slate-400'>
            Add
          </div>
        </>
      ) : (
        <>
          <div className='text-xl font-bold text-slate-400'>
            {collection.title} ({resources.length})
          </div>
          <div className='text-md font-light text-slate-400'>
            {collection.description}
          </div>
        </>
      )}
    </div>
  );
}
