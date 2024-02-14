import { useContext } from 'react';
import { GalleryCollectionContext } from '../main';

export function CollectionInfo() {
  const { collection } = useContext(GalleryCollectionContext);

  return (
    <div className='flex h-full flex-grow flex-col items-center justify-center space-y-[1rem] p-[1rem]'>
      <div className='text-xl font-bold text-slate-400'>{collection.title}</div>
    </div>
  );
}
