import { createContext, useContext } from 'react';
import { DraftSidebarContext } from '../../main';
import { HomeGalleryAdd } from './add-gallery/main';
import { HomeGallery } from './gallery/main';
import {
  GallerysModalContext,
  useGallerysModal,
} from '@/(cosmos)/(modals)/gallerys-modal/main';
import { GallerysModalView } from '@/(cosmos)/(modals)/gallerys-modal/view';
import { GalleryContext, GalleryObj } from '@/(ouros)/(model)/gallery/main';

export function GallerysInterface() {
  const { gallerys } = useContext(DraftSidebarContext);
  const modalContext = useGallerysModal();

  return (
    <GallerysModalContext.Provider value={modalContext}>
      <GallerysModalView />
      <div className='flex flex-col space-y-[1rem]' style={{ height: '100%' }}>
        {gallerys.map((gallery) => (
          // eslint-disable-next-line react/jsx-key
          <GalleryContext.Provider value={gallery}>
            <HomeGallery />
          </GalleryContext.Provider>
        ))}
        <HomeGalleryAdd
          onClick={() => modalContext.draftCreateGalleryModal.open()}
        />
      </div>
    </GallerysModalContext.Provider>
  );
}
