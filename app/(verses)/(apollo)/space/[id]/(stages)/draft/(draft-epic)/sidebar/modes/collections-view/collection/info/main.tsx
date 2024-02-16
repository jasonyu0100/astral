import { CollectionContext } from '@/(ouros)/(model)/gallery/collection/main';
import { useContext } from 'react';

export function GalleryCollectionInfo() {
  const collection = useContext(CollectionContext);

  return (
    <div className='flex h-full flex-grow flex-col items-center justify-center space-y-[1rem] p-[1rem]'>
      <p className='font-extraBold text-slate-400'>{collection.title}</p>
    </div>
  );
}
