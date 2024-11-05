import { ContextForGalleryList } from '@/architecture/controller/gallery/list';
import { ContextForGalleryObj } from '@/architecture/model/gallery/main';
import { useContext } from 'react';
import { SpaceSpaceGalleryAdd } from './add/main';
import { SpaceSpaceGalleryItem } from './item/main';

export function SpaceSpaceGallerysResults() {
  const galleryListController = useContext(ContextForGalleryList);

  return (
    <div
      className='flex h-full w-full flex-col items-center space-y-[1rem] overflow-auto p-[1rem]'
      style={{ height: 'calc(100% - 9rem)' }}
    >
      {galleryListController.state.more.queryResults.map((gallery) => (
        <ContextForGalleryObj.Provider value={gallery}>
          <SpaceSpaceGalleryItem />
        </ContextForGalleryObj.Provider>
      ))}
      <SpaceSpaceGalleryAdd />
    </div>
  );
}
