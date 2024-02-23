import { useContext } from 'react';
import { DraftSidebarContext } from '../../main';
import { SidebarHomeGalleryAdd } from '../../../../../../../../../(studio)/vault/(vault-stages)/explorer/gallerys-view/(gallerys-epic)/gallery/sidebar/add/main';
import { SidebarHomeGallery } from '../../../../../../../../../(studio)/vault/(vault-stages)/explorer/gallerys-view/(gallerys-epic)/gallery/sidebar/main';
import {
  GallerysModalContext,
  useGallerysModal,
} from '@/(modals)/gallerys-modal/main';
import { GallerysModalView } from '@/(modals)/gallerys-modal/view';
import { GalleryContext } from '@/(logic)/model/gallery/main';

export function SidebarGallerysInterface() {
  const { gallerys } = useContext(DraftSidebarContext);
  const modalContext = useGallerysModal();

  return (
    <GallerysModalContext.Provider value={modalContext}>
      <GallerysModalView />
      <div className='flex flex-col space-y-[1rem]' style={{ height: '100%' }}>
        {gallerys.map((gallery) => (
          // eslint-disable-next-line react/jsx-key
          <GalleryContext.Provider value={gallery}>
            <SidebarHomeGallery />
          </GalleryContext.Provider>
        ))}
        <SidebarHomeGalleryAdd
          onClick={() => modalContext.draftCreateGalleryModal.open()}
        />
      </div>
    </GallerysModalContext.Provider>
  );
}
