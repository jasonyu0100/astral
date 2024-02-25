import { useContext } from 'react';
import { DraftSidebarContext } from '../../main';
import { SidebarHomeGalleryAdd } from '../../../../../../../../../(studio)/archive/(gallerys-epic)/gallery/sidebar/add/main';
import { SidebarHomeGallery } from '../../../../../../../../../(studio)/archive/(gallerys-epic)/gallery/sidebar/main';
import {
  GallerysModalContext,
  useGallerysModal,
} from '@/(modals)/studio/gallery/gallerys-modal/main';
import { GallerysModalView } from '@/(modals)/studio/gallery/gallerys-modal/view';
import { GalleryContext } from '@/(logic)/internal/data/infra/model/gallery/main';

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
