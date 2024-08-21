import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';
import { useContext } from 'react';
import { SpaceMapCreateGalleryModal } from '../../../../../(modal)/add/gallery/main';
import { SpaceMapGalleryThumbnail } from './thumbnail/main';

export function SpaceMapGallerysResults() {
  const galleryListController = useContext(ContextForGalleryList);
  const openableController = useControllerForOpenable();

  return (
    <ContextForOpenable.Provider value={openableController}>
      <SpaceMapCreateGalleryModal />
      <div className='flex h-full w-full flex-col overflow-auto p-[1rem]'>
        <div className='grid grid-cols-2 gap-[1rem]'>
          {galleryListController.state.objs.map((gallery) => (
            <ContextForGalleryObj.Provider value={gallery}>
              <SpaceMapGalleryThumbnail />
            </ContextForGalleryObj.Provider>
          ))}
        </div>
        {/* <HorizontalDivider />
        <p className='w-full text-lg font-bold text-slate-300'>Add</p>
        <SpaceMapGalleryAdd /> */}
      </div>
    </ContextForOpenable.Provider>
  );
}
