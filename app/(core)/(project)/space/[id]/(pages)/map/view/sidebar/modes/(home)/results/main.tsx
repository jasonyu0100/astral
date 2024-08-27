import { ContextForGalleryList } from '@/(server)/controller/gallery/list';
import { ContextForGalleryObj } from '@/(server)/model/gallery/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpaceMapGalleryAdd } from './add/main';
import { SpaceMapGalleryThumbnail } from './thumbnail/main';

export function SpaceMapGallerysResults() {
  const galleryListController = useContext(ContextForGalleryList);

  return (
    <div className='flex h-full w-full flex-col space-y-[1rem] overflow-auto p-[1rem]'>
      {galleryListController.state.objs.map((gallery) => (
        <ContextForGalleryObj.Provider value={gallery}>
          <SpaceMapGalleryThumbnail />
        </ContextForGalleryObj.Provider>
      ))}
      <HorizontalDivider />
      <SpaceMapGalleryAdd />
    </div>
  );
}
