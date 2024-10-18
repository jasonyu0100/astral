import { ContextForGalleryList } from '@/(server)/controller/gallery/list';
import { ContextForGalleryObj } from '@/(server)/model/gallery/main';
import { useContext } from 'react';
import { SpacesMapGalleryAdd } from './add/main';
import { SpacesMapGalleryItem } from './item/main';

export function SpacesMapGallerysResults() {
  const galleryListController = useContext(ContextForGalleryList);

  return (
    <div
      className='flex h-full w-full flex-col items-center space-y-[1rem] overflow-auto p-[1rem]'
      style={{ height: 'calc(100% - 9rem)' }}
    >
      {galleryListController.state.more.queryResults.map((gallery) => (
        <ContextForGalleryObj.Provider value={gallery}>
          <SpacesMapGalleryItem />
        </ContextForGalleryObj.Provider>
      ))}
      <SpacesMapGalleryAdd />
    </div>
  );
}
