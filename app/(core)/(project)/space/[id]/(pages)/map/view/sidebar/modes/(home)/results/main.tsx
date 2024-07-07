import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
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
      <div className='flex h-full w-full flex-col overflow-auto px-[1rem]'>
        <div className='flex w-full flex-row flex-wrap gap-[1rem]'>
          {galleryListController.state.objs.map((gallery) => (
            <ContextForGalleryObj.Provider value={gallery}>
              <SpaceMapGalleryThumbnail>
                <p className='w-full text-lg font-bold text-slate-700'>
                  {gallery.title}
                </p>
              </SpaceMapGalleryThumbnail>
            </ContextForGalleryObj.Provider>
          ))}
          <HorizontalDivider />
          <SpaceMapGalleryAdd />
        </div>
      </div>
    </ContextForOpenable.Provider>
  );
}
