import { useContext } from 'react';
import { DraftSidebarContext } from '../../main';
import { SidebarHomeGalleryAdd } from '../../../../../../../../../(studio)/archive/(gallerys-epic)/gallery/sidebar/add/main';
import { SidebarHomeGallery } from '../../../../../../../../../(studio)/archive/(gallerys-epic)/gallery/sidebar/main';
import { GalleryContext } from '@/(logic)/internal/data/infra/model/gallery/main';
import { ArchiveSidebarModalContext } from '@/(modals)/(studio)/archive/sidebar/main';

export function SidebarGallerysInterface() {
  const { gallerys } = useContext(DraftSidebarContext);
  const modalContext = useContext(ArchiveSidebarModalContext);

  return (
    <div className='flex flex-col space-y-[1rem]' style={{ height: '100%' }}>
      {gallerys.map((gallery) => (
        // eslint-disable-next-line react/jsx-key
        <GalleryContext.Provider value={gallery}>
          <SidebarHomeGallery />
        </GalleryContext.Provider>
      ))}
      <SidebarHomeGalleryAdd
        onClick={() => modalContext.createGallery.open()}
      />
    </div>
  );
}
