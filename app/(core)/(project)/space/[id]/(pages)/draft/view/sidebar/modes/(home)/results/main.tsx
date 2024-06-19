import { ContextForGalleryList } from '@/(server)/(controller)/gallery/list';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';
import { useContext } from 'react';
import { SpaceDraftGalleryThumbnail } from './thumbnail/main';

export function SpaceDraftGallerysResults() {
  const galleryListController = useContext(ContextForGalleryList);

  return (
    <div className='flex h-full w-full flex-col overflow-auto px-[1rem]'>
      <div className='flex w-full flex-row flex-wrap gap-[1rem]'>
        {galleryListController.state.objs.map((gallery) => (
          <ContextForGalleryObj.Provider value={gallery}>
            <p className='w-full text-lg font-bold text-slate-300'>
              {gallery.title}
            </p>
            <SpaceDraftGalleryThumbnail />
          </ContextForGalleryObj.Provider>
        ))}
      </div>
    </div>
  );
}
