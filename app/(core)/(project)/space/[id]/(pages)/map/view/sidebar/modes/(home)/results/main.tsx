import { HorizontalDivider } from '@/(components)/(indicator)/divider/horizontal/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';
import { useContext } from 'react';
import { SpaceMapCreateGalleryModal } from '../../../../../(modal)/add/gallery/main';
import { SpaceMapGalleryAdd } from './add/main';
import { SpaceMapGalleryThumbnail } from './thumbnail/main';

export function SpaceMapGallerysResults() {
  const galleryListController = useContext(ContextForGalleryList);
  const openableController = useControllerForOpenable();

  return (
    <ContextForOpenable.Provider value={openableController}>
      <SpaceMapCreateGalleryModal />
      <div className='flex h-full w-full flex-col space-y-[1rem] overflow-auto p-[1rem]'>
        {galleryListController.state.objs.map((gallery) => (
          <ContextForGalleryObj.Provider value={gallery}>
            <SpaceMapGalleryThumbnail />
          </ContextForGalleryObj.Provider>
        ))}
        <HorizontalDivider />
        <SpaceMapGalleryAdd />
      </div>
    </ContextForOpenable.Provider>
  );
}
