import { ContextForGalleryCollectionMain } from '@/(server)/controller/gallery/collection/main';
import { useContext } from 'react';

export function CollectionInfo({ empty }: { empty?: boolean }) {
  const collection = useContext(ContextForGalleryCollectionMain);

  return (
    <div className='mt-[1rem] flex flex-grow flex-col items-center justify-center'>
      {empty ? (
        <>
          <div className='text-lg font-bold text-slate-400'>Add Collection</div>
        </>
      ) : (
        <>
          <div className='text-lg font-bold text-slate-400'>
            {collection.state.obj.title}
          </div>
        </>
      )}
    </div>
  );
}
