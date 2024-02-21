import { GallerysModalContext } from '@/(verses)/(modals)/gallerys-modal/main';
import { useContext } from 'react';
import { ExploreHomeContext } from '../../page';
import { HomeGalleryAdd } from '../gallery/add-gallery/main';
import { HomeGallery } from '../gallery/main';
import { GalleryContext } from '@/(ouros)/(model)/gallery/main';

export function GallerysGrid() {
  const { gallerys } = useContext(ExploreHomeContext);
  const { explorerCreateGalleryModal: createGalleryModal } =
    useContext(GallerysModalContext);

  return (
    <div className='flex w-full flex-row flex-wrap items-center gap-[50px] pb-[50px]'>
      {gallerys.map((gallery) => (
        // eslint-disable-next-line react/jsx-key
        <GalleryContext.Provider value={gallery}>
          <HomeGallery />
        </GalleryContext.Provider>
      ))}
      <HomeGalleryAdd onClick={() => createGalleryModal.open()} />
    </div>
  );
}
