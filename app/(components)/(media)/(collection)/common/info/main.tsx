import { useContext } from 'react';
import {
  ContextForGalleryCollectionObj,
} from '@/(server)/(model)/gallery/collection/main';
import { ContextForCollectionResourceList, useControllerForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import { ContextForGalleryCollectionMain } from '@/(server)/(controller)/gallery/collection/main';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';

export function CollectionInfo({ empty }: { empty?: boolean }) {
  const collection = useContext(ContextForGalleryObj)
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <div className='flex flex-grow flex-col items-center justify-center mt-[1rem]'>
      {empty ? (
        <>
          <div className='text-lg font-bold text-slate-400'>
            Add Collection
          </div>
        </>
      ) : (
        <>
          <div className='text-lg font-bold text-slate-400'>
            {collection.title} ({resourceListController.state.objs.length})
          </div>
          <div className='text-md font-light text-slate-400'>
            {collection.description}
          </div>
        </>
      )}
    </div>
  );
}
