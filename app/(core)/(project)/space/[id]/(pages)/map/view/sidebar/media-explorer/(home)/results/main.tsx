import { ContextForGalleryList } from '@/(server)/controller/gallery/list';
import { ContextForGalleryObj } from '@/(server)/model/gallery/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpaceMapGalleryAdd } from './add/main';
import { SpaceMapGalleryItem } from './item/main';

export function SpaceMapGallerysResults() {
  const galleryListController = useContext(ContextForGalleryList);

  return (
    <div className='flex h-full w-full flex-col items-center space-y-[1rem] overflow-auto p-[1rem]'>
      {galleryListController.state.more.queryResults.map((gallery) => (
        <ContextForGalleryObj.Provider value={gallery}>
          <SpaceMapGalleryItem />
        </ContextForGalleryObj.Provider>
      ))}
      <HorizontalDivider />
      <SpaceMapGalleryAdd />
    </div>
  );
}
