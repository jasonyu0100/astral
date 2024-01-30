import { useContext } from 'react';
import { GalleryCollectionContext } from '../main';

export function CollectionInfo() {
  const { collection } = useContext(GalleryCollectionContext);
  
  return (
    <div className='flex flex-col space-y-[1rem] flex-grow h-full p-[1rem] items-center justify-center'>
      <div className='text-slate-400 text-xl font-bold'>{collection.name}</div>
    </div>
  );
}
