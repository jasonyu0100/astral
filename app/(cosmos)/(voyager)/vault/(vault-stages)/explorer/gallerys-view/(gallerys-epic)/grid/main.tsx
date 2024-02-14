import { GallerysModalContext } from '@/(cosmos)/(modals)/gallerys-modal/main';
import { vaultMap } from '@/(cosmos)/(voyager)/vault/map';
import { useContext } from 'react';
import { ExploreHomeContext } from '../../page';
import { HomeGalleryAdd } from '../add-gallery/main';
import { HomeGallery } from '../gallery/main';

export function GallerysGrid() {
  const { gallerys } = useContext(ExploreHomeContext);
  const { explorerCreateGalleryModal: createGalleryModal } =
    useContext(GallerysModalContext);

  return (
    <div className='flex w-full flex-row flex-wrap items-center gap-[50px] pb-[50px]'>
      {gallerys.map((gallery) => (
        <HomeGallery
          gallery={gallery}
          href={vaultMap.vault.explorer.collections.id.link(gallery.id)}
        />
      ))}
      <HomeGalleryAdd onClick={() => createGalleryModal.open()} />
    </div>
  );
}
